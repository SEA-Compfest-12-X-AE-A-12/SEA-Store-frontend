import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    classNameName="navbar"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    > */}
     
      <nav className="navbar navbar-expand-md sticky-top">
          {/* <a className="navbar-brand title-brand mr-5" href="/">SeaStore</a> */}
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          
          <div className="collapse navbar-collapse" id="navbarToggle" style={{paddingLeft:'5%'}}>
            <form className="form-inline">
                  <div className="input-group">
                      <input type="text" name="search" class="form-control" placeholder="search" aria-label="search" aria-describedby="search"/>
                      <div className="input-group-append">
                          <button className="btn btn-grad-violet" type="submit">
                              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                              </svg>
                          </button>
                      </div>
                  </div>
              </form>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active mr-4 nav-choice">
                      <a className="nav-link header-menu" href="/">Profile<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                      <a href="/" className="mr-2">
                          <button type="submit" className="btn header-menu logout nav-choice px-4 py-2">Log in</button>
                      </a>
                  </li>
                  <li className="nav-item active">
                      <a href="/" className="mr-2">
                          <button type="submit" className="btn header-menu logout nav-choice px-4 py-2">Register</button>
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
    {/* </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
