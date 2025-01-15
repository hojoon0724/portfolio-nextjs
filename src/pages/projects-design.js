import { designProjectsData } from '@/data/designProjectsData';

// just to see the data
export default function ProjectsDesign({}) {
  return (
    <section className="flex flex-col test-show-projects-container">
      <h1>Design Projects</h1>
      {designProjectsData.map((project, index) => (
        <div className="test-show-list test-show-project-container border-red-500 border-2 mb-8 w-[1200px]" key={index}>
          <div className="test-show-project-title">
            <caption className="mt-6 uppercase">title</caption>
            <h3>{project.title}</h3>
          </div>

          <div className="test-show-project-logo">
            <caption className="mt-6 uppercase">logo</caption>
            <p>{project.logo}</p>
          </div>

          <div className="test-show-project-text">
            <caption className="mt-6 uppercase">text</caption>
            <p>{project.text}</p>
          </div>

          <div className="test-show-project-stack">
            <caption className="mt-6 uppercase">stack</caption>
            <div className="test-show-stack flex flex-wrap">
              {project.stack.map((icon, index) => (
                <p key={index}>{JSON.stringify(icon.name)}, &nbsp;</p>
              ))}
            </div>
          </div>

          <div className="test-show-project-tags">
            <caption className="mt-6 uppercase">tags</caption>
            <div className="test-show-stack flex flex-wrap">
              {project.tags.map((tag, index) => (
                <p key={index}>{JSON.stringify(tag)}, &nbsp;</p>
              ))}
            </div>
          </div>

          <div className="test-show-project-repo-links">
            <caption className="mt-6 uppercase">repo_links</caption>
            <div>{JSON.stringify(project.repoLinks)}</div>
          </div>

          <div className="test-show-project-main-link">
            <caption className="mt-6 uppercase">main_link</caption>
            <div>{JSON.stringify(project.mainLink)}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
