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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: -50,
      rotate: -10,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="skills-section text-center py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <motion.div
          className="row g-2 mt-4 flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // 👈 Trigger when 30% of the section is visible
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 mb-4 p-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <CardComponent
                imageSrc={skill.imageSrc}
                title={skill.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
