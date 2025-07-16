const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require('./controller/errorController');
const userRouter = require("./routes/userRouters");
const AppError = require("./utils/appError");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// Users api url
app.use('/api/v1/users' , userRouter);

// Users api urls
// app.all("*", (req,res,next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on this server!` , 404))
// })

// Error Handle for (next())
app.use(globalErrorHandler);

module.exports = app;