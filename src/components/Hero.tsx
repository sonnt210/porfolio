import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Giới thiệu">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow anim-fade-up">{profile.role}</p>
        <h1 className="hero__name anim-fade-up anim-delay-1">{profile.name}</h1>
        <p className="hero__tagline anim-fade-up anim-delay-2">
          {profile.tagline}
        </p>
        <div className="hero__cta anim-fade-up anim-delay-3">
          <a className="btn btn--primary" href="#projects">
            Xem projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Liên hệ
          </a>
        </div>
      </div>
    </section>
  )
}
