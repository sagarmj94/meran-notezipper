import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import React from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
