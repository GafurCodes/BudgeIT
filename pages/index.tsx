import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import prisma from "../util/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const user = await prisma.user.findFirst();

  return { props: { user } };
};

const Home: NextPage = ({ user }) => {
  const { name, email } = user;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        hi there {name} ({email})
      </h1>
    </div>
  );
};

export default Home;
