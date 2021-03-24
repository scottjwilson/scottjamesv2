import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="container uppercase py-4 flex justify-between">
    scott james
    <div className="space-x-5">
      <Link to="/projects">projects</Link>
      <Link to="/contact">contact</Link>
    </div>
  </header>
)

export default Header
