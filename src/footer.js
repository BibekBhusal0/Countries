import { FaArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-center relative ">
      <div className=" text-xl font-thin mb-5 ">
        Copyright © 2024 Bibek Bhusal
      </div>
      <div className=" text-sm font-thin pb-40">
        Note: This site was designde by Bibek Bhusal just for the purpose of
        learning React JS and Tailwind CSS.
        <br />
        <br />
        All the data desplayed in this website are from{" "}
        <a
          className=" text-blue-400 hover:text-blue-700"
          href="https://restcountries.com/v3.1/all">
          Rest Countries API
        </a>
        . Creater of this website don't can't assure you that data on this
        website is accurate. The creater of this site is and will not be
        responsible for the data desplayed in this website but be fully
        responsible for design and responsiveness of the website.
      </div>
      <a
        className=" absolute text-purple-700 text-5xl left-6 bottom-10"
        href="#top">
        <FaArrowAltCircleUp />
        <div className="text-xl  font-bold">TOP</div>
      </a>
    </footer>
  );
}

export default Footer;
