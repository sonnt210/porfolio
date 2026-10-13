import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

export function Skills() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="skills"
      className={`section section--alt reveal ${visible ? 'reveal--visible' : ''}`}
      ref={ref}
    >
      <div className="section__inner">
        <p className="section__label">Skills</p>
        <h2 className="section__title">Công cụ mình dùng hàng ngày</h2>
        <div className="skills__grid">
          {profile.skills.map((group) => (
            <div key={group.group} className="skills__group">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
