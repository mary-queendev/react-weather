import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Abuja" />
      <Footer />
    </div>
  );
}
