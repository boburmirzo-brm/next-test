import Link from 'next/link';
import { memo, ReactNode } from 'react';

const ContactLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className="Layout">
       <Link href={"/contact"}>Tab 1</Link>
       <Link href={"/contact/tab2"}>Tab 2</Link>
       <Link href={"/contact/tab3"}>Tab 3</Link>
       {children}
    </div>
  );
};

export default memo(ContactLayout);