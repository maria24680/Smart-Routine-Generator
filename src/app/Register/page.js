"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaGoogle,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  // EMAIL REGISTER
  const onSubmit = async (data) => {
    const { name, image, email, password } = data;

    if (!name || !email || !image || !password) {
      toast.warning("Please fill all fields!");
      return;
    }

    try {
      await authClient.signUp.email({
        name,
        email,
        image,
        password,
      });

      toast.success("Account created successfully!");

      router.push("/login"); // clean redirect
    } catch (err) {
      toast.error(err?.message || "Registration failed!");
    }
  };

  // GOOGLE SIGNUP
  const handleGoogle = async () => {
    try {
      toast.info("Connecting to Google...");

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // important
      });
    } catch (err) {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B1D] px-5 text-white">

      <ToastContainer position="top-right" autoClose={2000} />

      <div className="w-full max-w-md bg-[#121933]/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mb-6">
          Join Smart Routine 🚀
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400" />
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full pl-12 py-3 rounded-xl bg-[#1A2142]"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full pl-12 py-3 rounded-xl bg-[#1A2142]"
            />
          </div>

          {/* IMAGE */}
          <div className="relative">
            <FaImage className="absolute left-4 top-4 text-gray-400" />
            <input
              {...register("image")}
              placeholder="Profile Image URL"
              className="w-full pl-12 py-3 rounded-xl bg-[#1A2142]"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />
            <input
              {...register("password")}
              type="password"
              placeholder="Password (min 8 chars)"
              className="w-full pl-12 py-3 rounded-xl bg-[#1A2142]"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-xl font-semibold">
            Create Account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm mt-4 text-gray-300">
          Already have account?{" "}
          <Link href="/login" className="text-purple-400">
            Login
          </Link>
        </p>

        {/* DIVIDER */}
        <div className="my-5 flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* GOOGLE */}
        <button
          onClick={handleGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold"
        >
          <FaGoogle />
          Continue with Google
        </button>

      </div>
    </div>
  );
}