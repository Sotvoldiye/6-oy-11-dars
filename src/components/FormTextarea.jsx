import React from "react";

function FormTextarea({ label, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <textarea
        className="textarea h-24 w-full"
        placeholder="type here"
        name={name}
        required
      ></textarea>
    </fieldset>
  );
}

export default FormTextarea;
