export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer fade-up">
      <p className="footer-quote">
        "With great power comes great responsibility." — Uncle Ben
      </p>
      <p className="footer-easter">
        Try the Konami code ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ for a surprise 🕷
      </p>
    </footer>
  )
}
