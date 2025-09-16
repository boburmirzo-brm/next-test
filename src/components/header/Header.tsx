'use client'
import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  const handleSignIn = () => {
    open("http://localhost:5173/login")
  }
  return (
    <div className="p-8 bg-slate-300">
      <h2>Header</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/login"}>Login</Link>
      <button onClick={handleSignIn}>sign in</button>
    </div>
  );
};

export default memo(Header);