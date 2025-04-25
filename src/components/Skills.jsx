import React from "react";
import CardComponent from "./others/CardComponent";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { title: "Java Spring Boot", imageSrc: "assets/skills/spring_boot.png" },
    { title: "Java Spring MVC", imageSrc: "assets/skills/spring_mvc.png" },
    { title: "Play Framework", imageSrc: "/assets/skills/playfm.png" },
    { title: "Apache Wicket", imageSrc: "/assets/skills/wicket-logo.png" },
    { title: "React", imageSrc: "/assets/skills/react.png" },
    { title: "Node", imageSrc: "/assets/skills/nodejs.png" },
    { title: "JavaScript", imageSrc: "/assets/skills/js.png" },
    { title: "VB.net", imageSrc: "/assets/skills/vb.png" },
    { title: "C#", imageSrc: "/assets/skills/csharp.png" },
    { title: "JQuery", imageSrc: "/assets/skills/jquery.png" },
    { title: "PHP", imageSrc: "/assets/skills/php.png" },
    { title: "PostgreSQL", imageSrc: "/assets/skills/plsql.png" },
    { title: "MySQL", imageSrc: "/assets/skills/mysql.png" },
    { title: "Oracle Database", imageSrc: "/assets/skills/oracle.png" },
    { title: "Building REST APIs", imageSrc: "/assets/skills/restapi.png" },
    { title: "AWS", imageSrc: "/assets/skills/aws.png" },
    { title: "GitHub", imageSrc: "/assets/skills/github.png" },
    { title: "Tortoise SVN", imageSrc: "/assets/skills/tortoise.png" }
  ];

  return (
    <section id="skills" className="skills-section text-center py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <div className="row g-2 mt-4 flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 mb-4 p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <CardComponent
                imageSrc={skill.imageSrc}
                title={skill.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
