import React from "react";
import { Heading, Text, Img, Input } from "./.."; // Import your custom components here

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full left-0 bottom-0 right-0 top-0 p-8 m-auto bg-lime-800 absolute">
      <div className="flex flex-row justify-center w-full mb-[99px] mx-[67px] max-w-[1326px]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col items-start justify-start w-[33%]">
              <Text size="lg" as="p" className="ml-[62px] text-center z-[1]">
                 
              </Text>
              <div className="h-28 w-full mt-[-3px] relative">
                <div className="flex flex-row justify-start items-center w-[72%] h-full gap-[11px] left-0 bottom-0 top-0 m-auto absolute">
                  <Img src="images/img_image_3.png" alt="imagethree_one" className="w-[39%]" />
                  <Img src="images/img_image_118.png" alt="image118_one" className="w-[58%]" />
                </div>
                
              </div>
            </div>
            <div className="flex flex-row justify-center w-[64%]">
              <div className="flex flex-col items-start justify-start w-full gap-[42px]">
                <Text size="lg" as="p">
                   
                </Text>
                <div className="flex flex-row justify-between w-[96%] ml-[35px]">
                  <ul className="flex flex-row justify-center w-[7%]">
                    <li>
                      <a href="#">
                        <div className="flex flex-col items-center justify-start">
                          <Heading as="p" className="tracking-[0.10px]">
                            EVENTS{" "}
                          </Heading>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <a href="#">
                    <Heading as="p" className="tracking-[0.10px]">
                      CLUB & FEDERATION
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading as="p" className="tracking-[0.10px]">
                      MEDIA CENTER{" "}
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading as="p" className="tracking-[0.10px]">
                      REGISTER/LOGIN
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading as="p" className="tracking-[0.10px]">
                      PARTNER REGISTRATION{" "}
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-3 bg-white-A700_66" />
          <div className="flex flex-row justify-between items-left w-[66%] mt-[66px] ml-[137px] gap-[134px]">
            <a href="#">
              <Heading as="p" className="tracking-[0.10px]">
                Zayed Sports City - Abu Dhabi
              </Heading>
            </a>
            <a href="tel:+971 2 408 8999" target="_blank" rel="noreferrer" className="w-[17%]">
              <Heading as="p" className="tracking-[0.10px]">
                <span className="text-white-A700">
                  +971 2 408 8999
                  <br />
                </span>
                <span className="text-white-A700">info@adsc.gov.ae</span>
              </Heading>
            </a>
            <div className="flex flex-row justify-between items-center w-1/5">
              <div className="h-[34px] w-[34px] relative">
                <div className="justify-center h-1.5 w-1.5 left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                <Img
                  src="images/img_vector_white_a700_16x16.svg"
                  alt="vector_five"
                  className="justify-center h-4 w-4 left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_vector_white_a700_34x34.svg"
                  alt="vector_seven"
                  className="justify-center h-[34px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
              </div>
              <div className="flex flex-col items-center justify-start h-[34px] w-[34px]">
                <Img src="images/img_vector_white_a700_32x32.svg" alt="vector_nine" className="h-8 w-8" />
              </div>
              <div className="h-[33px] w-[34px] relative">
                <Img
                  src="images/img_vector_white_a700_33x34.svg"
                  alt="vector_eleven"
                  className="justify-center h-[33px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Img
                  src="images/img_vector_lime_800.svg"
                  alt="vector_thirteen"
                  className="justify-center h-[19px] w-[19px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
