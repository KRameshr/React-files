import React, { useState } from "react";

const Countre = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={() => setcount(count + 1)}>
        ++
      </button>
      <button className="btn btn-secondary" onClick={() => setcount(count - 1)}>
        --
      </button>
      <button className="btn btn-secondary" onClick={() => setcount(0)}>
        Rest
      </button>
    </div>
  );
};

export default Countre;
