import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./axios/store/slices/userSlices";
import { toast } from "react-toastify";
import Users from "./components/Users";

function App() {
  const dispatch = useDispatch();
  const { users, loader, errorMsg, status } = useSelector(
    (globalState) => globalState.users
  );
  console.log();

  console.log("users", users);
  console.log("loader", loader);
  console.log("errorMsg", errorMsg);
  console.log("status", status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
    if (errorMsg) {
      console.log(errorMsg);
      toast.error(errorMsg);
    }
  }, [dispatch, status]);

  return (
    <div>
      {loader && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            background: "rgba(0,0,0,0.9)",
            top: 0,
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}

      {users.products.length <= 0 ? (
        <h1>Not Found</h1>
      ) : (
        users.products.map((item, index) => {
          return <Users item={item} index={index} />;
        })
      )}
    </div>
  );
}

export default App;
