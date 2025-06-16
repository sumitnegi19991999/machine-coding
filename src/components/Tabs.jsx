import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>
      <div>
        {activeTab === "home" && (
          <div>
            <h1>Home</h1>
            <p>Home is where the heart is.</p>
          </div>
        )}
      </div>
      <div>
        {activeTab === "about" && (
          <div>
            <h1>About</h1>
            <p>About is where the heart is.</p>
          </div>
        )}
      </div>
      <div>
        {activeTab === "contact" && (
          <div>
            <h1>Contact</h1>
            <p>Contact is where the heart is.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
