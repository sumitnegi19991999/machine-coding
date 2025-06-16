import React, { useState } from "react";

const Accordian = () => {
  const [isOpen, setisOpen] = useState(0);

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid 1px",
            width: "500px",
          }}
        >
          {isOpen === 0 && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque veritatis cupiditate aut blanditiis, labore
              excepturi sit. Voluptatibus vitae odit, necessitatibus unde autem
              fuga, error maxime saepe alias numquam ea..
            </p>
          )}
          <button style={{ height: "20%" }} onClick={() => setisOpen(0)}>
            open
          </button>
        </div>{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "solid 1px",
            width: "500px",
          }}
        >
          {isOpen === 1 && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque veritatis cupiditate aut blanditiis, labore
              excepturi sit. Voluptatibus vitae odit, necessitatibus unde autem
              fuga, error maxime saepe alias numquam ea..
            </p>
          )}
          <button style={{ height: "20%" }} onClick={() => setisOpen(1)}>
            open
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "solid 1px",
            width: "500px",
          }}
        >
          {isOpen === 2 && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque veritatis cupiditate aut blanditiis, labore
              excepturi sit. Voluptatibus vitae odit, necessitatibus unde autem
              fuga, error maxime saepe alias numquam ea..
            </p>
          )}
          <button
            style={{ height: "20%", float: "right" }}
            onClick={() => setisOpen(2)}
          >
            open
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
