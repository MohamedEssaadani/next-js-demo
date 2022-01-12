import Head from "next/head";
import React from "react";
import styles from "../../styles/users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

export default function index({ users }) {
  return (
    <>
      <Head>
        <title>Books | Users List</title>
      </Head>
      <div>
        <h1>All Users </h1>
        {users.map((user) => (
          <div key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
