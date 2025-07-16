const User = require("../model/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const sendEmail = require("../utils/email");
const generateOtp = require("../utils/generateOtp");
const jwt = require("jsonwebtoken")


const signToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


const createSendToken = (user , statusCode , res , message) => {
    const token = signToken(user._id);
 
    const cookieOptions = {
        expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
        httpOnly : true,
        secure: process.env.NODE_ENV === 'production', //only secure in production
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'Lax'
    };

    res.cookie('token', token,cookieOptions);

    user.password = undefined;
    user.passwordConfirm = undefined;
    user.otp = undefined;

    res.status(statusCode).json({
        status : 'success',
        message,
        token,
        data : {
            user
        }
    })
}



exports.signup = catchAsync(async(req,res,next) => {
    const {email,password,passwordConfirm,username} = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser) return next(new AppError('Email already registerd', 400));

    const otp = generateOtp();

    const otpExpires = Date.now() + 24*60*60*1000;

    const newUser = await User.create({
        username,
        email,
        password,
        passwordConfirm,
        otp,
        otpExpires,
    });


    try {
        await sendEmail({
            email: newUser.email,
            subject: "Nodemailer Test: OTP Verification for Your Email",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>🔐 Email Verification</h2>
                <p>Hey there! 👋</p>
                <p>You're seeing this message because I'm testing <strong>Nodemailer</strong> for sending emails via Node.js.</p>
                <p>Your One-Time Password (OTP) is:</p>
                <h1 style="color: #007BFF; font-size: 2em;">${otp}</h1>
                <p>This OTP is valid for 10 minutes.</p>
                <hr style="margin: 20px 0;" />
                <p style="font-size: 0.9em; color: #888;">
                    If you didn’t expect this email, you can ignore it. This is just a test 😉
                </p>
                </div>
            `

        })

        createSendToken(newUser,200,res,"Registration successful");
    } catch (error) {
        await User.findByIdAndDelete(newUser.id);
        return next(new AppError("There is an error sending the email, Try Again",500))
    }

})


exports.verifyAccount = catchAsync(async(req,res,next) => {
    const {otp} = req.body;

    if(!otp) {
        return next(new AppError("otp is missing" , 400));
    }

    // create a middleware function to get the currently user function in middleware -> isAuthenticated

    const user = req.user;

    if(user.otp !== otp) {
        return next(new AppError("Invalid OTP", 400));
    }

    if(Date.now() > user.otpExpires) {
        return next(new AppError('otp has expired. Please request a new OTP', 400))
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save({validateBeforeSave : false});

    createSendToken(user,200,res,"Email has been verified");
    
})