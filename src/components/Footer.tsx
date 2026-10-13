import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name}. Built with React + Docker.
      </p>
    </footer>
  )
}
