import { profile, projects } from "../../data/portfolio";
import { ExternalIcon } from "./Icons";
import Section from "./Section";

function ProjectLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-medium text-signal underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
    >
      {children}
      <ExternalIcon />
    </a>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      tone="white"
      title="Projects"
      intro="Web applications I built alongside my research. The rest of my code is on GitHub."
    >
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="border-t-2 border-ink pt-5">
            <h3 className="font-display text-2xl font-medium text-ink">
              {project.name}
            </h3>
            <p className="mt-3 leading-relaxed text-slate">{project.text}</p>
            {project.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-paper px-3 py-1 text-sm text-ink ring-1 ring-line"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {(project.code || project.live) && (
              <p className="mt-5 flex gap-5">
                {project.code && <ProjectLink href={project.code}>Code</ProjectLink>}
                {project.live && <ProjectLink href={project.live}>Live site</ProjectLink>}
              </p>
            )}
          </article>
        ))}
      </div>

      <p className="mt-12">
        <ProjectLink href={profile.links.github}>See all repositories on GitHub</ProjectLink>
      </p>
    </Section>
  );
}
