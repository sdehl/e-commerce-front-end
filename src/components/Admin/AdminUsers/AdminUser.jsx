import { Modal } from "react-bootstrap";
import "../../styles/AdminStyles.css";
import UserOrder from "./AdminUserOrder";

function User({ show, handleClose, user }) {
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

  return (
    user && (
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column">
                    <h1 className="textCenter mb-4">
                      {user.username ? user.username : user.email}
                    </h1>
                    <div className="d-flex">
                      <h5 className="textElementInModal mt-1">Nombre:</h5>
                      <p className="itemsTextOfModal">
                        {user.name ? user.name : "No se ha registrado"}
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
                          key={index}
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
