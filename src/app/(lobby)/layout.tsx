export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Layout Lobby
      <div>{children}</div>
    </section>
  );
}
