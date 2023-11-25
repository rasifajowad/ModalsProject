import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
