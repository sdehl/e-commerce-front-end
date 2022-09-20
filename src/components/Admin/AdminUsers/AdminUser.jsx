import { Modal } from "react-bootstrap";
import "../../styles/AdminStyles.css";
import UserOrder from "./AdminUserOrder";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import check from "../../svg/check-solid.svg";
import cancel from "../../svg/xmark-solid.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import trash from "../../svg/trash-solid.svg";

function User({ show, handleClose, user, setUser }) {
  const gema = useSelector((state) => state.gema);
  const token = useSelector((state) => state.gema.userData.token);

  const [verifyDeleted, setVerifyDeleted] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
        margin: 0,
      }}
    />
  );

  useEffect(() => {
    setDeleteSuccess(false);
  }, [show]);

  const handle = {
    deleteUser: async (id) => {
      try {
        const response = await axios({
          method: "delete",
          url: `${process.env.REACT_APP_API_URL}/users/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        return console.log(error);
      }
    },
  };

  return (
    user && (
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between mb-4">
                      <h1 className="textCenter">{user.username ? user.username : user.email}</h1>
                      {gema.userData.userId !== user._id && !verifyDeleted && !deleteSuccess && (
                        <button
                          className="trash-button m-1"
                          onClick={() => {
                            setVerifyDeleted(true);
                          }}
                        >
                          <img className="delete-icon" src={trash} alt="delete icon" />
                        </button>
                      )}
                      {verifyDeleted && !deleteSuccess && (
                        <div className="d-flex justify-content-between confirmationContainer">
                          <Alert className="px-2" severity="warning">
                            Estás seguro de borrar a este usuario?
                          </Alert>
                          <button
                            className="check-button"
                            onClick={() => {
                              handle.deleteUser(user._id);
                              setDeleteSuccess(true);
                              setDeleteUser(true);
                              setVerifyDeleted(false);
                            }}
                          >
                            <img className="check-icon" src={check} alt="check icon" />
                          </button>
                          <button
                            className=" cancel-button"
                            onClick={() => {
                              setDeleteUser(false);
                              setVerifyDeleted(false);
                            }}
                          >
                            <img className="cancel-icon" src={cancel} alt="x icon" />
                          </button>
                        </div>
                      )}
                      {gema.userData.userId !== user._id && deleteSuccess && (
                        <Alert icon={false} severity="success">
                          Se ha borrado exitosamente
                        </Alert>
                      )}
                    </div>
                    <div className="d-flex">
                      <h5 className="textElementInModal mt-1">Nombre:</h5>
                      <p className="itemsTextOfModal">
                        {user.firstname ? user.firstname : "No se ha registrado"}
                      </p>
                    </div>
                    <ColoredLine color="gray" />
                    <div className="d-flex">
                      <h5 className="mt-4 textElementInModal">Nombre de usuario: </h5>
                      <p className="mt-4 itemsTextOfModal">
                        {user.username ? user.username : "No se ha registrado"}
                      </p>
                    </div>
                    <ColoredLine color="gray" />
                    <div className="d-flex">
                      <h5 className="mt-4 textElementInModal">Correo electrónico:</h5>
                      <p className="mt-4 itemsTextOfModal">
                        {user.email ? user.email : "No se ha registrado"}
                      </p>
                    </div>
                    <ColoredLine color="gray" />
                    <div className="d-flex">
                      <h5 className="mt-4 textElementInModal">Dirección:</h5>
                      <p className="mt-4 itemsTextOfModal">
                        {user.adress ? user.adress : "No se ha registrado"}
                      </p>
                    </div>
                    <ColoredLine color="gray" />
                    <div className="d-flex">
                      <h5 className="mt-4 textElementInModal">Teléfono: </h5>
                      <p className="mt-4 itemsTextOfModal">
                        {user.phone ? user.phone : "No se ha registrado"}
                      </p>
                    </div>
                    <ColoredLine color="gray" />
                    <div className="d-flex">
                      <h5 className="mt-4 textElementInModal">Is Admin: </h5>
                      <p className="mt-4 itemsTextOfModal">{`${user.isAdmin}`}</p>
                    </div>
                  </div>
                  <ColoredLine color={"gray"} />
                  <h3 className="textCenter mt-3">HISTORIAL DE PEDIDOS</h3>
                  {user.orderHistory.length > 0 ? (
                    user.orderHistory.map((order, index) => {
                      return (
                        <UserOrder
                          key={order._id}
                          order={order}
                          index={index}
                          products={user.orderHistory[index].products}
                        />
                      );
                    })
                  ) : (
                    <p className="d-flex justify-content-center m-4 lightText">
                      El usuario no ha hecho ningun encargo aún{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  );
}

export default User;
