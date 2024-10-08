"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="sticky top-0 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>

          <div className="flex cursor-pointer items-center gap-8 font-medium">
            <Link href="/home">Home</Link>
            {session.data ? (
              <>
                <Link href="/write">Write</Link>
                <Link href="/profile">{session.data.user.name}</Link>
                <h3 onClick={() => signOut()}>Logout</h3>
              </>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;