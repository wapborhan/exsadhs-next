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

        <div className="formWrapper">
          <div className="form">
            <div className="brand">
              <Link href="/">
                <div className="logo">
                  <img
                    src="/assets/img/logo.png"
                    alt="Logo"
                    width="100"
                    style={{
                      borderRadius: "50%",
                      mixBlendMode: "multiply",
                      filter: "contrast(1.1)",
                    }}
                  />
                  <h1>
                    <span className="name">
                      <span> EX-Student</span>
                      <span>Association</span>
                    </span>
                    Dharampur high school.
                  </h1>
                </div>
              </Link>
            </div>
            {/*            
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
            </form> */}

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
          </div>
        </div>
      </main>
    </>
  );
}
