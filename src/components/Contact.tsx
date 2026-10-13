import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="contact"
      className={`section section--alt reveal ${visible ? 'reveal--visible' : ''}`}
      ref={ref}
    >
      <div className="section__inner contact">
        <p className="section__label">Contact</p>
        <h2 className="section__title">Cùng trao đổi về dự án</h2>
        <p className="contact__lead">
          Mở cho cơ hội freelance, full-time hoặc cộng tác kỹ thuật.
        </p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
