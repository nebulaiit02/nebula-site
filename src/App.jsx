import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "80vh", background: "linear-gradient(#8e2de2, #c94b4b)" }}>
        {/* Demo content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
