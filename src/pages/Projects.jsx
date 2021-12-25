import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div>
      <h2 className="projects-title">Proyectos</h2>
      <section className="projects">
        <div className="project">
          <h3 className="project-title">CRUD realizado con Django</h3>
          <p className="project-description">
            Un CRUD realizado utilizando el Framework web de Python: Django,
            utilizando una base de datos de prueba sqlite3 con todas las
            operaciones basicas tales como:
          </p>
          <ul>
            <li>Listar</li>
            <li>Crear</li>
            <li>Actualizar</li>
            <li>Eliminar</li>
          </ul>
          <a
            href="https://github.com/acuellodemoya/crud_django"
            className="btn-project"
          >
            Ver Mas
          </a>
        </div>

        <div className="project">
          <h3 className="project-title">API simple de gestion de monitorias</h3>
          <p className="project-description">
            El proyecto es un sistema basico de gestion de monitorias para el
            manejo de determinada institucion. Creada con NodeJS, de momento
            solo se encuentra la API conectada a una BD MongoDb, los datos de la
            BD pueden modificarse en el archivo App.js
          </p>

          <a
            href="https://github.com/acuellodemoya/simple-api"
            className="btn-project"
          >
            Ver Mas
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">React Shop</h3>
          <p className="project-description">
            El proyecto es un cliente de una tienda dieñado en React como parte
            de lcurso practico de ReactJs de Platzi
          </p>

          <a
            href="https://github.com/acuellodemoya/react-shop"
            className="btn-project"
          >
            Ver Mas
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">To Do List</h3>
          <p className="project-description">
            Cliente simple de una app de To Do List para agregar, eliminar y
            marcar como realizadas las tareas realizado utilizando React
          </p>

          <a
            href="https://acuellodemoya.github.io/to-do-list/"
            className="btn-project"
          >
            Ver Mas
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
