import React from "react";
export default ({ onChange }) => {
  const [value, setValue] = React.useState(1);
  return (
    <React.Fragment>
      <input
        type="range"
        min={1}
        max={10}
        onChange={(e) => {
          onChange(Number(e.target.value));
          setValue(e.target.value);
        }}
      />
      {value}
    </React.Fragment>
  );
};
