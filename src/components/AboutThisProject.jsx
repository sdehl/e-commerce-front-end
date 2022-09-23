import ReactLoading from "react-loading";
import mer from "./img/mer-t.jpg";
import sant from "./img/sdehl.jpg";
import marc from "./img/marc.jpg";
import bronce1 from "./img/1.jpg";
import bronce2 from "./img/2.jpg";
import bronce3 from "./img/3.jpg";
import bronce4 from "./img/4.jpg";
import porcelain from "./img/11.jpg";
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
import "../components/styles/About.css";

function About() {
  return About ? (
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
          <div className="col-lg-6 col-12 mt-5">
            <h4>Sobre este proyecto</h4>
            <p className="paragraph">
              Este E-commerce es el proyecto final desarrollado por Mercedes Torrendell, Santiago
              Dehl y Marcos Rossi en el marco del Bootcamp-Grupo 2207 de Hack Academy, una
              institución educativa especializada en programación, ubicada en Montevideo, Uruguay
              que imparte cursos desde 2016.
            </p>
            <p className="paragraph">
              {" "}
              El bootcamp es un curso de tiempo completo que capacita a desarrolladores como Full
              Stack Jr. El objetivo del proyecto final es poner en práctica los conocimientos
              adquiridos utilizando diversas tecnologías. Durante las tres semanas que duró insumió
              una carga horaria de circa 180 hrs por integrante.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src={bronce1}
              className="image about-image w-100 my-4"
              alt="tiradores de bronce irregulares"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src={bronce2}
              className="image about-image d-inline-block w-100 my-4"
              alt="tiradores de bronce en cajonera marrón"
            />
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <h4>Aspectos organizacionales & MER</h4>
            <p className="paragraph">
              Se utilizó Trello, para controlar el flujo y la asignación de tareas y Figma, para
              maquetar modelar y diagramar. Se utilizó el modelo Entidad-Relación (MER). Se adoptó
              la metodología Scrum, donde se llevó el proyecto sobre los estándares de MVP,
              presentando una demo al final de cada semana.
            </p>
            <p className="paragraph">
              {" "}
              Se ha buscado respetar las buenas prácticas en cuanto a organización de las carpetas,
              consistencia en los idiomas, legibilidad/nomenclatura en los archivos y hacer la
              posible menor cantidad de llamadas a la base de datos.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 mt-5">
            <h4>Concepción del proyecto e inspiración</h4>
            <p className="paragraph">
              Uno de los primeros desafíos de nuestro proyecto fue el desarrollo de un
              cuidadosamente pensado diagrama de relaciones de entidad. Aquí definimos las
              principales relaciones entre las siguientes entidades: User, Order, Product y
              Category.
            </p>
            <p className="paragraph">
              Inspiramos la plantilla de nuestro sitio web con la de Gema, un sitio web minorista de
              accesorios para interiores, cuidadosamente diseñado. Nutrimos nuestra base de datos
              con imágenes, descripciones, nombres y precios del propio website.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src={bronce3}
              className="image about-image d-inline-block w-100 my-4"
              alt="tirador pequeño de bronce para puerta"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src={bronce4}
              className="image about-image d-inline-block w-100 my-4"
              alt="dos pares de tiradores en bronce sobre fondo crema"
            />
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <h4>Metodología de trabajo</h4>
            <p className="paragraph">
              Organizamos nuestro trabajo en tres sprints utilizando Metodología Ágile. Cada sprint
              organizaba sus taréas individualmente o en grupo, usando Trello para controlar la
              evolución y finalización. En cuanto a frameworks y tecnologías usamos la pila MERN, lo
              que significa que nuestro proyecto utilizó una base de datos no relacional y que
              trabajamos con Mongo, MongoDB y Mongoose, además de Supabase para importar imágenes.
            </p>
            <p className="paragraph">
              Express, React y Node fueron nuestros marcos de aplicación. En el desarrollo
              utilizamos tecnologías conocidas que rodean este stack, como React Bootstrap, Hooks,
              Formidable, etc. Cada interacción entre sus desarrolladores, y por extensión, todo el
              proyecto, se realizó mediante Discord.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <img src={porcelain} className="banner w-100 my-4 pb-5 mb-5" alt="Old wood floor" />
      </div>
      <div className="container">
        <h4 className="text-center fw-bold mt-5">FUNCIONALIDADES ADMINISTRATIVAS</h4>
        <div className="row">
          <div className="col-2"></div>
          <div className="col pt-5 mt-5">
            <p className="paragraph">
              El E-commerce cuenta con un panel de administración-dashboard, donde el usuario (con
              permisos de administrador) podrá acceder a crear, consultar, modificar/actualizar y
              borrar productos, categorías, usuarios y órdenes.
            </p>
            <p className="paragraph">
              Para acceder al{" "}
              <span className="importantInfo"> dashboard con permisos de administrador</span> deberá
              ingresar en el navbar al icono de usuario e iniciar sesión con el usuario de pruebas{" "}
              <span className="importantInfo">admin@admin.com y la contraseña "123"</span>.
              Dispondrán de absoluta libertad para hacer modificaciones, ya que cuando lo deseen
              podrá re establecer la base de datos inicial.
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="row text-center mb-5 pb-5">
        <h4 className="my-5 py-5 fw-bold">TECNOLOGÍAS UTILIZADAS</h4>
        <div className="col">
          <img src={react} className="icons8-react-native zoom" alt="logo react" />
          <h4 className="mt-4">React</h4>
        </div>

        <div className="col">
          <img src={redux} className="icons8-redux zoom" alt="logo redux" />
          <h4 className="mt-4">Redux</h4>
        </div>

        <div className="col">
          <img src={js} className="zoom js" alt="logo javascript" />
          <h4 className="mt-4">JavaScript</h4>
        </div>
        <div className="col">
          <img src={node} className="zoom icons8-nodejs " alt="logo nodejs" />
          <h4 className="mt-4">NodeJS</h4>
        </div>
      </div>
      <div className="row text-center m-5 py-5">
        <div className="col">
          <img src={mongodb} className="zoom icons8-mongodb " alt="logo mongodb" />
          <h4 className="mt-4">MongoDB</h4>
        </div>
        <div className="col">
          <img src={mongoose} className="zoom icons8-mongoose " alt="logo mongoose" />
          <h4 className="mt-4">Mongoose</h4>
        </div>
        <div className="col">
          <img src={discord} className="zoom icons8-discord " alt="logo discord" />
          <h4 className="mt-4">Discord</h4>
        </div>
        <div className="col">
          <img
            src={teams}
            className="zoom icons8-microsoft-teams-2019 "
            alt="logo microsoft teams"
          />
          <h4 className="mt-4">Microsoft Teams</h4>
        </div>
        <div className="row pt-5 py-5 my-5 mt-5">
          <>
            <h4 className="mb-5 py-5 fw-bold">ENLACES A ESQUEMAS DE ORGANIZACIÓN</h4>
            <div className="col mx-2">
              <>
                <a
                  className="icons8-trello"
                  href="https://trello.com/b/iMKgVZ0d/e-commerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={trello} className="zoom" alt="logo Trello" />{" "}
                </a>
                <h4 className="mt-5">Trello</h4>
              </>
            </div>
            <div className="col mx-2">
              <a
                className="icons8-figma"
                href="https://www.figma.com/file/4K0ucBjB7EOI5obNOMZmAm/e-commerce?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={figma} className="zoom" alt="logo Figma" />{" "}
              </a>
              <h4 className="mt-5">Figma</h4>
            </div>
          </>
        </div>
      </div>
      <div className="container w-75">
        <div className="row card-group pb-5 text-center">
          <h3 className="mb-5 pb-5 fw-bold">NUESTRO EQUIPO:</h3>

          <div className="col text-center mx-5">
            {" "}
            <img
              src={mer}
              className="imgzoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil Mercedes Torrendell"
            />
            <h3 className="mt-5">
              Mercedes <br></br>Torrendell
            </h3>
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
              className="imgzoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil Santiago Dehl"
            />
            <h3 className="mt-5">
              Santiago <br></br>Dehl
            </h3>
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
          <div className="col text-center mx-5">
            {" "}
            <img
              src={marc}
              className="imgzoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil Marcos Rossi"
            />
            <h3 className="mt-5">
              Marcos <br></br>Rossi
            </h3>
            <p className="mt-4">Full Stack Developer Jr</p>
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
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"35%"}
        width={"35%"}
      />
    </div>
  );
}
export default About;
