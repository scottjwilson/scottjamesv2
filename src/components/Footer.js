import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="container my-4 font-mono text-center">
        {" "}
        © {new Date().getFullYear()}, Scott James
      </div>
    </footer>
  )
}

export default Footer
