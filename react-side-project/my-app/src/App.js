import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // No clean-up here
  }, []); // The effect runs only on mount

  return <div>Window width: {windowWidth}</div>;
}

export default App;
