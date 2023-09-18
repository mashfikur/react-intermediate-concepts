import "./App.css";
import BarChart from "./components/BarChart";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import Phones from "./components/Phones";


function App() {
  return (
    <div className="container mx-auto">
    <Navbar></Navbar>
      <Chart></Chart>
      <BarChart></BarChart>
      <Phones></Phones>
    </div>
  );
}

export default App;
