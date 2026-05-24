import DashboardHeader from "@/components/CommonComponents/DashboardHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard - Mamamind",
  description:
    "Access your personalized dashboard to manage your account, view your activity, and explore exclusive features on Mamamind. Stay connected and in control of your experience with us.",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-secondary-background">
      <DashboardHeader />
      <main className="grow">{children}</main>
    </div>
  );
};

export default DashboardLayout;
