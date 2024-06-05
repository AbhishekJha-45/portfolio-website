"use client";
import React, { useState, useRef } from "react";

import ProjectTag from "@components/ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@components/ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "It is a portfolio website made using React and Tailwind CSS and Next.Js",
    image: "/images/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Weather Forcast app",
    description: "It is a weather app made using React and OpenWeather API",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekJha-45/portfolio-website",
    previewUrl:
      "https://abhishek-jha-portfolio.vercel.app/projects/weather-forcast",
  },
  {
    id: 3,
    title: "Youtube Clone Backend API",
    description: "Youtube Clone Backend API using Node.js and Express",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekJha-45/youtube_clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Fake Store web App",
    description: "Fake Store web App using React and Fake Store API",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekJha-45/fake-store-web-app",
    previewUrl: "https://abhishekjha-45.github.io/fake-store-web-app/",
  },
  {
    id: 5,
    title: "SocialPulse",
    description: "Social Media App using MERN Stack (Backend only for now)",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekJha-45/social_media",
    previewUrl: "https://abhishek-jha-portfolio.vercel.app/projects/",
  },
  {
    id: 6,
    title: "React Redux Todo App",
    description: "Todo App using React and Redux Toolkit",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AbhishekJha-45/react-redux-todo-app",
    previewUrl: "https://abhishek-jha-portfolio.vercel.app/projects/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center lg:gap-x-5 gap-x-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid columns-3 gap-8 md:gap-12 py-16"
        style={{ padding: "2rem 0" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
