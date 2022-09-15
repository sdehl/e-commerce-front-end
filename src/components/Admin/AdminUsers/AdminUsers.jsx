import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminUser from "./AdminUser"
import { useSelector } from "react-redux";


function Users() {
  const [show, setShow] = useState(false);
  const [productForModal, setProductForModal] = useState(null);
  const [users, setUsers] = useState();
  const token = useSelector((state) => state.gema.userData.token);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setProductForModal(user);
    setShow(true);
  };


  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/users`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    },
    deleteUser: async (id) => {
      try {
        const response = await axios({
          method: "delete",
          url: `${process.env.REACT_APP_API_URL}/users/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        return console.log(error);
      }
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return users && (
    <>
      <h1 className="m-4 d-flex justify-content-center">USUARIOS</h1>
      <div className="container mt-4">
        <Link to={`/admin`}>
          <button className="irAtras"> Centro Administrativo </button>
        </Link>


        <table class="table table-hover mt-2 ">
          <AdminUser show={show} handleClose={handleClose} user={productForModal} />
          <thead>
            <tr className="titlesTable">
              <th scope="col">Nombre</th>
              <th scope="col">Identificador</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Cantidad de órdenes</th>
              <th scope="col">Modificar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (

                <tr>
                  <td>{user.name ? user : "No se ha registrado un nombre aún"}</td>
                  <td>{user.username ? user.username : user.email}</td>
                  <td>{user.phone ? user.phone : "No se ha registrado un teléfono aún"}</td>
                  <td className="textCenter">{user.orderHistory.length}</td>
                  <td>
                    <button className="buttonCrud m-1" onClick={() => {
                      handle.deleteUser(user._id);
                    }}>Eliminar</button>
                    <button className="buttonCrud m-1" onClick={() => {
                      handleShow(user);
                    }}>Ver más</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
