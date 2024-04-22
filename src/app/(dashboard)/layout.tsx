export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Dashboard Layout
      <div>{children}</div>
    </section>
  );
}
