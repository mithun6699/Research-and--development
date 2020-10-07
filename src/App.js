import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import "./App.css";
import Header from "./components/common/Header";
import JavaScriptPage from "./components/javascriptpage/JavaScriptPage";
import ReactPage from "./components/reactpage/ReactPage";
import PythonPage from "./components/pythonPage/PythonPage";
import MachineLearning from "./components/machinelearning/MachineLearning";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/react" component={ReactPage} />
      <Route path="/js" component={JavaScriptPage} />
      <Route path="/python" component={PythonPage} />
      <Route path="/ml" component={MachineLearning} />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
