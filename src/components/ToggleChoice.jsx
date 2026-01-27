import React, { useState } from "react";
import { Professional } from "./Professional";

export const ToggleChoice = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="ToggleChoice">
      <div className="segmented">
        <div
          className="indicator"
          style={{ transform: `translateX(${selected * 100}%)` }}
        />

        <button
          className={selected === 0 ? "tab active" : "tab"}
          onClick={() => setSelected(0)}
        >
          Professional
        </button>

        <button
          className={selected === 1 ? "tab active" : "tab"}
          onClick={() => setSelected(1)}
        >
          Personal
        </button>
      </div>

      {selected === 0 && <Professional />}
      {selected === 1 && <Professional />}
    </div>
  );
};
