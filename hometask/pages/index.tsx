// import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import UseGraphQL from "../hooks/useGraphQL";

const inter = Inter({ subsets: ["latin"] });

interface List {
  list: [];
}

export default function Home({ list }: List) {
  const router = useRouter();
  console.log(list);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Users</p>
          <div>
            <input
              type={"button"}
              value={"+ Create new user"}
              onClick={() => router.push("/create")}
            />
          </div>
        </div>
        {process.env.NODE_ENV === "production" ? (
          list.map(({ email }, index) => <p key={index}>{email}</p>)
        ) : (
          <div style={{ height: "100%" }}>
            <a key={0} href="/0">
              asdasd@gmail.com
            </a>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  let LIST = [] as Array<Object>;

  const { getUsers } = UseGraphQL();
  LIST = [...(await getUsers())];

  return {
    props: {
      list: LIST,
    },
  };
}
