// import React from 'react';
// import logo from '../assets/image.png';

// export default function LogoWithRipples() {
//   return (
//     <div className="relative flex items-center justify-center w-screen h-screen bg-[#000814] overflow-hidden">
//       {/* Glowing Blurred Background */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative w-[60vw] h-[60vw] max-w-[400px] max-h-[400px]">
//           {/* Outer Glow Rings */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-teal-400 blur-3xl opacity-20 animate-pulse-slow" />
//           <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-10 animate-ping-slow" />
//           <div className="absolute inset-[8%] rounded-full border-2 border-blue-400 opacity-10 animate-ping-slower" />
//           <div className="absolute inset-[16%] rounded-full border-2 border-blue-300 opacity-10 animate-ping-slowest" />

//           {/* Transparent Center */}
//           <div className="absolute inset-[25%] rounded-full bg-[#000814]" />
//         </div>
//       </div>

//       {/* Logo */}
//       <div className="z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-floatAndRotate">
//         <img
//           src={logo}
//           alt="Glubs Logo"
//           className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
//         />
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import logo from '../assets/image.png';

// export default function LogoWithRipples() {
//   return (
//     <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-white dark:bg-[#000814] transition-colors duration-500">
//       {/* Ripple Glow Animation (Color matched to your screenshot) */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative w-[60vw] h-[60vw] max-w-[400px] max-h-[400px]">
//           {/* Glow background based on screenshot theme */}
//           <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse-slow
//             bg-gradient-to-tr
//             from-[#4f46e5] via-[#6366f1] to-[#e0e7ff]
//             dark:from-[#0a3b84] dark:via-[#5593e1] dark:to-[#e0f0ff]" />

//           {/* Ripple Rings using screenshot color scheme */}
//           <div className="absolute inset-0 rounded-full border-2 border-[#6366f1] opacity-30 dark:border-sky-500 dark:opacity-10 animate-ping-slow" />
//           <div className="absolute inset-[8%] rounded-full border-2 border-[#818cf8] opacity-30 dark:border-sky-400 dark:opacity-10 animate-ping-slower" />
//           <div className="absolute inset-[16%] rounded-full border-2 border-[#c7d2fe] opacity-30 dark:border-indigo-300 dark:opacity-10 animate-ping-slowest" />

//           {/* Transparent center circle */}
//           <div className="absolute inset-[25%] rounded-full bg-white dark:bg-[#000814] z-10 transition-colors duration-500" />
//         </div>
//       </div>

//       {/* Logo: untouched */}
//       <div className="z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-floatAndRotate">
//         <img
//           src={logo}
//           alt="Glubs Logo"
//           className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(79,70,229,0.3)] dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
//         />
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import logo from '../assets/image.png'; // Use a white or blue-tinted logo here

// export default function LogoWithRipples() {
//   return (
//     <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-white dark:bg-[#000814] transition-colors duration-500">
//       {/* Ripple Glow Animation */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative w-[60vw] h-[60vw] max-w-[400px] max-h-[400px]">
          
//           {/* Background Pulse Glow matching your home gradient */}
//           <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse-slow
//             bg-gradient-to-tr
//             from-[#4f46e5] via-[#6366f1] to-[#e0e7ff]
//             dark:from-[#0a3b84] dark:via-[#5593e1] dark:to-[#e0f0ff]" />

//           {/* Ripple Rings */}
//           <div className="absolute inset-0 rounded-full border-2 border-[#6366f1] opacity-30 dark:border-sky-500 dark:opacity-10 animate-ping-slow" />
//           <div className="absolute inset-[8%] rounded-full border-2 border-[#818cf8] opacity-30 dark:border-sky-400 dark:opacity-10 animate-ping-slower" />
//           <div className="absolute inset-[16%] rounded-full border-2 border-[#c7d2fe] opacity-30 dark:border-indigo-300 dark:opacity-10 animate-ping-slowest" />

//           {/* Transparent center behind logo */}
//           <div className="absolute inset-[25%] rounded-full bg-white dark:bg-[#000814] z-10 transition-colors duration-500" />
//         </div>
//       </div>

//       {/* Logo — use white or blue version */}
//       <div className="z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-floatAndRotate">
//         <img
//           src={logo}
//           alt="Glubs Logo"
//           className="
//             w-full h-full object-contain
//             invert-0
//             drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]
//             dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]
//           "
//         />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import logo from '../assets/image.png';

export default function LogoWithRipples() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-white dark:bg-[#000814] overflow-hidden transition-colors duration-500">
      {/* Ripple Glow Animation (based on your homepage theme) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] rounded-full">
          {/* Gradient Glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse-slow
            bg-gradient-to-tr from-[#4f46e5] via-[#6366f1] to-[#e0e7ff]
            dark:from-[#0a3b84] dark:via-[#5593e1] dark:to-[#e0f0ff]"
          />

          {/* Ripple Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#6366f1] opacity-30 dark:border-sky-500 dark:opacity-10 animate-ping-slow" />
          <div className="absolute inset-[8%] rounded-full border-2 border-[#818cf8] opacity-30 dark:border-sky-400 dark:opacity-10 animate-ping-slower" />
          <div className="absolute inset-[16%] rounded-full border-2 border-[#c7d2fe] opacity-30 dark:border-indigo-300 dark:opacity-10 animate-ping-slowest" />

          {/* Transparent Center */}
          <div className="absolute inset-[25%] rounded-full bg-white dark:bg-[#000814] z-10 transition-colors duration-500" />
        </div>
      </div>

      {/* Logo — now completely static (no animation) */}
      <div className="z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <img
          src={logo}
          alt="Glubs Logo"
          className="
            w-full h-full object-contain
            drop-shadow-[0_0_12px_rgba(79,70,229,0.3)]
            dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]
          "
        />
      </div>
    </div>
  );
}
