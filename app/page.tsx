import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link href={"/docs"}>Go to Docs</Link>
    </main>
  );
}
