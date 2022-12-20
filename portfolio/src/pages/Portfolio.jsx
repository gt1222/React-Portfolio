import React from "react";
import { Project } from "../components/Project";
import { projects } from "../utils/projects";

export const Portfolio = () => {
    return (
        <section>
<div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Portfolio</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-4">
            {projects.map(project => <Project {...project} />)}
            </div>
            </div>
        </section>
    )
}