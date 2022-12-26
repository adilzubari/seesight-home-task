import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import UseGraphQL from "../../hooks/useGraphQL";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { createUser } = UseGraphQL();

  async function handleSubmit(e: any) {
    e.preventDefault();
    await createUser(Fname, Lname, Email, Password);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Create New User</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="fname"
            placeholder="First Name"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <input
            name="lname"
            placeholder="Last Name"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <input
            name="email"
            placeholder="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            name="password"
            placeholder="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input type={"submit"} value={"create"} />
        </form>
      </main>
    </>
  );
}
