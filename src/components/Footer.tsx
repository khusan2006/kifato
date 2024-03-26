import { Mail, MapPin, Smartphone } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-12">
      <MaxWidthWrapper className="">
        <div className="flex items-center justify-between">
          <div className="w-[16rem]">
            <h4 className="text-2xl text-gray-600 mb-3">Kontaktlar</h4>
            <div className="w-full h-[1px] bg-gray-300" />
            <ul className=" flex flex-col gap-2 mt-3">
              <li>
                <a className="flex gap-2 items-start" href="tel:+79299296968">
                  <Smartphone size={"18"} /> +7 (929) 929-69-68
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-start"
                  href="mailto:sale@kifatomarket.com"
                >
                  {" "}
                  <Mail size={"18"} />
                  sale@kifatomarket.com
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-start "
                  href="mailto:sale@kifatomarket.com"
                >
                  <MapPin size={"18"} />
                  Московская область, город Клин, <br /> Волоколамское шоссе, 33
                  стр. 3
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[16rem]">
            <h4 className="text-2xl text-gray-600 mb-3">Sahifalar</h4>
            <div className="w-full h-[1px] bg-gray-300 mb-3" />
            <ul className="flex flex-col gap-2 underline">
              <li>
                <NavLink to={"/"}>Kontakt</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Zavodlar haqida</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Xizmat va Kafolat</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Showrumlar</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-300 w-full h-[1px] my-10" />
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
