// app/verify/page.tsx (server component)
import Verify from "@/components/verify/Verify";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; password?: string }>;
}) 
{
  const {email, password} = await searchParams
  return <Verify email={email} password={password} />;
}
