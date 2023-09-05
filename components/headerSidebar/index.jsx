import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Map from "../map/Map";

const Index = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputs, setInputs] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="flex">
        <Sidebar isOpen={isOpen} inputs={inputs} setInputs={setInputs} />
        <Map inputs={inputs}/>
      </div>
    </div>
  );
};

export default Index;
