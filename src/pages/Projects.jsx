import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Proyectos</h2>
      <hr />
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
        <a href="#" className="btn-project">
          Ver Mas
        </a>
      </div>
      <div className="project">
        <h3 className="project-title">Sistema de gestion de clientes CRM</h3>
        <p className="project-description">
          El proyecto es un sistema basico de gestion de clientes para el manejo
          de determinada empresa, asi como la gestion de pedidos sobre algun
          tema, tambien la gestion de ordenes y su estado, ya sea enviado,
          pediente, entre otros.
        </p>

        <a href="#" className="btn-project">
          Ver Mas
        </a>
      </div>
      <div className="project">
        <h3 className="project-title">API simple de gestion de monitorias</h3>
        <p className="project-description">
          El proyecto es un sistema basico de gestion de monitorias para el
          manejo de determinada institucion. Creada con NodeJS, de momento solo
          se encuentra la API conectada a una BD MongoDb, los datos de la BD
          pueden modificarse en el archivo App.js
        </p>

        <a href="#" className="btn-project">
          Ver Mas
        </a>
      </div>
      <div className="project">
        <h3 className="project-title">React Shop</h3>
        <p className="project-description">
          El proyecto es un cliente de una tienda dieñado en React como parte de
          lcurso practico de ReactJs de Platzi
        </p>

        <a href="#" className="btn-project">
          Ver Mas
        </a>
      </div>
    </section>
  );
};

export default Projects;
