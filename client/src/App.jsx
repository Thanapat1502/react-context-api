import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
export const UserDataContext = React.createContext();
/**
 * 
 *  ให้นำข้อมูล username จาก Object userData ที่อยู่ใน Component App มา Render ลงตรง (x) ของข้อความ “สวัสดีคุณ (x)” ด้วย React Context API

ให้นำข้อมูล level จาก Object userData ที่อยู่ใน Component App มา Render ลงตรง (x) ของข้อความ “คุณคือสมาชิกในระดับ (x) ...” ด้วย React Context API
 */

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };
  return (
    <div className="App">
      <UserDataContext.Provider value={userData}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
