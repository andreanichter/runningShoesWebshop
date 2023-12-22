import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shoes from "./components/Shoes"
import Footer from "./components/Footer";
import Cart from "./components/Cart";


const fetchData = async (setData) => {
  try {
    const response = await fetch("http://localhost:3000/api/shoes");
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error("Error fetching data:", error)
  }
};

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div>
     <Navbar></Navbar>
     <Header></Header>
     <Shoes shoes={data}></Shoes>
     <Cart></Cart>
     <Footer></Footer>
    </div>
  );
}
