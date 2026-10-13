import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function Projects() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="projects"
      className={`section reveal ${visible ? 'reveal--visible' : ''}`}
      ref={ref}
    >
      <div className="section__inner">
        <p className="section__label">Projects</p>
        <h2 className="section__title">Một vài sản phẩm đã / đang làm</h2>
        <ul className="projects__list">
          {profile.projects.map((project) => (
            <li key={project.title} className="projects__item">
              <div className="projects__head">
                <h3>{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__link"
                >
                  GitHub
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="projects__stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
