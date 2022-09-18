import "../components/styles/About.css";
import mer from "./img/mer-t.jpg";
import sant from "./img/sdehl.jpg";
import marc from "./img/marc.jpg";
import figma from "./img/figma.svg";
import trello from "./img/trello.svg";
import react from "./img/react-native.svg";
import node from "./img/nodejs.svg";
import redux from "./img/redux.svg";
import js from "./img/javascript-logo.svg";
import discord from "./img/discord.svg";
import mongodb from "./img/mongodb.svg";
import mongoose from "./img/mongoose.svg";
import teams from "./img/microsoft-teams.svg";

function About() {
  return (
    <>
      <div>
        <img
          src="https://www.gemainteriores.com/wp-content/uploads/2021/05/Coleccion-Negro-Mate.jpg"
          className="banner w-100 my-4 pb-5 mb-5"
          alt="tiradores negros, griferia negra y color-palette sobre alfombra"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col mt-3">
            <h4>SOBRE ESTE PROYECTO</h4>
            <p className="paragraph">
              Este E-commerce es el proyecto final desarrollado por Mercedes Torrendell, Santiago
              Dehl y Marcos Rossi en el marco del Bootcamp-Grupo 2207 de Hack Academy, una
              institución educativa especializada en programación, ubicada en Montevideo, Uruguay.
              que imparte cursos desde el año 2016. El bootcamp es un curso de tiempo completo que
              capacita a desarrolladores como Full Stack Jr. El objetivo del proyecto final es poner
              en práctica los conocimientos adquiridos utilizando diversas tecnologías. Durante las
              tres semanas que duró insumió una carga horaria de circa 180 hrs por integrante. Uno
              de los primeros desafíos de nuestro proyecto fue el desarrollo de un diagrama de
              relaciones de entidad cuidadosamente pensado. Aquí definimos las principales
              relaciones entre las siguientes entidades: ……
            </p>
          </div>
          <div className="col">
            <img
              src="https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-TUR-BZ-1-1.jpg"
              className="image about-image w-100 my-4"
              alt="tiradores de bronce irregulares"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={"https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-CUA-BZ-1.jpg"}
              className="image about-image d-inline-block w-100 my-4"
              alt="tiradores de bronce en cajonera marrón"
            />
          </div>
          <div className="col mt-3">
            <h4>Aspectos organizacionales & MER</h4>
            <p className="paragraph">
              Para la maquetación del proyecto se utilizaron las siguientes herramientas:
              <strong>Trello</strong>, para controlar el flujo y la asignación de tareas, y Figma,
              para modelar y diagramar. Se utilizó el modelo Entidad-Relación (MER). La metodología
              adoptada para el desarrollo del proyecto fue Scrum, donde se llevó el proyecto sobre
              los estándares de MVP, presentando una demo al final de cada semana. Se ha buscado
              respetar las buenas prácticas en cuanto a organización de las carpetas, consistencia
              en los idiomas, legibilidad/nomenclatura de los archivos y hacer la posible menor
              cantidad de llamadas a la base de datos. El E-commerce cuenta con una página Home, una
              página con todos los productos, y un panel de administración donde el usuario con
              permisos de administrador podrá crear, consultar, modificar/actualizar y borrar
              artículos.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <h4>Concepción del proyecto e inspiración</h4>
            <p className="paragraph">
              Uno de los primeros desafíos de nuestro proyecto fue el desarrollo de un diagrama de
              relaciones de entidad cuidadosamente pensado. Aquí definimos las principales
              relaciones entre las siguientes entidades: User, Order, Product y Caegory. Inspiramos
              la plantilla de nuestro sitio web con la de Gema, un sitio web minorista de accesorios
              para interiores, cuidadosamente diseñado. Nutrimos nuestra base de datos con imágenes,
              descripciones, nombres y precios del propio website.
            </p>
          </div>
          <div className="col">
            <img
              src="https://www.gemainteriores.com/wp-content/uploads/2021/04/H01-PIR-18-BZ-3.jpg"
              className="image about-image d-inline-block w-100 my-4"
              alt="tirador pequeño de bronce para puerta"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={"https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-TUR-BZ-5.jpg"}
              className="image about-image d-inline-block w-100 my-4"
              alt="dos pares de tiradores en bronce sobre fondo crema"
            />
          </div>
          <div className="col mt-3">
            <h4>Metodología de trabajo</h4>
            <p className="paragraph">
              Organizamos nuestro trabajo en tres sprints, utilizando Metodología Ágile. Cada sprint
              tenía tareas que se organizaban y desarrollaban individualmente o en grupo, usando
              Trello para determinar la evolución y finalización de las tareas. Cada interacción
              entre los desarrolladores, y por extensión, todo el proyecto, se realizó en línea
              usando Discord. Frameworks y Tecnologías Usamos la pila MERN. Lo que significa que
              nuestro proyecto utilizó una base de datos no relacional y que trabajamos con Mongo,
              MongoDB, Mongo Atlas, Mongo Compass y Mongoose, además de Supabase para importar
              imágenes. Express, React y Node como nuestros marcos de aplicación. En el desarrollo
              utilizamos tecnologías conocidas que rodean este stack, como React Bootstrap, Hooks,
              Formidable, etc. Cada interacción entre sus desarrolladores, y por extensión, todo el
              proyecto, se realizó en línea usando Discord.
            </p>
          </div>
        </div>
      </div>

      <div className="row text-center m-5 py-5">
        <h2 className="my-5 py-5 fw-bold">Tecnologías utilizadas</h2>
        <div className="col">
          <img src={react} className="icons8-react-native " alt="logo react" />
        </div>

        <div className="col">
          <img src={redux} className="icons8-redux" alt="logo redux" />
        </div>

        <div className="col">
          <img src={js} className="js" alt="logo javascript" />
        </div>
        <div className="col">
          <img src={node} className="icons8-nodejs " alt="logo nodejs" />
        </div>
      </div>
      <div className="row text-center m-5 py-5">
        <div className="col">
          <img src={mongodb} className="icons8-mongodb " alt="logo mongodb" />
        </div>
        <div className="col">
          <img src={mongoose} className="icons8-mongoose " alt="logo mongoose" />
        </div>
        <div className="col">
          <img src={discord} className="icons8-discord " alt="logo discord" />
        </div>
        <div className="col">
          <img src={teams} className="icons8-microsoft-teams-2019 " alt="logo microsoft teams" />
        </div>
        <div className="row pt-5 py-5 my-5 mt-5">
          <>
            <h2 className="mb-5 py-5 fw-bold">ENLACES A ESQUEMAS DE ORGANIZACIÓN</h2>
            <div className="col-3 "></div>
            <div className="col-3 ">
              <>
                <h3></h3>
                <a
                  className="icons8-trello"
                  href="https://trello.com/b/iMKgVZ0d/e-commerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={trello} alt="logotipo Trello" />{" "}
                </a>
              </>
            </div>
            <div className="col-3">
              <a
                className="icons8-figma"
                href="https://www.figma.com/file/4K0ucBjB7EOI5obNOMZmAm/e-commerce?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={figma} alt="logotipo Figma" />{" "}
              </a>
            </div>
            <div className="col-3"></div>
          </>
        </div>
      </div>
      <div className="container w-75">
        <div className="row d.flex card-group p-5 text-center">
          <h1 className="mb-5 pb-5 fw-bold">TEAM:</h1>

          <div className="col text-center">
            {" "}
            <img
              src={mer}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p className="mt-5">Mercedes Torrendell</p>
            <p className="mt-4">Full Stack Developer Jr</p>
            <a
              className="icons8-linkedin"
              href="https://www.linkedin.com/in/mercedes-torrendell-748826236/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
            <a
              className="icons8-github mx-2"
              href="https://github.com/mTorrendell"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>{" "}
          </div>
          <div className="col text-center mx-5">
            {" "}
            <img
              src={sant}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p className="mt-5">Santiago Dehl</p>
            <p className="mt-4">Full Stack Developer Jr</p>
            <a
              className="icons8-linkedin"
              href="https://www.linkedin.com/in/santiagojdehl/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
            <a
              className="icons8-github mx-2"
              href="https://github.com/sdehl"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
          </div>
          <div className="col text-center">
            {" "}
            <img
              src={marc}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p className="mt-5">Marcos Rossi</p>
            <p className="mt-4">Full Stack Developer Jr</p>
            <row>
              <a
                className="icons8-linkedin"
                href="https://www.linkedin.com/in/marcos-rossi-prado/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
              </a>
              <a
                className="icons8-github mx-2"
                href="https://github.com/gurrucha"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
              </a>{" "}
            </row>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
