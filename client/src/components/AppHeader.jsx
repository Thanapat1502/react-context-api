import { UserDataContext } from "../App.jsx";
import { useContext } from "react";

function AppHeader() {
  const userNameContext = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userNameContext.userData.username}</h2>
    </div>
  );
}

export default AppHeader;
