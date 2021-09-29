import { getSession, useSession } from "next-auth/react";
import AccessDenied from "../components/accessDenied";
import Sidebar from "../components/Sidebar/sidebar";
import prisma from "../util/prisma";

interface CurrentUser {
  id: string;
  image: string;
  name: string;
}

//passing user data to the dashboard
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  //@ts-ignore
  const userId = session?.user?.id;

  //if the user is not logged in, return an empty object
  if (!session) return { props: {} };

  //otherwise, return the user object from the database
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
  //using the hook to get the status of authentication
  const { status } = useSession();

  //self-explanatory
  if (status === "authenticated") {
    return <Sidebar currentUser={currentUser} />;
  } else if (status === "unauthenticated") {
    return <AccessDenied />;
  }

  return <h1>loading</h1>;
}
