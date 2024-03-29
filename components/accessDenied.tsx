//this function routes to the sign in page
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href="/api/auth/signin">
          <a
            onClick={(e) => {
              e.preventDefault();
              //routes to the sign in page
              signIn();
            }}
          >
            You must be signed in to view this page
          </a>
        </Link>
      </p>
    </>
  );
}
