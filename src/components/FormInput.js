import React, { useState } from "react";

function FormInput({name, label}) {
    const [data, setData] = useState("")

    return(
        <div className="label-wrapper">
          <label htmlFor={name}>{label}</label>
          <input
                type="text"
                name={name}
                value={data}
                required
                onChange={(event) => setData(event.target.value)}
          />
        </div>
    )

} 

export default FormInput