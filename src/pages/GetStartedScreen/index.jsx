import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function GetStartedScreenPage() {
  return (
    <>
      <Helmet>
        <title>Abu Dhabi Sports Council</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-[55px] py-[21px] bg-white-A700">
        <header className="flex flex-row justify-between items-center w-full px-[60px]">
          <div className="flex flex-row justify-between text-sm w-auto mt-[18px] gap-[72px]">
            <a href="#">
              <Heading as="p" className="!text-black-900 tracking-[0.10px]">
                EVENTS{" "}
              </Heading>
            </a>
            <a href="#">
              <Heading as="p" className="!text-black-900 tracking-[0.10px]">
                CLUB & FEDERATION
              </Heading>
            </a>
            <a href="#">
              <Heading as="p" className="!text-black-900 tracking-[0.10px]">
                MEDIA CENTER{" "}
              </Heading>
            </a>
          </div>
          <div className="flex flex-row justify-between items-start w-3/5 whitespace-no-wrap"> {/* Apply whitespace-no-wrap class here */}
            <Img src="images/img_logo_2.svg" alt="logotwo_one" className="h-[57px]" />
            <div className="flex flex-row justify-center items-center w-[69%] mt-3">
              <a href="#">
                <Heading as="p" className="!text-black-900 tracking-[0.10px]">
                  REGISTER/LOGIN
                </Heading>
              </a>
              <a href="#" className="ml-[41px]">
                <Heading as="p" className="!text-black-900 tracking-[0.10px]">
                  PARTNER REGISTRATION{" "}
                </Heading>
              </a>
              <div className="flex flex-row justify-start items-center w-[12%] ml-11 gap-[13px]">
                <div className="flex flex-row justify-start w-[66%] bg-blue_gray-100 rounded-[5px]">
                  <Img src="images/img_uk_flag.png" alt="ukflag_one" className="w-full object-cover rounded-[5px]" />
                </div>
                <Img src="images/img_drop_down.svg" alt="dropdown_one" className="h-1" />
              </div>
              <Img src="images/img_search.svg" alt="search_one" className="h-[23px] w-6 ml-[41px]" />
              <Img src="images/img_vector.svg" alt="vector_one" className="h-[21px] ml-8" />
            </div>
          </div>
        </header>

        <div className="flex flex-row justify-center w-full mb-[3px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[27px]">
              <div className="h-[824px] w-full relative">
                <div className="justify-center h-[824px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute ">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image"
                    className="justify-center h-[824px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_layer_x0020_1.svg"
                    alt="layerx0020one"
                    className="h-[350px] bottom-[1%] left-0 m-auto absolute"
                  />
                  <div className="flex flex-col items-start justify-start w-[48%] top-[9%] right-0 left-0 m-auto absolute">
                    <div className="h-[72px] w-[36px] ml-[98px] z-[1] bg-lime-800 rounded-l-full transform rotate-[270deg]" />
                    <div className="flex flex-row justify-start items-center w-full mt-[-39px]">
                      <div className="h-[124px] w-[124px] z-[1] rotate-[180deg] bg-lime-800 rounded-[50%]" />
                      <div className="flex flex-row justify-start items-start w-[92%] ml-[-66px]">
                        <div className="flex flex-col items-center justify-start w-[91%] gap-[55px] p-[34px] z-[1] border-black-900_33 border-2 border-solid bg-gradient6 shadow-sm rounded-lg">
                          <div className="flex flex-col items-center justify-start w-[86%]">
                            <Heading size="lg" as="h1" className="!text-black-900 tracking-[0.48px] text-center">
                              Get Started!
                            </Heading>
                            <Text size="lg" as="p" className="mt-[18px] !text-gray-600 tracking-[0.32px] text-center">
                              Please Login/ Register Account to continue
                            </Text>
                            <div className="flex flex-col items-center justify-start w-full mt-[86px] gap-[35px]">
                              <div className="flex flex-row justify-center w-full">
                                <Button
                                  color="lime_800"
                                  size="xl"
                                  className="w-full tracking-[0.36px] font-bold !rounded-lg"
                                >
                                  Login Account
                                </Button>
                              </div>
                              <Button
                                color="lime_800"
                                size="xl"
                                className="w-full tracking-[0.36px] font-bold !rounded-lg"
                              >
                                Register Account
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center items-end w-[71%]">
                            <div className="h-px w-[42%] mb-[7px] bg-gray-700_01" />
                            <Text size="lg" as="p" className="h-5 ml-[27px] !text-gray-700_01 text-center">
                              OR
                            </Text>
                            <div className="h-px w-[42%] mb-[7px] ml-3.5 bg-gray-700_01" />
                          </div>
                          <Img src="images/img_group_34409.svg" alt="image_one" className="h-[51px] mb-1.5" />
                        </div>
                        <div className="h-[136px] w-[136px] mt-[39px] ml-[-75px] bg-lime-800 rounded-[50%]" />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_sports_1.svg"
                    alt="sportsone_one"
                    className="h-[108px] bottom-[1%] right-0 left-0 m-auto absolute"
                  />
                </div>
                <Img
                  src="images/img_layer_x0020_1_gray_200.png"
                  alt="layerx0020one"
                  className="h-[350px] w-1/4 bottom-[1%] right-0 m-auto object-cover absolute"
                />
              </div>
              <Text size="xs" as="p" className="!text-gray-600 tracking-[0.10px] text-center">
                © 2024 Abu Dhabi Government. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
