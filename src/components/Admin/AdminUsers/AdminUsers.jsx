import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminUser from "./AdminUser";
import { useSelector } from "react-redux";
import backArrow from "../../svg/arrow-left-solid.svg";
import showMore from "../../svg/ellipsis-solid.svg";
import trash from "../../svg/trash-solid.svg";

function Users() {
  const gema = useSelector((state) => state.gema);
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

  return (
    users && (
      <>
        <h1 className="m-4 d-flex justify-content-center">USUARIOS</h1>
        <div className="container mt-4">
          <div className="mb-3 d-flex justify-content-between ">
            <Link className="link-admin-center" to={`/admin`}>
              <button className=" d-flex align-items-center irAtras px-0">
                {" "}
                <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
                <span className="mx-2">CENTRO ADMINISTRATIVO </span>
              </button>
            </Link>
          </div>

          <table className="table table-hover mt-2 ">
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
                  <tr key={user._id}>
                    <td>{user.firstname ? user.firstname : "No se ha registrado un nombre aún"}</td>
                    <td>{user.username ? user.username : user.email}</td>
                    <td>{user.phone ? user.phone : "No se ha registrado un teléfono aún"}</td>
                    <td className="textCenter">{user.orderHistory.length}</td>
                    <td>
                      {gema.userData.userId !== user._id && (
                        <button
                          className="buttonCrud m-1"
                          onClick={() => {
                            handle.deleteUser(user._id);
                          }}
                        >
                          <img className="delete-icon" src={trash} alt="delete icon" />
                        </button>
                      )}

                      <button
                        className="buttonCrud m-1"
                        onClick={() => {
                          handleShow(user);
                        }}
                      >
                        <img className="show-more-icon" src={showMore} alt="show more icon" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  );
}

export default Users;
