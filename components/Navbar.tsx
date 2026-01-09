import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, borderBottom: "1px solid #eee" }}>
      <Link href="/">Home</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/project">Projects</Link>
    </nav>
  );
}
