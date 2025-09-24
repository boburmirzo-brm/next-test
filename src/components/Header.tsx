import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <div className='bg-slate-200 flex items-center gap-4 p-5'>
      <h2>Header</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default memo(Header);