"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import styles from "./page.module.css";

const User = () => {
  const session = useSession();
  return (
    <div>
      <div className={styles.ctas}>
        {session?.data?.user ? (
          <button
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
      <br /> user client side
      {JSON.stringify(session)}
    </div>
  );
};

export default User;
