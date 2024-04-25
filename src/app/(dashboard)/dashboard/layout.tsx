import SideNav from "@/components/sidenav/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideNav/>
      <main className="ml-64">{children}</main>
    </>
  );
}
