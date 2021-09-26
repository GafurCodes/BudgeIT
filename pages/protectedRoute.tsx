import { useSession } from "next-auth/client";
import AccessDenied from "../components/accessDenied";

export default function ProtectedRoute() {
  //hook provided by next-auth
  //session is an object that contains expiration property and user property (with all the user info)
  const [session, loading] = useSession();

  //if the content is loading display loading
  if (typeof window !== "undefined" && loading) return <h1>loading...</h1>;

  //if the user is not authenticated return <AccessDenied/> component
  if (!session) {
    return <AccessDenied />;
  }

  //if the user is authenticated display this
  return (
    <>
      <h1>protected route</h1>
      <p>welcome {session.user?.name} </p>
    </>
  );
}
