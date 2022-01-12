import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // after 3 seconds we redirect the user into the home page
    setTimeout(() => {
      //Go back
      //router.go(-1);
      // Go Forward
      //router.go(1);

      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Sorry!</h1>
      <h2>the page you are trying to access does not exist</h2>
      <h3>
        Back To <Link href="/">Home Page</Link>
      </h3>
    </div>
  );
};

export default NotFound;
