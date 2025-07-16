import assest from "../../assets/assests";
import { Link } from "react-router-dom";

const Head: React.FC = () => {
  return (
    <header className="lg:px-28 md:px-16 font-inter  bg-[#0D162A33] ">
      <div className="flex flex-row  items-center md:gap-16 lg:gap-[198px]">
        <div>
          {" "}
          <Link to="/">
            <img src={assest.home.logo} />
          </Link>
        </div>

        <ul className="flexmd:space-x-8 lg:space-x-12 text-white items-center  md:text:16 lg:text-[18px]">
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Find A Home
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Communities
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Plan & Design
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Catalogue
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Contact Us
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Head;
