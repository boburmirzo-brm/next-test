import Link from 'next/link'
import React, { ReactNode } from 'react'

const BlogLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>
        <h2>BlogLayout</h2>
        <div>
            <Link href={"/blog"}>Blog 1</Link>
            <Link href={"/blog/tab1"}>Blog 2</Link>
            <Link href={"/blog/tab2"}>Blog 3</Link>
        </div>
        {children}
    </div>
  )
}

export default BlogLayout