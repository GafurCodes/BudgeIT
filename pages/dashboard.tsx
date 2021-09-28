import { getSession } from "next-auth/react";
import prisma from "../util/prisma";

interface CurrentUser {
  id: string;
  image: string;
  name: string;
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  //@ts-ignore
  const userId = session?.user?.id;

  const currentUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return {
    props: { currentUser },
  };
}

export default function Dashboard({
  currentUser,
}: {
  currentUser: CurrentUser;
}) {
  return (
    <>
      <h1>hi {currentUser.name}</h1>
    </>
  );
}
