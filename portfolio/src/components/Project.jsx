import React from "react";

export const Project = ({url, title, github, description}) => {
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="card-link">Github Repo</a>
    <a href={github} className="card-link">Github Repo</a>
  </div>
  </div>
</>
    )
}