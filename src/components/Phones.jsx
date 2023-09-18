import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => setPhones(data.data.data));
  }, []);
  return (
    <div>
      <h3 className="text-4xl">Phones : {phones.length}</h3>
    </div>
  );
};

export default Phones;
