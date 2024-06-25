import React from 'react';
import './style.css';

function Skills() {
  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 60 },
    { name: 'JavaScript', level: 50 },
    { name: 'REACT', level: 70 },
    { name: 'Bootstrap', level: 60 },
    { name: 'Semantic-ui', level: 55 },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            {skills.slice(0, 3).map(skill => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>
                  <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {skills.slice(3).map(skill => (
              <div className="progress" key={skill.name}>
                <span className="skill">
                  <span>{skill.name}</span>
                  <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
