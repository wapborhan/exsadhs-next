"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const username = email.split("@")[0];
    const password = form.password.value;
    const payload = {
      email,
      password,
      username,
      role: "user",
    };
    const result = await registerUser(payload);
    console.log(result, payload);

    if (result?.success) {
      setError("");
      window.location.href = "/";
    } else {
      setError(result?.error);
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
            <form id="form" onSubmit={handleRegister}>
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
                value="REGISTER"
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
              Already a member?{" "}
              <Link href="/auth/signin" title="Login">
                Log in!
              </Link>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
