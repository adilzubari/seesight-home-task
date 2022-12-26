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
  return <>{/* User data in form to update */}</>;
}
