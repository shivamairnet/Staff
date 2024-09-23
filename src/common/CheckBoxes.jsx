import React from "react";

const CheckBoxes =({label,checked,onChange})=>{
    return (
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="mr-2"
          />
          {label}
        </label>
      );

}

export default CheckBoxes;