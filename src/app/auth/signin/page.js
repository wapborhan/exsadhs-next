"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <main className="containers">
        <div className="back"></div>
        <div className="brand">
          <div className="logo">
            <img
              src="https://www.wapborhan.com/_next/image?url=%2Fwb-logo.png&w=640&q=75"
              alt="Logo"
              width="50"
            />
            <h1>
              <span className="name">
                <span>Save</span>
                <span>Panda</span>
              </span>
              Foundation
            </h1>
          </div>
          <span className="copyright">
            Photo by
            <a
              href="https://unsplash.com/@filipz"
              target="_blank"
              title="Photographer"
            >
              Filip Zrnzević
            </a>
            on
            <a
              href="https://unsplash.com/photos/QsWG0kjPQRY"
              target="_blank"
              title="Background Photo"
            >
              Unsplash
            </a>
          </span>
        </div>
        <div className="formWrapper">
          <div className="form">
            <h2>New member card</h2>
            {error && (
              <p style={{ color: "red" }} clasName="text-center mx-auto w-full">
                {error}
              </p>
            )}
            <form id="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <input type="email" name="email" id="email" required />
                <label for="email">Email</label>
              </div>
              <div className="inputWrapper">
                <input type="password" name="password" id="password" required />
                <label for="password">Password</label>
              </div>
              <input
                form="form"
                type="submit"
                name="register"
                id="register"
                value="LOGIN"
              />
            </form>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="google-signin-btn"
                onClick={() => signIn("google")}
              >
                <span className="google-wrapper">
                  <img
                    className="google-img"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google sigin"
                  />
                </span>
                <span>Sign Up with Google</span>
              </button>
            </div>
            <span id="login">
              {"Don't have an account? "}
              <Link href="/auth/signup" title="Login">
                Create one!
              </Link>
            </span>
          </div>
        </div>
      </main>
      <div className="flex justify-between items-center w-screen h-screen">
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#f3f3f3] rounded-2xl shadow-xl">
          <div className="flex flex-row gap-3 pb-4">
            <div className="text-center">
              <img
                src="https://www.wapborhan.com/_next/image?url=%2Fwb-logo.png&w=640&q=75"
                alt="Logo"
                width="50"
              />
            </div>
            <h1 className="text-4xl font-bold text-[#4B5563] my-auto">Login</h1>
          </div>

          {/* Credentials Login */}
          <form className="flex flex-col">
            <div className="pb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-[#111827]"
              >
                Email
              </label>
              <div className="relative text-gray-400">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-3 mb-2 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="pb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-[#111827]"
              >
                Password
              </label>
              <div className="relative text-gray-400">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-3 mb-2 bg-gray-50 text-gray-600 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#4F46E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
            ></button>

            <div className="text-sm font-light text-[#6B7280] text-center">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-[#4F46E5] hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 font-medium text-gray-500">
              OR
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Login */}
          <div className="flex flex-row gap-2 justify-center">
            <button class="google-signin-btn" onClick={() => signIn("google")}>
              <span class="google-wrapper">
                <img
                  class="google-img"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google sigin"
                />
              </span>
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
