import Image from "next/image";
import React from "react";
import User from "./user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const main = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className={styles.main}>
      <h2>EX-Student Association Dharampur high school.</h2>
      <h2>প্রাক্তন ছাত্র সংঘ ধরমপুর মাধ্যমিক বিদ্যালয় </h2>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <User />
      user server side
      {JSON.stringify(session)}
    </main>
  );
};

export default main;
