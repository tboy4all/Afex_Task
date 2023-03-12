import React from "react";
import "./App.css";
import Footer from "./components/footer/Fooer";
import Header from "./components/header/Header";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className={`w-full bg-[#FAFBFC] h-[694px]`}>
      <Header />

      <Sidebar />

      <Footer />
    </div>
  );
}

export default App;
