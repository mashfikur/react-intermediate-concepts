import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleClick = () => {
    setNavMenu(!navMenu);
  };

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/product/:id", name: "ProductDetail" },
  ];

  return (
    <div className="flex justify-between items-center lg:my-10 p-4">
      <div className="flex items-center gap-2 order-2 lg:order-1">
        <div
          onClick={handleClick}
          className="text-2xl cursor-pointer block lg:hidden"
        >
          {navMenu ? <MdClose></MdClose> : <HiMenuAlt1></HiMenuAlt1>}
        </div>
        <h3 className="text-3xl text-rose-800  font-bold "> {`{ I.React }`}</h3>
      </div>

      <div
        className={`order-1 lg:order-2 duration-500 lg:mt-0 absolute lg:relative bg-yellow-400 px-4 py-2 rounded-md lg:rounded-none lg:bg-white lg:px-0 lg:py-0 ${
          navMenu ? "block mt-[18rem]" : "-mt-80 lg:block"
        } `}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-6">
          {routes.map((route) => (
            <li className="font-semibold" key={route.id}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-3 hidden md:block">
        <button className="bg-violet-600 text-white font-semibold px-4 py-2 rounded-full">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
