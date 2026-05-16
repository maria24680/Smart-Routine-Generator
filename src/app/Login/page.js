"use client";

import Link from "next/link";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlelogin = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
      toast.warning("Please fill all fields!");
      return;
    }

    try {
      await authClient.signIn.email({
        email,
        password,
        
      });

      toast.success("Welcome Back!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      toast.error(err?.message || "Login failed!");
    }
  };

  const handlegoogle = async () => {
    try {
      toast.info("Connecting to Google...");

      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B1D] px-5">

      {/* TOAST */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#070B1D] to-pink-900 opacity-80"></div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-[#121933]/80 border border-purple-500/20 shadow-2xl rounded-3xl p-8">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Login to{" "}
          <span className="text-purple-400">
            Smart Routine
          </span>
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Organize your day smarter 🚀
        </p>

        {/* FORM */}
        <form
          className="space-y-5"
          onSubmit={handleSubmit(handlelogin)}
        >

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#1A2142] text-white border border-transparent outline-none focus:border-purple-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#1A2142] text-white border border-transparent outline-none focus:border-purple-500"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl hover:opacity-90 font-semibold transition-all duration-300 active:scale-95"
          >
            Login
          </button>

          {/* REGISTER */}
          <p className="text-center text-sm text-gray-300 mt-3">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-purple-400 hover:text-pink-400 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-700"></div>
          <p className="text-gray-400 text-sm">OR</p>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        {/* GOOGLE BUTTON */}
        <button
          onClick={handlegoogle}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 py-4 rounded-2xl transition-all duration-300 active:scale-95 font-semibold cursor-pointer"
        >
          <FaGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;