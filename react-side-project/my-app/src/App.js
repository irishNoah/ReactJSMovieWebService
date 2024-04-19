import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The effect runs only on mount

  return <div>Window width: {windowWidth}</div>;
}

export default App;
