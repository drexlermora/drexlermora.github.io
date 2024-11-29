import React, { useState } from "react";
import CardComponent from "./others/CardComponent";


const Skills = () => {
  const skills = [
    { title: "React", imageSrc : "/assets/skills/react.png" , text : "With a strong background in front-end programming, I have vast expertise creating dynamic and responsive user interfaces with React.js. My skills include designing and building interactive web applications, using React's component-based architecture to construct reusable UI components, and guaranteeing optimal performance and scalability. I understand modern front-end programming approaches, such as state management, hooks, and API integration. "},
    { title: "Java Spring Boot", imageSrc : "assets/skills/spring_boot.png",  text: "I have extensive understanding of backend development, having successfully designed and implemented solid backend systems with Spring Boot. With considerable experience in developing scalable and efficient server-side applications, I've used Spring Boot's powerful features like dependency injection, RESTful APIs, and database connectivity to construct high-performance, maintainable backends." },
    { title: "Java Spring MVC", imageSrc : "assets/skills/spring_mvc.png" , text: "I've worked extensively with Java Spring MVC to create robust and scalable online apps. I am skilled at using the Spring MVC framework to create modular, maintainable backend systems by utilizing powerful features like dependency injection and data binding. I've successfully built and deployed RESTful APIs, integrated third-party services, and improved application performance while adhering to security best practices and efficient data processing."},
    { title: "VB.net", imageSrc : "/assets/skills/vb.png", text: "I have substantial experience working with VB.NET, utilizing it to develop a wide range of applications, from desktop software to web-based solutions. My expertise includes designing and implementing user interfaces, developing database-driven applications, and integrating third-party libraries and services. I am skilled in working with object-oriented programming principles, managing application lifecycle processes, and optimizing code for performance and maintainability." },
    { title: "PostgreSQL", imageSrc : "/assets/skills/plsql.png",text: "I have extensive experience in converting Oracle SQL queries and database structures to PostgreSQL, ensuring seamless migration and optimization of data models. This includes translating complex SQL queries, views, and stored procedures from Oracle to PostgreSQL syntax, while maintaining functionality and improving performance. I am also skilled in creating and optimizing PostgreSQL functions, triggers, and procedures, ensuring they are efficient, scalable, and well-integrated into the overall application architecture."},
    { title: "Play Framework (Java)", imageSrc : "/assets/skills/playfm.png",  text: "I am knowledgeable in using the Play Framework (Java) for developing scalable and high-performance backend applications. My experience includes building RESTful APIs, handling asynchronous processing, and implementing secure, efficient, and maintainable server-side logic" },
    { title: "C#", imageSrc : "/assets/skills/csharp.png", text: "I have deep experience with C# to create a number of applications, including desktop, web, and enterprise-level solutions." },
    { title: "Building REST APIs", imageSrc : "/assets/skills/restapi.png",  text: "I have years of experience developing strong and scalable REST APIs, with a focus on delivering efficient, secure, and simple-to-use services. My experience includes creating API endpoints, managing HTTP methods (GET, POST, PUT, and DELETE), and assuring adequate status code handling for varied answers." },
    { title: "Javascript", imageSrc : "/assets/skills/js.png", text: "I have extensive experience using JavaScript to build dynamic, interactive web applications. My expertise spans both client-side and server-side development, including working with modern library like  React. I am proficient in DOM manipulation, event handling, AJAX, and asynchronous programming using Promises and async/await to ensure smooth user experiences" },
    { title: "PHP", imageSrc : "/assets/skills/php.png",  text: "I have significant experience using PHP for backend development, building dynamic, database-driven web applications. My expertise includes working with PHP frameworks like Laravel and Symfony to streamline development processes, implement RESTful APIs, and integrate third-party services. I am proficient in designing and optimizing MySQL databases, managing sessions, and ensuring secure data handling with features like user authentication and authorization." },
    { title: "MySQL", imageSrc : "/assets/skills/mysql.png", text: "I possess deep experience with MySQL, having utilized it for a wide range of projects that involve designing, developing, and optimizing relational database systems. I am adept at writing complex SQL queries, including joins, subqueries, and aggregations, to efficiently handle data retrieval and manipulation. Additionally, I have a strong understanding of database normalization, indexing, and performance optimization techniques, ensuring fast, scalable, and reliable database operations." },
    { title: "Oracle Database", imageSrc : "/assets/skills/oracle.png", text: "I have significant experience using Oracle as the database for various projects, including database design, management, and optimization. I am proficient in writing complex SQL queries, stored procedures, and triggers, and have a deep understanding of Oracle's advanced features such as indexing, partitioning, and performance tuning. I have worked on optimizing large-scale databases, ensuring high availability, data integrity, and security." },
    { title: "Data Structures and Algorithms", imageSrc : "/assets/skills/datastruct.png" , text: "I have a strong understanding of data structures and algorithms, with a solid foundation in their practical application to solve complex programming problems. I am proficient in using fundamental data structures such as arrays, linked lists, stacks, queues, trees, graphs, and hash tables to optimize performance and memory usage." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  const indexOfLastProject = currentPage * skillsPerPage;
  const indexOfFirstProject = indexOfLastProject - skillsPerPage;
  const currentskills = skills.slice(indexOfFirstProject, indexOfLastProject);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  return (
    <section id="skills" className="skills-section text-center">
      <div className="container">
        <h2>My Skills</h2>
        <div className="row mt-4">
          {currentskills.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <CardComponent
                imageSrc={project.imageSrc}
                title={project.title}
                text={project.text}
              />
            </div>
          ))}
        </div>

        <div className="pagination mt-4">
          <ul className="pagination-list">
            <li>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
