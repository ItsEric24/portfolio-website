import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import "./ComponentStyles.css"

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects[parseInt(id)]

  if (!project) return <div>Project not found</div>

  return (
    <div className="project-detail">
      <div className="project-header">
        <img src={project.image} alt={project.title} className="project-image" />
        <h1>{project.title}</h1>
      </div>
      
      <div className="project-content">
        <div className="project-info">
          <h2>Overview</h2>
          <p>{project.longDescription}</p>
          
          <h2>Technologies Used</h2>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="skill-tag">{tech}</span>
            ))}
          </div>
          
          <h2>Key Features</h2>
          <ul className="feature-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <div className="project-links">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Live Demo
            </a>
            <a href={project.githubUrl === null ? `/project/${project.id}` : project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}