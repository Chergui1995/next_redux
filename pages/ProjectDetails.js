import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description: "Une application web pour gérer les tâches quotidiennes avec des fonctionnalités de création, modification, suppression et marquage des tâches comme terminées.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    color: "#f8b400" // Jaune
  },
  {
    id: 2,
    title: "Plateforme e-commerce",
    description: "Une plateforme de commerce électronique permettant aux utilisateurs d'acheter et de vendre des produits avec une intégration de paiement sécurisée.",
    technologies: ["Next.js", "GraphQL", "Apollo", "PostgreSQL"],
    color: "#00b894" // Vert
  },
  {
    id: 3,
    title: "Application de suivi de la condition physique",
    description: "Une application mobile pour suivre les activités physiques, les régimes alimentaires et les progrès de l'utilisateur.",
    technologies: ["React Native", "Redux", "Firebase"],
    color: "#0984e3" // Bleu
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h5>Technologies utilisées:</h5>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;
