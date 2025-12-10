import React, { useState } from "react";

export default function AdityaUniversityAuth() {
  const [isEmployee, setIsEmployee] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">

      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="https://res.cloudinary.com/dfxec3czi/video/upload/v1757921880/Drone_shot_Aditya_ntq0k5.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative w-full max-w-md z-10">

        {/* 🔥 Logo + Title */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJUpXOs0chE8i7X7bhjr3MnK8PWHV1DHQlg&s"
            alt="Aditya University Logo"
            className="w-20 h-20 object-contain drop-shadow-xl mb-3 rounded-full"
          />
          <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow-lg tracking-tight">
            Aditya University
          </h1>
          <p className="text-sm text-yellow-100/90">Student & Employee Login Portal</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-5">
          <div className="relative inline-flex items-center p-1 rounded-full bg-white/10 backdrop-blur-lg">
            <button
              onClick={() => setIsEmployee(false)}
              className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isEmployee
                  ? "bg-yellow-300 text-slate-900 shadow-lg"
                  : "text-white/80"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setIsEmployee(true)}
              className={`ml-1 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                isEmployee
                  ? "bg-yellow-300 text-slate-900 shadow-lg"
                  : "text-white/80"
              }`}
            >
              Employee
            </button>
          </div>
        </div>

        {/* Flip Card */}
        <div className="relative perspective-1000">
          <div
            className={`relative w-full h-[380px] rounded-2xl shadow-2xl transform-style preserve-3d transition-transform duration-700 ${
              isEmployee ? "rotate-y-180" : ""
            }`}
          >
  {/* FRONT – Student */}
<div className="absolute inset-0 backface-hidden rounded-2xl bg-white/20 backdrop-blur-xl p-8 border border-white/20">
  <div className="text-white">
    <h2 className="text-2xl font-bold mb-1">Student Login</h2>
    <p className="text-sm text-white/70 mb-6">
      Enter your Roll No. and password
    </p>

    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Roll No. (e.g. 23MH1A4215)"
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-300"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-300"
      />

      <button className="mt-3 w-full py-3 rounded-lg font-semibold bg-yellow-300 text-slate-900 shadow-lg">
        Login
      </button>
    </form>

    <div className="mt-6 text-center text-white/80">
      Are you an employee?{" "}
      <button onClick={() => setIsEmployee(true)} className="underline">
        Switch to Employee
      </button>
    </div>
  </div>
</div>

{/* BACK – Employee */}
<div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-white/20 backdrop-blur-xl p-8 border border-white/20">
  <div className="text-white">
    <h2 className="text-2xl font-bold mb-1">Employee Login</h2>
    <p className="text-sm text-white/70 mb-6">
      Enter your Employee ID and password
    </p>

    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Employee ID (e.g. EMP1243)"
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-300"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-300"
      />

      <button className="w-full py-3 rounded-lg font-semibold bg-yellow-300 text-slate-900 shadow-lg">
        Login
      </button>
    </form>

    <div className="mt-5 text-center text-white/80">
      Back to student login?{" "}
      <button onClick={() => setIsEmployee(false)} className="underline">
        Student Login
      </button>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      {/* Flip CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
