import React from "react";
import { Project } from "../components/Project";
import { projects } from "../utils/projects";

export const Portfolio = () => {
    return (
        <section>
            <h1>Portfolio</h1>
            {projects.map(project => <Project {...project} />)}
        </section>
    )
}