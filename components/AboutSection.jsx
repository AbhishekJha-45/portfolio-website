"use client";
import img from "@Images/about-image.jpg";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Major Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next Js</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Mongo Db</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>Aws</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Srm Institute of Science and Technology (NCR Campus)</li>
        <li>Sant Gyaneshwar Model School</li>
        <li>Pole Star School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Version Control with Meta</li>
        <li>Foundations of Cybersecurity</li>
        <li>AWS Academy Cloud Foundations</li>
        <li>Introduction to Cybersecurity</li>
        <li>Artificial Intelligence (AI) with IBM</li>
        <li>AWS Academy Machine Learning Foundations</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center justify-between py-8 px-2 xl:gap-16 sm:py-16 xl:px-5">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4" id="#about">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express,
            MongoDB,Docker ,linux,aws and HTML, CSS. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
        </div>
        <div className="">
          <div className="flex flex-row justify-start items-start mt-5 lg:mt-0">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              id="skills"
            >
              {" "}
              Major Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              id="education"
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              id="certifications"
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-5 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
