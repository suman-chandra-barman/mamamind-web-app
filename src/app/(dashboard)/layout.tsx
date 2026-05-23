import DashboardHeader from "@/components/CommonComponents/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-secondary-background">
      <DashboardHeader />
      <main className="grow">{children}</main>
    </div>
  );
};

export default DashboardLayout;
