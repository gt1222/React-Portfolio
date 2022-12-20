import React from 'react';

export const Nav = ({page, pages, setPage}) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
    <a className="navbar-brand" href="#" onClick={() => setPage(pages[0])}>Gia</a>
    <div className="navbar navbar-dark" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setPage(pages[0])}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setPage(pages[2])}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setPage(pages[3])}>Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" onClick={() => setPage(pages[4])}>Resume</a>
        </li>
      </ul>
    </div>
  </div>
        </nav>
    )
}