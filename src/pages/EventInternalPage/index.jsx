import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "components/Footer";

export default function EventInternalPagePage() {
  return (
    <>
      <Helmet>
        <title>Abu Dhabi Sports Council</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[21px] gap-[34px] bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full" />
        <div className="flex flex-col items-center justify-start w-full gap-[89px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[824px] w-full relative">
                <Img
                  src="images/img_rectangle_24378.png"
                  alt="image"
                  className="justify-center h-[824px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-row justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex flex-col items-start justify-start w-[39%]">
                      <Heading size="lg" as="h1" className="!text-lime-800 tracking-[0.10px]">
                        FEATURED EVENT
                      </Heading>
                      <Heading size="5xl" as="h2" className="mt-[49px] !text-black-900 tracking-[0.10px]">
                        <span className="text-black-900">
                          Abu Dhabi
                          <br />
                        </span>
                        <span className="text-lime-800 text-[62px]">Tennis</span>
                        <span className="text-black-900 text-[62px]">
                          <br />
                          Championship
                        </span>
                      </Heading>
                      <Text
                        size="2xl"
                        as="p"
                        className="w-[85%] mt-[21px] !text-black-900 tracking-[0.10px] !leading-[30px]"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore{" "}
                      </Text>
                      <div className="flex flex-row justify-start items-start mt-[46px] gap-[15px]">
                        <Button className="rounded-tl-md rounded-br-md tracking-[0.10px] font-bold min-w-[261px]">
                          Learn More
                        </Button>
                        <Button color="lime_800" size="lg" className="w-[22%] mt-1 shadow-xs">
                          <Img src="images/img_frame_34298.svg" />
                        </Button>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_24415.png"
                      alt="image_one"
                      className="w-[824px] ml-[-2px] rounded-bl-[50%] rounded-tl-[50%] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full mt-7 max-w-[1329px]">
                <Heading size="4xl" as="h3" className="mb-px !text-black-900 tracking-[0.10px]">
                  ALL CATEGORIES
                </Heading>
                <div className="flex flex-row justify-start gap-5">
                  <Button color="white_A700" size="sm" className="w-[45px] rounded-[22px]">
                    <Img src="images/img_iconly_light_filter.svg" />
                  </Button>
                  <Button
                    color="deep_orange_A200"
                    size="xs"
                    className="border-white-A700 border border-solid min-w-[100px] rounded-[22px]"
                  >
                    7 Days
                  </Button>
                  <Button
                    color="deep_orange_A200"
                    size="xs"
                    className="border-white-A700 border border-solid min-w-[100px] rounded-[22px]"
                  >
                    15 Days
                  </Button>
                  <Text
                    size="s"
                    as="p"
                    className="flex justify-center items-center w-[100px] h-[45px] pl-8 pr-[21px] py-3.5 border-white-A700 border border-solid bg-deep_orange-A200 rounded-[22px]"
                  >
                    30 Days
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-[59px] gap-[39px] max-w-[1326px]">
                <div className="flex flex-row w-[49%] gap-10">
                  <div className="flex flex-row justify-center w-[47%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img src="images/img_group_34508.svg" alt="global_events" className="h-[82px]" />
                      <div className="h-[82px] w-full mt-[-82px] relative">
                        <Img
                          src="images/img_group_34531.png"
                          alt="global_events"
                          className="justify-center h-[82px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-center items-center w-max h-max gap-4 left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Img src="images/img_vector_white_a700.svg" alt="global_events" className="h-10 w-10" />
                          <Heading size="lg" as="h4" className="tracking-[0.10px]">
                            Global Events
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[47%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img src="images/img_group_34507.svg" alt="image" className="h-[82px]" />
                      <div className="h-[82px] w-full mt-[-82px] relative">
                        <Img
                          src="images/img_group_34531.png"
                          alt="image_one"
                          className="justify-center h-[82px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-start w-full gap-2">
                            <Img src="images/img_fi_9278608.svg" alt="fi9278608_one" className="h-10 w-10" />
                            <Heading size="lg" as="h5" className="mt-0.5 tracking-[0.10px]">
                              Professional Events
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  color="blue_gray_600"
                  size="3xl"
                  leftIcon={<Img src="images/img_fi_12311262.svg" alt="fi_12311262" />}
                  rightIcon={<Img src="images/img_group_34531.png" alt="Group 34546" className="w-[301px] h-[82px]" />}
                  className="gap-[17px] tracking-[0.10px] font-bold min-w-[301px] rounded-[15px]"
                >
                  Amateur Events
                </Button>
                <Button
                  color="green_500"
                  size="3xl"
                  leftIcon={<Img src="images/img_fi3104509.svg" alt="fi_3104509" />}
                  rightIcon={<Img src="images/img_group_34531.png" alt="Group 34545" className="w-[301px] h-[82px]" />}
                  className="gap-[17px] tracking-[0.10px] font-bold min-w-[301px] rounded-[15px]"
                >
                  Community Events
                </Button>
              </div>
              <div className="flex flex-row justify-start w-full mt-[49px] max-w-[1243px]">
                <div className="flex flex-row justify-start items-center w-full gap-[35px]">
                  <div className="flex flex-row justify-end w-[14%] bg-gray-200">
                    <div className="flex flex-row justify-between items-center w-[86%]">
                      <Text size="2xl" as="p" className="!text-black-900 tracking-[0.20px]">
                        February
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[22%]">
                        <div className="flex flex-col items-end justify-center h-[30px] w-[30px] p-[7px] bg-lime-800">
                          <Img src="images/img_vector_white_a700_8x14.svg" alt="vector_three" className="h-2 my-1" />
                        </div>
                        <div className="flex flex-col items-end justify-center h-[30px] w-[30px] p-[7px] bg-black-900">
                          <Img src="images/img_vector_white_a700_8x14.svg" alt="vector_five" className="h-2 my-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[38px] w-[84%] relative">
                    <div className="h-[38px] w-[38px] left-[44%] bottom-0 top-0 m-auto bg-deep_orange-A200 absolute" />
                    <Text
                      as="p"
                      className="w-max top-[19%] right-0 left-0 m-auto !text-black-900 !font-medium absolute"
                    >
                      <span className="text-black-900">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</span>
                      <span className="text-white-A700"></span>
                      <span className="text-black-900">16 17 18 19 20 21 22 23 24 25 26 27 28 </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-full mt-[82px] gap-[19px] max-w-[1507px]">
                <div className="h-[681px] w-[49%] mt-[18px] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="h-[45px] w-[45px] mr-[189px] z-[1] bg-lime-800 rounded-[22px]" />
                    <div className="flex flex-row justify-end items-start w-full mt-[-9px]">
                      <div className="h-[121px] w-[121px] mt-[238px] z-[1] bg-lime-800 rounded-[60px]" />
                      <div className="h-[645px] w-[93%] ml-[-65px] relative">
                        <Img
                          src="images/img_vector_25.png"
                          alt="vectortwentyfiv"
                          className="justify-center h-[645px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="h-[45px] w-[45px] bottom-[9%] right-[23%] m-auto bg-lime-800 absolute rounded-[22px]" />
                        <div className="h-3 w-3 bottom-[6%] right-0 left-0 m-auto bg-blue_gray-100_01 absolute rounded-[50%]" />
                        <div className="h-[45px] w-[45px] right-[13%] top-[19%] m-auto bg-lime-800 absolute rounded-[22px]" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[25px] w-[25px] right-[34%] top-[4%] m-auto bg-lime-800 absolute rounded-[12px]" />
                </div>
                <div className="h-[763px] w-[763px] relative">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image_two"
                    className="justify-center h-[763px] w-[763px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[66%] h-max left-[10%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="3xl" as="p" className="ml-px !text-lime-800 tracking-[0.10px] !font-medium">
                        Global Events
                      </Text>
                      <Heading size="6xl" as="h6" className="w-[92%] mt-[25px] ml-px !text-black-900 tracking-[0.10px]">
                        Basketball
                        <br />
                        Tournament
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-px !text-gray-500 !font-neosansstd">
                        There are many variations of passages of Lorem Ipsum available
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[61px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_calendar_black_900.svg"
                          alt="iconlylight_one"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          15 February, 2024
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center mt-[25px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_location_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          Alwathbha Football Complex
                        </Text>
                      </div>
                      <Button className="mt-[61px] tracking-[0.10px] font-bold min-w-[188px] !rounded-lg">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-full gap-5 max-w-[1508px]">
                <div className="h-[763px] w-[763px] relative">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image_three"
                    className="justify-center h-[763px] w-[763px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[66%] h-max left-[13%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="3xl" as="p" className="ml-px !text-lime-800 tracking-[0.10px] !font-medium">
                        Global Events
                      </Text>
                      <Heading size="6xl" as="h1" className="w-[92%] mt-[25px] ml-px !text-black-900 tracking-[0.10px]">
                        Running
                        <br />
                        Tournament
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-px !text-gray-500 !font-neosansstd">
                        There are many variations of passages of Lorem Ipsum available
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[61px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_calendar_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          15 February, 2024
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center mt-[25px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_location_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          Alwathbha Football Complex
                        </Text>
                      </div>
                      <Button className="mt-[61px] tracking-[0.10px] font-bold min-w-[188px] !rounded-lg">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[681px] w-[49%] mt-2.5 relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="h-[45px] w-[45px] mr-[189px] z-[1] bg-lime-800 rounded-[22px]" />
                    <div className="flex flex-row justify-end items-start w-full mt-[-9px]">
                      <div className="h-[121px] w-[121px] mt-[238px] z-[1] bg-lime-800 rounded-[60px]" />
                      <div className="h-[645px] w-[93%] ml-[-65px] relative">
                        <Img
                          src="images/img_vector_25_645x670.png"
                          alt="vectortwentyfiv"
                          className="justify-center h-[645px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="h-[45px] w-[45px] bottom-[9%] right-[23%] m-auto bg-lime-800 absolute rounded-[22px]" />
                        <div className="h-3 w-3 bottom-[6%] right-0 left-0 m-auto bg-blue_gray-100_01 absolute rounded-[50%]" />
                        <div className="h-[45px] w-[45px] right-[13%] top-[19%] m-auto bg-lime-800 absolute rounded-[22px]" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[25px] w-[25px] right-[34%] top-[4%] m-auto bg-lime-800 absolute rounded-[12px]" />
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-[19px] max-w-[1507px]">
                <div className="h-[681px] w-[49%] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="h-[45px] w-[45px] mr-[189px] z-[1] bg-lime-800 rounded-[22px]" />
                    <div className="flex flex-row justify-end items-start w-full mt-[-9px]">
                      <div className="h-[121px] w-[121px] mt-[238px] z-[1] bg-lime-800 rounded-[60px]" />
                      <div className="h-[645px] w-[93%] ml-[-65px] relative">
                        <Img
                          src="images/img_vector_25_1.png"
                          alt="vectortwentyfiv"
                          className="justify-center h-[645px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="h-[45px] w-[45px] bottom-[9%] right-[23%] m-auto bg-lime-800 absolute rounded-[22px]" />
                        <div className="h-3 w-3 bottom-[6%] right-0 left-0 m-auto bg-blue_gray-100_01 absolute rounded-[50%]" />
                        <div className="h-[45px] w-[45px] right-[13%] top-[19%] m-auto bg-lime-800 absolute rounded-[22px]" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[25px] w-[25px] right-[34%] top-[4%] m-auto bg-lime-800 absolute rounded-[12px]" />
                </div>
                <div className="h-[763px] w-[763px] relative">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image_four"
                    className="justify-center h-[763px] w-[763px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[66%] h-max left-[10%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="3xl" as="p" className="ml-px !text-lime-800 tracking-[0.10px] !font-medium">
                        Global Events
                      </Text>
                      <Heading size="6xl" as="h1" className="w-[92%] mt-[25px] ml-px !text-black-900 tracking-[0.10px]">
                        Golf
                        <br />
                        Tournament
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-px !text-gray-500 !font-neosansstd">
                        There are many variations of passages of Lorem Ipsum available
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[61px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_calendar_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          15 February, 2024
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center mt-[25px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_location_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          Alwathbha Football Complex
                        </Text>
                      </div>
                      <Button className="mt-[61px] tracking-[0.10px] font-bold min-w-[188px] !rounded-lg">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-5 max-w-[1508px]">
                <div className="h-[763px] w-[763px] relative">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image_five"
                    className="justify-center h-[763px] w-[763px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[66%] h-max left-[13%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="3xl" as="p" className="ml-px !text-lime-800 tracking-[0.10px] !font-medium">
                        Global Events
                      </Text>
                      <Heading size="6xl" as="h1" className="w-[92%] mt-[25px] ml-px !text-black-900 tracking-[0.10px]">
                        F1
                        <br />
                        Tournament
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-px !text-gray-500 !font-neosansstd">
                        There are many variations of passages of Lorem Ipsum available
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[61px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_calendar_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          15 February, 2024
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center mt-[25px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_location_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          Alwathbha Football Complex
                        </Text>
                      </div>
                      <Button className="mt-[61px] tracking-[0.10px] font-bold min-w-[188px] !rounded-lg">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[681px] w-[49%] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="h-[45px] w-[45px] mr-[189px] z-[1] bg-lime-800 rounded-[22px]" />
                    <div className="flex flex-row justify-end items-start w-full mt-[-9px]">
                      <div className="h-[121px] w-[121px] mt-[238px] z-[1] bg-lime-800 rounded-[60px]" />
                      <div className="h-[645px] w-[93%] ml-[-65px] relative">
                        <Img
                          src="images/img_vector_25_2.png"
                          alt="vectortwentyfiv"
                          className="justify-center h-[645px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="h-[45px] w-[45px] bottom-[9%] right-[23%] m-auto bg-lime-800 absolute rounded-[22px]" />
                        <div className="h-3 w-3 bottom-[6%] right-0 left-0 m-auto bg-blue_gray-100_01 absolute rounded-[50%]" />
                        <div className="h-[45px] w-[45px] right-[13%] top-[19%] m-auto bg-lime-800 absolute rounded-[22px]" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[25px] w-[25px] right-[34%] top-[4%] m-auto bg-lime-800 absolute rounded-[12px]" />
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-full gap-[19px] max-w-[1507px]">
                <div className="h-[681px] w-[49%] mt-[29px] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="h-[45px] w-[45px] mr-[189px] z-[1] bg-lime-800 rounded-[22px]" />
                    <div className="flex flex-row justify-end items-start w-full mt-[-9px]">
                      <div className="h-[121px] w-[121px] mt-[238px] z-[1] bg-lime-800 rounded-[60px]" />
                      <div className="h-[645px] w-[93%] ml-[-65px] relative">
                        <Img
                          src="images/img_vector_25_3.png"
                          alt="vectortwentyfiv"
                          className="justify-center h-[645px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="h-[45px] w-[45px] bottom-[9%] right-[23%] m-auto bg-lime-800 absolute rounded-[22px]" />
                        <div className="h-3 w-3 bottom-[6%] right-0 left-0 m-auto bg-blue_gray-100_01 absolute rounded-[50%]" />
                        <div className="h-[45px] w-[45px] right-[13%] top-[19%] m-auto bg-lime-800 absolute rounded-[22px]" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[25px] w-[25px] right-[34%] top-[4%] m-auto bg-lime-800 absolute rounded-[12px]" />
                </div>
                <div className="h-[763px] w-[763px] relative">
                  <Img
                    src="images/img_rectangle_24378.png"
                    alt="image_six"
                    className="justify-center h-[763px] w-[763px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-start w-[66%] h-max left-[10%] bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="3xl" as="p" className="ml-px !text-lime-800 tracking-[0.10px] !font-medium">
                        Global Events
                      </Text>
                      <Heading size="6xl" as="h1" className="w-[92%] mt-[25px] ml-px !text-black-900 tracking-[0.10px]">
                        Cricket
                        <br />
                        Tournament
                      </Heading>
                      <Text as="p" className="mt-[26px] ml-px !text-gray-500 !font-neosansstd">
                        There are many variations of passages of Lorem Ipsum available
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[61px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_calendar_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          15 February, 2024
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center mt-[25px] gap-3.5">
                        <Img
                          src="images/img_iconly_light_location_black_900.svg"
                          alt="iconlylight"
                          className="h-[22px]"
                        />
                        <Text size="3xl" as="p" className="!text-black-900 tracking-[0.10px]">
                          Alwathbha Football Complex
                        </Text>
                      </div>
                      <Button className="mt-[61px] tracking-[0.10px] font-bold min-w-[188px] !rounded-lg">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-start w-[45%] mt-[97px]">
                <Img src="images/img_vector_black_900.svg" alt="vector_seven" className="h-[27px] mt-2.5" />
                <Button color="lime_800" size="md" shape="square" className="ml-7 tracking-[0.10px] min-w-[50px]">
                  1
                </Button>
                <Text size="2xl" as="p" className="mt-2.5 ml-7 !text-black-900 tracking-[0.10px]">
                  2
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  3
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  4
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  5
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  6
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  7
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  8
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-[46px] !text-black-900 tracking-[0.10px]">
                  9
                </Text>
                <Text size="2xl" as="p" className="h-6 mt-2.5 ml-10 !text-black-900 tracking-[0.10px]">
                  10
                </Text>
                <Text size="2xl" as="p" className="mt-2.5 ml-10 tracking-[0.10px]">
                  1
                </Text>
                <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[27px] mt-2.5" />
              </div>
            </div>
          </div>
          {/* <footer className="flex justify-center items-center w-full">
            <div className="h-[408px] w-full relative">
              <div className="flex flex-row justify-center w-max h-full left-0 bottom-0 right-0 top-0 p-8 m-auto bg-lime-800 absolute">
                <div className="flex flex-col items-center justify-start w-full mt-4 gap-[75px] mx-[67px] max-w-[1326px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="flex flex-row justify-start items-center gap-[11px]">
                          <Img src="images/img_image_3.png" alt="imagethree_one" className="w-[39%] object-cover" />
                          <Img src="images/img_image_118.png" alt="image118_one" className="w-[58%] object-cover" />
                        </div>
                        <div className="flex flex-row justify-between w-[62%] mt-[45px]">
                          <ul className="flex flex-row justify-center w-[7%]">
                            <li>
                              <a href="#">
                                <div className="flex flex-col items-center justify-start">
                                  <Heading as="p" className="tracking-[0.10px]">
                                    EVENTS{" "}
                                  </Heading>
                                  <Heading as="p" className="mt-[-16px] tracking-[0.10px]">
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
                      <div className="h-px w-full bg-white-A700_66" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[56%] gap-[134px]">
                    <Heading as="p" className="tracking-[0.10px]">
                      Zayed Sports City - Abu Dhabi
                    </Heading>
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
                          alt="vector_eleven"
                          className="justify-center h-4 w-4 left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_white_a700_34x34.svg"
                          alt="vector_thirteen"
                          className="justify-center h-[34px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start h-[34px] w-[34px]">
                        <Img src="images/img_vector_white_a700_32x32.svg" alt="vector_fifteen" className="h-8 w-8" />
                      </div>
                      <div className="h-[33px] w-[34px] relative">
                        <Img
                          src="images/img_vector_white_a700_33x34.svg"
                          alt="vector"
                          className="justify-center h-[33px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Img
                          src="images/img_vector_lime_800.svg"
                          alt="vector_nineteen"
                          className="justify-center h-[19px] w-[19px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                      </div>
                    </div>
                  </div>
                  <Text size="xs" as="p" className="tracking-[0.10px] text-center">
                    © 2024 Abu Dhabi Government. All rights reserved.
                  </Text>
                </div>
              </div>
              <div className="h-px w-full bottom-[19%] right-0 left-0 m-auto bg-white-A700 absolute" />
            </div>
          </footer> */}
        </div>
      </div>
      <div className="mb-[20px]">

      </div>
      <div style={{ position: "relative", width: "100%", height: "408px" }}>
        <Footer className="flex justify-center items-center w-full bg-lime-800">
        </Footer>
      </div>
    </>
  );
}
