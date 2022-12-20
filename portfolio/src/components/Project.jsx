import React from "react";
// import aboutImage from "../images/aboutImage.jpeg"

export const Project = ({url, title, image, github, description}) => {
    return (
        <>
        <div className="card mx-3" style={{width: '18rem'}}>
  <img src={require("../images/" +
        image +
        '.png')} className="card-img-top" alt="placeholder image" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="card-link">Deployed Link</a>
    <a href={github} className="card-link">Github</a>
  </div>
  </div>
</>
    )
}