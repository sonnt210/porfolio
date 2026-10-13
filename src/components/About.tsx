import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function About() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      className={`section reveal ${visible ? 'reveal--visible' : ''}`}
      ref={ref}
    >
      <div className="section__inner">
        <p className="section__label">About</p>
        <h2 className="section__title">Backend trước, sản phẩm sau</h2>
        <div className="about__body">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="about__meta">{profile.location}</p>
      </div>
    </section>
  )
}
