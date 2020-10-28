import React from "react";

export default function Input({title, value,onChange}) {
  
  return (
      <label className="input-container">
      {title}
       <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="input-component"
        />
      </label>

  );
}