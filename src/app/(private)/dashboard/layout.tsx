import Link from "next/link";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <aside className="w-[250px] h-screen bg-slate-200 p-6">
        <h2>Dashboard</h2>
        <div className="flex flex-col gap-3 mt-10">
          <Link href={"/dashboard"}>Statistic</Link>
          <Link href={"/dashboard/users"}>Users</Link>
          <Link href={"/dashboard/products"}>Products</Link>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
