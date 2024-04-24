import Navbar from "@/components/navbar/navbar";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full flex items-center justify-center">
        {children}
      </main>
    </>
  );
}
