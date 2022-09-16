import "../components/styles/About.css";
import mer from "./img/mer-t.jpg";
import sant from "./img/sdehl.jpg";
import marc from "./img/marc.jpg";

function About() {
  return (
    <>
      <div>
        <img
          src="https://www.gemainteriores.com/wp-content/uploads/2021/05/Coleccion-Negro-Mate.jpg"
          className="banner w-100 my-4 pb-5 mb-5"
          alt="tiradores de bronce irregulares"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h4>Sobre este proyecto</h4>
            <p>
              Este E-commerce es el proyecto final desarrollado por{" "}
              <strong>Mercedes Torrendell, Santiago Dehl y Marcos Rossi</strong> en el marco del
              Bootcamp-Grupo 2207 de Hack Academy, una institución educativa ubicada en Montevideo,
              Uruguay especializada en programación, que imparte cursos desde el año 2016. El
              bootcamp es un curso de tiempo completo que capacita a desarrolladores como Full Stack
              Jr. El objetivo del proyecto final es poner en práctica los conocimientos adquiridos
              utilizando diversas tecnologías. Durante las tres semanas que duró insumió una carga
              horaria de circa 180 hrs por integrante. Uno de los primeros desafíos de nuestro
              proyecto fue el desarrollo de un diagrama de relaciones de entidad cuidadosamente
              pensado. Aquí definimos las principales relaciones entre las siguientes entidades: ……
            </p>
          </div>
          <div className="col">
            <img
              src="https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-TUR-BZ-1-1.jpg"
              className="image about-image d-inline-block w-100 my-4"
              alt="tiradores de bronce irregulares"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={"https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-CUA-BZ-1.jpg"}
              className="image about-image d-inline-block w-100 my-4"
              alt="tiradores de bronce cilíndricos"
            />
          </div>
          <div className="col mt-5">
            <h4>Aspectos organizacionales & MER</h4>
            <p>
              Para la maquetación del proyecto se utilizaron las siguientes herramientas:
              <strong>Trello</strong>, para controlar el flujo y la asignación de tareas, y
              <strong>Figma</strong>, para modelar y diagramar. Se utilizó el modelo
              Entidad-Relación (MER). La metodología adoptada para el desarrollo del proyecto fue
              Scrum, donde se llevó el proyecto sobre los estándares de MVP, presentando una demo al
              final de cada semana. Se ha buscado respetar las buenas prácticas en cuanto a
              organización de las carpetas, consistencia en los idiomas, legibilidad/nomenclatura de
              los archivos y hacer la posible menor cantidad de llamadas a la base de datos. El
              E-commerce cuenta con una página Home, una página con todos los productos, y un panel
              de administración donde el usuario con permisos de administrador podrá crear,
              consultar, modificar/actualizar y borrar artículos. Inspiramos la plantilla de nuestro
              e-store con la de Gema, un sitio web minorista de accesorios de interiores
              cuidadosamente diseñado. Nutrimos nuestra base de datos con imágenes, descripciones,
              nombres y precios del propio website.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
            <h4>Concepción del proyecto</h4>
            <p>
              Uno de los primeros desafíos de nuestro proyecto fue el desarrollo de un diagrama de
              relaciones de entidad cuidadosamente pensado. Aquí definimos las principales
              relaciones entre las siguientes entidades: …… 2 - Diseño e Inspiración Inspiramos la
              plantilla de nuestro sitio web con la de Gema, un sitio web minorista de accesorios
              ??? cuidadosamente diseñado. Nutrimos nuestra base de datos con imágenes,
              descripciones, nombres y precios del propio website.
            </p>
          </div>
          <div className="col">
            <img
              src="https://www.gemainteriores.com/wp-content/uploads/2021/04/H01-PIR-18-BZ-3.jpg"
              className="image about-image d-inline-block w-100 my-4"
              alt="tiradores negros, griferia negra y color-palette sobre alfombra"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={"https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-TUR-BZ-5.jpg"}
              className="image about-image d-inline-block w-100 my-4"
              alt="Llamador de puerta palm en bronce"
            />
          </div>
          <div className="col mt-5">
            <h4>Metodología de trabajo</h4>
            <p>
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
        <div className="col">
          <div class="icons8-react-native"></div>
        </div>
        <div className="col">
          <div class="icons8-figma"></div>
        </div>
        <div className="col">
          <div class="icons8-redux"></div>
        </div>
        <div className="col">
          <div class="icons8-trello"></div>
        </div>
      </div>
      <div className="row text-center m-5 py-5">
        <div className="col">
          <div class="icons8-mongodb"></div>
        </div>
        <div className="col">
          <div class="icons8-mongoose"></div>
        </div>
        <div className="col">
          <div class="icons8-discord"></div>
        </div>
        <div className="col">
          <div class="icons8-microsoft-teams-2019"></div>
        </div>
      </div>
      <div className="container w-75">
        <div className="row d.flex card-group pb-5">
          <h1>TEAM:</h1>

          <div className="col text-center">
            {" "}
            <img
              src={mer}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p>Mercedes Torrendell</p>
            <p>Full Stack Developer Jr</p>
            <div className="icons8-linkedin"></div>
            <div className="icons8-github mx-2"></div>
          </div>
          <div className="col text-center">
            {" "}
            <img
              src={sant}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p>Santiago Dehl</p>
            <p>Full Stack Developer Jr</p>
            <div className="icons8-linkedin"></div>
            <div className="icons8-github mx-2"></div>
          </div>
          <div className="col text-center">
            {" "}
            <img
              src={marc}
              className="zoom profile-image d-inline-block w-100 my-4"
              alt="Foto de perfil"
            />
            <p>Marcos Rossi</p>
            <p>Full Stack Developer Jr</p>
            <row>
              <div className="icons8-linkedin"></div>
              <div className="icons8-github mx-2"></div>
            </row>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

// <h3>Sobre este proyecto</h3>
//             <h5>
//               Este E-commerce es el proyecto final desarrollado por{" "}
//               <strong>Mercedes Torrendel, Santiago Dehl y Marcos Rossi</strong> en el marco del
//               Bootcamp-Grupo 2207 de Hack Academy, una institución educativa ubicada en Montevideo,
//               Uruguay especializada en programación, que imparte cursos desde el año 2016. El
//               bootcamp es un curso de tiempo completo que capacita a desarrolladores como Full Stack
//               Jr. El objetivo del proyecto final es poner en práctica los conocimientos adquiridos
//               utilizando diversas tecnologías. Durante las tres semanas que duró insumió una carga
//               horaria de circa 160 hrs por integrante. Uno de los primeros desafíos de nuestro
//               proyecto fue el desarrollo de un diagrama de relaciones de entidad cuidadosamente
//               pensado. Aquí definimos las principales relaciones entre las siguientes entidades: ……
//             </h5>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row d-inline-block ">
//           <div className="col-6">
//             <h3>Aspectos organizacionales & MER</h3>
//             <h5>
//               Para la maquetación del proyecto se utilizaron las siguientes herramientas:{" "}
//               <strong>Trello</strong>, para controlar el flujo y la asignación de tareas, y{" "}
//               <strong>Figma</strong>, para modelar y diagramar. Se utilizó el modelo
//               Entidad-Relación (MER). La metodología adoptada para el desarrollo del proyecto fue
//               Scrum, donde se llevó el proyecto sobre los estándares de MVP, presentando una demo al
//               final de cada semana. Se ha buscado respetar las buenas prácticas en cuanto a
//               organización de las carpetas, consistencia en los idiomas, legibilidad/nomenclatura de
//               los archivos y hacer la posible menor cantidad de llamadas a la base de datos. El
//               E-commerce cuenta con una página Home, una página con todos los productos, y un panel
//               de administración donde el usuario con permisos de administrador podrá crear,
//               consultar, modificar/actualizar y borrar artículos. Inspiramos la plantilla de nuestro
//               e-store con la de Gema, un sitio web minorista de accesorios ??? cuidadosamente
//               diseñado. Nutrimos nuestra base de datos con imágenes, descripciones, nombres y
//               precios del propio website.
//             </h5>
//           </div>
//           <div className="col-6 m-5">
//             <img
//               src={"https://www.gemainteriores.com/wp-content/uploads/2021/04/H02-CUA-BZ-1-1.jpg"}
//               className="image d-inline-block w-100 my-4"
//               alt="tiradores de bronce"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row ">
//           <div className="col-6">
//             <h3>Concepción del proyecto</h3>
//             <img
//               src={
//                 "https://www.gemainteriores.com/wp-content/uploads/2021/05/Coleccion-Negro-Mate.jpg"
//               }
//               className="image d-inline-block w-100 my-4"
//               alt="tiradores negros, griferia negra y color-palette sobre alfombra"
//             />
//           </div>
//           <div className="col-6 m-5">
//             <h5>
//               Uno de los primeros desafíos de nuestro proyecto fue el desarrollo de un diagrama de
//               relaciones de entidad cuidadosamente pensado. Aquí definimos las principales
//               relaciones entre las siguientes entidades: …… 2 - Diseño e Inspiración Inspiramos la
//               plantilla de nuestro sitio web con la de Gema, un sitio web minorista de accesorios
//               ??? cuidadosamente diseñado. Nutrimos nuestra base de datos con imágenes,
//               descripciones, nombres y precios del propio website. 3 - Metodología de trabajo
//               Organizamos nuestro trabajo utilizando Metodología Ágile con tres sprints. Cada sprint
//               tenía tareas que se organizaban y desarrollaban individualmente o en grupos, usando
//               Trello para determinar la finalización de las tareas. Cada interacción entre sus
//               desarrolladores, y por extensión, todo el proyecto, se realizó en línea usando
//               Discord. 4 - Frameworks y Tecnologías Usamos la pila MERN. Lo que significa que
//               nuestro proyecto utilizó una base de datos no relacional y que trabajamos con Mongo,
//               MongoDB, Mongo Atlas, Mongo Compass y Mongoose, además de Supabase para importar
//               imágenes. Express, React y Node como nuestros marcos de aplicación. En el desarrollo
//               utilizamos tecnologías conocidas que rodean este stack, como React Bootstrap, Hooks,
//               Formidable, etc. Cada interacción entre sus desarrolladores, y por extensión, todo el
//               proyecto, se realizó en línea usando Discord.
