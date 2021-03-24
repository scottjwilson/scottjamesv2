import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header className=" py-6">
        <div className="container flex justify-between">
          <span className="font-black uppercase text-indigo-800">
            <Link to="/">scott james</Link>
          </span>
          <div className="space-x-5">
            <Link to="/projects" className="capitalize">
              Projects
            </Link>
            <Link to="/contact" className="capitalize">
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <footer>
        <div className="container my-4 font-mono text-center">
          {" "}
          © {new Date().getFullYear()}, Scott James
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
