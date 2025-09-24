import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default memo(Header);