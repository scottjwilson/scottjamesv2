import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <h1 className="text-3xl font-black my-4">Hi! I'm Scott</h1>
      <p className="font-mono">
        My purpose is to serve others through digital means. I build landing
        pages, custom shopify stores, and sales funnels for your projects. Let's
        get together and discuss your project.
      </p>
      <button className="flex items-center my-4 px-8 py-4 text-white bg-indigo-800 text-sm rounded-lg hover:bg-indigo-900 transition ease-in-out">
        Get in touch
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </button>
    </section>
    <Projects />
  </Layout>
)

export default IndexPage
