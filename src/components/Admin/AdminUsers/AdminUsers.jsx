import AdminUser from "./AdminUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import backArrow from "../../svg/arrow-left-solid.svg";
import showMore from "../../svg/ellipsis-solid.svg";

function Users() {
  const token = useSelector((state) => state.gema.userData.token);
  const [show, setShow] = useState(false);
  const [productForModal, setProductForModal] = useState(null);
  const [users, setUsers] = useState();

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
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return users ? (
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
          <AdminUser
            show={show}
            handleClose={handleClose}
            user={productForModal}
            setUser={setUsers}
          />
          <thead>
            <tr className="titlesTable">
              <th className="textCenter" scope="col">
                Nombre
              </th>
              <th className="textCenter" scope="col">
                Identificador
              </th>
              <th className="textCenter" scope="col">
                Teléfono
              </th>
              <th className="textCenter" scope="col">
                Órdenes
              </th>
              <th className="textCenter" scope="col">
                Modificar
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="textCenter">
                    {user.firstname ? user.firstname : "No se ha registrado un nombre aún"}
                  </td>
                  <td className="textCenter">{user.username ? user.username : user.email}</td>
                  <td className="textCenter">
                    {user.phone ? user.phone : "No se ha registrado un teléfono aún"}
                  </td>
                  <td className="textCenter">{user.orderHistory.length}</td>
                  <td className="textCenter">
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

export default Users;
