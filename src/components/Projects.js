import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          id
          title
          date
          description
          url
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulProject: { nodes: projects },
  } = data
  return (
    <section className="mt-6 container">
      <span className="text-2xl font-bold my-4 flex items-center">
        Projects{" "}
        <div className="w-4 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </span>
      <div className="card-container">
        {projects.map(project => {
          return (
            <div className="card">
              <img
                src={project.image.fluid.src}
                alt=""
                className="rounded-t-lg"
              />
              <div className="p-6 space-y-2">
                <h1 className="font-bold">{project.title}</h1>
                <p className="font-thin text-xs">{project.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
