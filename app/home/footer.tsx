import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Auserene</span>
      <nav aria-label="Footer">
        <Link href="/blog">Blog</Link>
        <a href="/letter">Letter</a>
        <a href="/support">Support</a>
        <a href="/crisis-resources">Crisis resources</a>
        <a href="/privacy-policy">Privacy</a>
        <a href="/terms-of-service">Terms</a>
        <a href="/subprocessors">Subprocessors</a>
      </nav>
    </footer>
  );
}
