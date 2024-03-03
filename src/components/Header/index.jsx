import React from "react";
import { Img, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <div>
      <header {...props}>
        <div className="flex flex-row justify-between items-center w-auto gap-[72px]">
          <a href="#">
            <Heading as="p" className="!text-black-900 tracking-[0.08px]"> {/* Decreased text size by 2px */}
              EVENTS{" "}
            </Heading>
          </a>
          <a href="#">
            <Heading as="p" className="!text-black-900 tracking-[0.08px]"> {/* Decreased text size by 2px */}
              CLUB & FEDERATION
            </Heading>
          </a>
          <a href="#">
            <Heading as="p" className="!text-black-900 tracking-[0.08px]"> {/* Decreased text size by 2px */}
              MEDIA CENTER{" "}
            </Heading>
          </a>
        </div>
        <div className="mx-auto my-4"> {/* Adjusted margin-top here */}
          <Img src="images/img_logo_2.svg" alt="logotwo_one" className="h-[57px]" />
        </div>
        <div className="flex flex-row justify-center items-start">
          <a href="#" className="mt-px">
            <Heading as="p" style={{ marginLeft: "50px" }} className="!text-black-900 tracking-[0.08px]"> {/* Decreased text size by 2px */}
              REGISTER/LOGIN
            </Heading>
          </a>
          <a href="#" className="mt-px ml-[72px]"> {/* Adjusted margin-left here */}
            <Heading as="p" className="!text-black-900 tracking-[0.08px]"> {/* Decreased text size by 2px */}
              PARTNER REGISTRATION{" "}
            </Heading>
          </a>
          <Img src="images/img_search.svg" alt="search_one" className="h-[23px] w-6 ml-[35px]" />
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[21px] mt-[3px] ml-[18px]" /> {/* Adjusted margins here */}
        </div>
      </header>
    </div>
  );
}
