import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ProjectDetails.module.css';
import Layout from '../../components/Layout';
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
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
    <div className={`container mt-5 ${styles.projectDetailsPage}`}>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.projectDescription}>{project.description}</p>
      <h5>Technologies utilisées:</h5>
      <ul className={styles.technologiesList}>
        {project.technologies.map((tech, index) => (
          <li key={index} className={styles.technologyItem}>{tech}</li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}

export default ProjectDetails;
