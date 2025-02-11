import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import { projects } from "./data/projects";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "SQL",
    "HTML5",
    "CSS3",
    "Git",
    "REST APIs",
    "Express.js",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">EK</div>
          <div className="nav-links">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setActiveSection("home")}
            >
              Home
            </Link>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route
            path="/"
            element={
              <>
                <section id="home" className="section hero">
                  <div className="hero-content">
                    <h1>
                      Hi, I'm <span className="highlight">Eric Kariuki</span>
                    </h1>
                    <h2>Fullstack Developer</h2>
                    <p className="hero-description">
                      Transforming ideas into exceptional digital experiences.
                      With expertise in both frontend and backend development, I
                      create scalable, user-friendly applications that solve
                      real-world problems.
                    </p>
                    <p className="hero-subtext">
                      Specialized in Web Technologies
                    </p>
                    <div className="hero-cta">
                      <a href="#contact" className="btn">
                        Get in Touch
                      </a>
                      <a href="#projects" className="btn btn-outline">
                        View My Work
                      </a>
                    </div>
                  </div>
                </section>

                <section id="about" className="section">
                  <h2>About Me</h2>
                  <p>
                    I’m Eric Kariuki, a dedicated full-stack developer with a
                    strong passion for building efficient, scalable, and
                    user-friendly applications. My journey in software
                    development has been fueled by a love for problem-solving
                    and a commitment to continuous learning. My goal is to
                    contribute to impactful projects and collaborate with
                    innovative minds in the tech industry.
                  </p>

                  <div className="skills">
                    <h3>Skills</h3>
                    <div className="skills-container">
                      {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="projects" className="section">
                  <h2>My Projects</h2>
                  <div className="projects-grid">
                    {projects.map((project, index) => (
                      <div key={index} className="project-card">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-technologies">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="skill-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link to={`/project/${project.id}`} className="btn">
                          View Details
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="contact" className="section">
                  <h2>Get In Touch</h2>
                  <p>Interested in working together? Let's connect!</p>
                  <div className="contact-details">
                    <p>
                      <strong>Email:</strong> kricoo450@gmail.com
                    </p>
                    <p>
                      <strong>Instagram:</strong> @its_rico24
                    </p>
                    <p>
                      <strong>Contact:</strong> (+254)768539476
                    </p>
                  </div>
                </section>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
