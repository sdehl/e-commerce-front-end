import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState();

  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/users`,
      });
      setUsers(response.data);
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return (
    users && (
      <div className="productList">
        {users.map((user) => {
          return (
            <div key={user._id} className="d-flex justify-content-between">
              {user.name ? <div>{user.name}</div> : <div>{user.email}</div>}
            </div>
          );
        })}
      </div>
    )
  );
}

export default Users;
