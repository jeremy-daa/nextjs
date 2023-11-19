import LoginLinks from "@/components/LoginLinks";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex justify-center py-10 text-slate-100">
      <LoginLinks />
    </div>
  );
};

export default page;
