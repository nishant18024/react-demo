import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Footer from "components/Footer";

export default function EventLandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Abu Dhabi Sports Council</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[21px] gap-[47px] bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full" />
        <div className="flex flex-col items-center justify-start w-full gap-[75px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Tabs
              className="flex flex-col items-center justify-start w-full"
              selectedTabClassName=""
              selectedTabPanelClassName="mt-[69px] relative tab-panel--selected"
            >
              <div className="h-[751px] w-full relative">
                <Img
                  src="images/img_cc_1.png"
                  alt="ccone_one"
                  className="justify-center h-[751px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-start justify-start w-[35%] gap-[27px] bottom-[11%] left-[7%] m-auto absolute">
                  <Heading size="5xl" as="h1" className="w-[98%] !text-black-900 tracking-[0.10px] leading-[60px]">
                    Welcome to Abu Dhabi Sports Council
                  </Heading>
                  <Text size="2xl" as="p" className="!text-black-900 tracking-[0.10px] !leading-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                    sed do eiusmod tempor incididunt ut labore{" "}
                  </Text>
                  <div className="flex flex-row justify-start items-start w-full gap-[15px] max-w-[350px]">
                    <Button className="rounded-tl-md rounded-br-md tracking-[0.10px] font-bold min-w-[261px]">
                      Learn More
                    </Button>
                    <Button color="lime_800" size="lg" className="w-[22%] mt-1 shadow-xs">
                      <Img src="images/img_frame_34298.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[56%] mt-[95px]">
                <Heading size="4xl" as="h2" className="!text-black-900 tracking-[0.10px]">
                  UPCOMING EVENTS
                </Heading>
                <Img src="images/img_iconly_light_filter.svg" alt="iconlylight_one" className="h-[21px]" />
              </div>
              <div className="flex flex-row w-full mt-[59px] gap-[31px]">
                <div className="h-[577px] w-[50%] relative">
                  <Img
                    src="images/img_image_56.png"
                    alt="imagefiftysix"
                    className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-6 m-auto bg-gradient absolute">
                    <div className="flex flex-row justify-end items-center w-[85%] mt-[426px] mr-7 gap-[23px]">
                      <Heading size="4xl" as="h3" className="w-1/2 tracking-[0.10px]">
                        Cricket Tournament
                      </Heading>
                      <div className="flex flex-col items-start justify-start w-[47%] gap-[18px]">
                        <div className="flex flex-row justify-start gap-3.5">
                          <Img src="images/img_iconly_light_calendar.svg" alt="15_february2024" className="h-[22px]" />
                          <Text as="p" className="tracking-[0.10px]">
                            15 February, 2024
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start gap-10.5">
                          <Img src="images/img_iconly_light_location.svg" alt="image" className="h-[22px] mb-0.5" />
                          <Text as="p" className="tracking-[0.10px]">
                            Alwathbha Football Complex
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[577px] w-[50%] relative">
                  <Img
                    src="images/img_image_43.png"
                    alt="imagefortythree"
                    className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-6 m-auto bg-gradient1 absolute">
                    <div className="flex flex-row justify-start items-center w-full mt-[426px] ml-11 gap-[23px] max-w-[577px]">
                      <Heading size="4xl" as="h4" className="w-1/2 tracking-[0.10px]">
                        Basketball
                        <br />
                        Tournament
                      </Heading>
                      <div className="flex flex-col items-start justify-start w-[47%] gap-[18px]">
                        <div className="flex flex-row justify-start gap-3.5">
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="iconlylight_one"
                            className="h-[22px] mt-px"
                          />
                          <Text as="p" className="tracking-[0.10px]">
                            15 February, 2024
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start gap-3.5">
                          <Img
                            src="images/img_iconly_light_location.svg"
                            alt="iconlylight"
                            className="h-[22px] mb-px"
                          />
                          <Text as="p" className="tracking-[0.10px]">
                            Alwathbha Football Complex
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-8">
                <div className="flex flex-row w-full gap-[31px]">
                  <div className="h-[577px] w-[32%] relative">
                    <Img
                      src="images/img_image_57.png"
                      alt="imagefiftyseven"
                      className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient1 absolute">
                      <div className="flex flex-col items-start justify-start w-[81%] mt-[321px] mr-[13px]">
                        <Heading size="4xl" as="h5" className="tracking-[0.10px]">
                          Football Tournament
                        </Heading>
                        <div className="flex flex-row justify-start mt-[53px] gap-3.5">
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="15_february2024"
                            className="h-[22px] mb-px"
                          />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            15 February, 2024
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full mt-[18px] gap-3.5 mx-auto max-w-[267px]">
                          <Img src="images/img_iconly_light_location.svg" alt="image" className="h-[22px] mb-0.5" />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            Alwathbha Football Complex
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[577px] w-[32%] relative">
                    <Img
                      src="images/img_image_58.png"
                      alt="imagefiftyeight"
                      className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient2 absolute">
                      <div className="flex flex-col items-start justify-start w-[81%] mt-[321px] mr-5 gap-[22px]">
                        <Heading size="4xl" as="h6" className="tracking-[0.10px]">
                          Tennis
                          <br />
                          Tournament
                        </Heading>
                        <div className="flex flex-row justify-start gap-3.5">
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="iconlylight_one"
                            className="h-[22px] mt-px"
                          />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            15 February, 2024
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full gap-3.5 mx-auto max-w-[267px]">
                          <Img
                            src="images/img_iconly_light_location.svg"
                            alt="iconlylight"
                            className="h-[22px] mb-px"
                          />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            Alwathbha Football Complex
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[577px] w-[32%] relative">
                    <Img
                      src="images/img_image_59.png"
                      alt="imagefiftynine"
                      className="justify-center h-[577px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient3 absolute">
                      <div className="flex flex-col items-start justify-start w-[81%] mt-[321px] mr-[29px] gap-[22px]">
                        <Heading size="4xl" as="h1" className="tracking-[0.10px]">
                          Football Tournament
                        </Heading>
                        <div className="flex flex-row justify-start gap-3.5">
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="iconlylight_one"
                            className="h-[22px] mt-px"
                          />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            15 February, 2024
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-full gap-3.5 mx-auto max-w-[267px]">
                          <Img
                            src="images/img_iconly_light_location.svg"
                            alt="iconlylight"
                            className="h-[22px] mb-px"
                          />
                          <Text as="p" className="tracking-[0.10px] !font-neosansstd">
                            Alwathbha Football Complex
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[95px] max-w-[1326px]">
                <div className="flex flex-col items-end justify-start w-full gap-[59px]">
                  <div className="flex flex-row justify-between items-start w-[59%] mr-2.5">
                    <Heading size="4xl" as="h1" className="!text-black-900 tracking-[0.10px]">
                      CATEGORIES
                    </Heading>
                    <Img src="images/img_iconly_light_filter.svg" alt="iconlylight" className="h-[21px] mt-2" />
                  </div>
                  <TabList className="flex flex-row justify-start w-full gap-10">
                    <Tab className="flex items-center justify-center h-[82px] w-[220px] pl-[35px] gap-4 text-white-A700 tracking-[0.10px] text-center text-2xl font-bold bg-lime-800 rounded-[15px] ml-[65px]">
                      <div className="flex items-center justify-start w-full">
                        <span>Global Events</span>
                      </div>
                    </Tab>
                    <Tab className="flex flex-row justify-start w-[23%]">
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
                              <Heading size="lg" as="h4" className="mt-0.5 tracking-[0.10px]">
                                Professional Events
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab className="flex flex-row justify-start w-[23%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img src="images/img_group_34509.svg" alt="image_two" className="h-[82px]" />
                        <div className="h-[82px] w-full mt-[-82px] relative">
                          <Img
                            src="images/img_group_34531.png"
                            alt="image_three"
                            className="justify-center h-[82px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-center items-start w-max h-max gap-[17px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img src="images/img_fi_12311262.svg" alt="fi12311262_one" className="h-10 w-10" />
                            <Heading size="lg" as="h4" className="mt-[3px] tracking-[0.10px]">
                              Amateur Events
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab className="flex items-center justify-center h-[82px] w-[250px] pl-3 gap-[17px] text-white-A700 tracking-[0.10px] text-center text-2xl font-bold bg-green-500 rounded-[15px]">
                      Community Events
                    </Tab>
                  </TabList>

                </div>
              </div>
              {[...Array(4)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="items-center w-[1326px] absolute">
                  <div className="flex flex-col items-center justify-start h-[1327px] w-[1326px] mt-[69px]">
                    <div className="flex flex-col items-center justify-start h-[1327px] w-[1326px]">
                      <div className="flex flex-row justify-start items-center h-[1327px] w-[1326px] gap-[33px]">
                        <div className="flex flex-col items-start justify-start w-[32%]">
                          <div className="h-[421px] w-full relative">
                            <Img
                              src="images/img_rectangle_24364.png"
                              alt="image_four"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[81%] mt-[200px]">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  F1
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="iconlylight"
                            className="h-[22px] mt-[7px] ml-[31px]"
                          />
                          <div className="h-[418px] w-[419px] mt-0.5 relative">
                            <Img
                              src="images/img_rectangle_24367.png"
                              alt="image_five"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-full w-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[81%] mt-[199px] mb-0.5">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Cricket Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[13px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_iconly_light_location.svg"
                            alt="iconlylight"
                            className="h-[22px] mt-[5px] ml-[31px]"
                          />
                          <div className="h-[419px] w-[419px] mt-1.5 relative">
                            <Img
                              src="images/img_rectangle_24370.png"
                              alt="image_six"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-[25px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[78%] mt-[210px] ml-1">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Cricket Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[32%] gap-[38px]">
                          <div className="h-[644px] w-full relative">
                            <Img
                              src="images/img_rectangle_24377.png"
                              alt="image_seven"
                              className="justify-center h-[644px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-end h-[418px] w-[418px] bottom-0 right-0 left-0 p-6 m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[78%] mt-[212px] ml-1.5">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Jump
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[644px] w-full relative">
                            <Img
                              src="images/img_rectangle_24376.png"
                              alt="image_eight"
                              className="justify-center h-[644px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-end h-[418px] w-[418px] bottom-0 right-0 left-0 p-[25px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[78%] mt-[211px] ml-1">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Football
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[32%]">
                          <div className="h-[421px] w-full relative">
                            <Img
                              src="images/img_rectangle_24366.png"
                              alt="image_nine"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[81%] mt-[200px]">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Basketball
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_iconly_light_calendar.svg"
                            alt="iconlylight"
                            className="h-[22px] mt-[7px] ml-[30px]"
                          />
                          <div className="h-[418px] w-[419px] mt-0.5 relative">
                            <Img
                              src="images/img_rectangle_24369.png"
                              alt="image_ten"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-full w-max left-0 bottom-0 right-0 top-0 p-[30px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[81%] mt-[199px] mb-0.5">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Running
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[13px] gap-3.5">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_iconly_light_location.svg"
                            alt="iconlylight"
                            className="h-[22px] mt-[5px] ml-[30px]"
                          />
                          <div className="h-[419px] w-[419px] mt-1.5 relative">
                            <Img
                              src="images/img_rectangle_24372.png"
                              alt="image_eleven"
                              className="justify-center h-[418px] w-[418px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <div className="flex flex-col items-start justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-[25px] m-auto bg-gradient4 absolute">
                              <div className="flex flex-col items-start justify-start w-[78%] mt-[210px] ml-1">
                                <Heading size="3xl" as="h1" className="tracking-[0.10px]">
                                  Running
                                  <br />
                                  Tournament
                                </Heading>
                                <div className="flex flex-row justify-start ml-[5px] gap-[9px]">
                                  <Img
                                    src="images/img_iconly_light_calendar.svg"
                                    alt="iconlylight"
                                    className="h-[22px]"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    15 February, 2024
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start mt-[11px] ml-[5px] gap-[9px]">
                                  <Img
                                    src="images/img_iconly_light_location.svg"
                                    alt="iconlylight"
                                    className="h-[22px] mb-px"
                                  />
                                  <Text as="p" className="tracking-[0.10px]">
                                    Alwathbha Football Complex
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
              <Button className="mt-[67px] tracking-[0.10px] font-bold min-w-[255px] !rounded-lg">View More</Button>
              <div className="h-[824px] w-full mt-[69px] relative">
                <Img
                  src="images/img_rectangle_24378.png"
                  alt="image_twelve"
                  className="justify-center h-[824px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Heading size="2xl" as="h2" className="!text-black-900 !font-neosansstd">
                    Clubs and Federations
                  </Heading>
                  <Text as="p" className="mt-[29px] !text-gray-500 !font-neosansstd">
                    There are many variations of passages of Lorem Ipsum available
                  </Text>
                  <div className="flex flex-row w-full mt-[45px] gap-3.5">
                    <div className="flex flex-col items-center justify-start w-[33%] pt-[15px] bg-light_green-50">
                      <Img
                        src="images/img_wepik_export_20.png"
                        alt="image"
                        className="w-full z-[1] object-cover max-w-[325px]"
                      />
                      <div className="flex flex-row justify-center w-full p-8 bg-black-900">
                        <div className="flex flex-row justify-center w-full mt-0.5 mx-[7px] max-w-[348px]">
                          <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                            <Heading size="xl" as="h4">
                              Abu Dhabi Football <br />
                              Sports Federation (ADFF)
                            </Heading>
                            <div className="flex flex-row justify-between w-full">
                              <Text size="md" as="p" className="mb-px">
                                Abu Dhabi
                              </Text>
                              <Text size="md" as="p">
                                EST- 2010
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[33%] pt-[25px] gap-[29px] bg-light_green-50">
                      <Img
                        src="images/img_wepik_export_20_239x325.png"
                        alt="wepikexporttwen"
                        className="w-full object-cover max-w-[325px]"
                      />
                      <div className="flex flex-row justify-center w-full p-8 bg-black-900">
                        <div className="flex flex-row justify-center w-full mt-0.5 mx-[7px] max-w-[348px]">
                          <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                            <Heading size="xl" as="h4">
                              Abu Dhabi Soccer Sports Federation (ADSSF)
                            </Heading>
                            <div className="flex flex-row justify-between w-full">
                              <Text size="md" as="p" className="mb-px">
                                Abu Dhabi
                              </Text>
                              <Text size="md" as="p">
                                EST- 2010
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[33%] bg-light_green-50">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          src="images/img_wepik_export_20_319x325.png"
                          alt="wepikexporttwen"
                          className="w-full z-[1] object-cover max-w-[325px]"
                        />
                        <div className="flex flex-row justify-center w-full mt-[-25px] p-8 bg-black-900">
                          <div className="flex flex-row justify-center w-full mt-0.5 mx-[7px] max-w-[348px]">
                            <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                              <Heading size="xl" as="h4">
                                Fatima Bin Mubarak Ladies Sports Academy
                              </Heading>
                              <div className="flex flex-row justify-between w-full">
                                <Text size="md" as="p" className="mb-px">
                                  Abu Dhabi
                                </Text>
                                <Text size="md" as="p">
                                  EST- 2010
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="2xl"
                    as="p"
                    className="mt-[71px] !text-black-900 tracking-[0.10px] !font-neosansstd underline"
                  >
                    {`View all  >>`}
                  </Text>
                </div>
              </div>
              <Heading size="2xl" as="h2" className="mt-[54px] !text-black-900 text-center">
                Press Releases
              </Heading>
              <Text as="p" className="mt-[19px] !text-gray-500">
                There are many variations of passages of Lorem Ipsum available
              </Text>
              <div className="flex flex-row w-full mt-[60px] gap-[45px] max-w-[1320px]">
                <div className="flex flex-col items-center justify-start w-[32%] gap-[19px]">
                  <Img src="images/img_image_32.png" alt="image" className="w-full object-cover rounded-lg" />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Heading as="p" className="!text-lime-800_a2 tracking-[0.10px] !font-neosansstd opacity-0.8">
                      22.01.24
                    </Heading>
                    <Heading size="md" as="h5" className="mt-3.5 !text-gray-700_01 tracking-[0.10px] !font-neosansstd">
                      World Cup in Abu Dhabi 2023
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="mt-[23px] !text-gray-700_90 tracking-[0.10px] !font-neosansstd opacity-0.6 !leading-[25px]"
                    >
                      Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, do
                      eiusmod tempor incididunt ut labore{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-[19px]">
                  <Img src="images/img_image_33.png" alt="imagethirtythre" className="w-full object-cover rounded-lg" />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Heading as="p" className="!text-lime-800_a2 tracking-[0.10px] !font-neosansstd opacity-0.8">
                      22.01.24
                    </Heading>
                    <Heading size="md" as="h5" className="mt-3.5 !text-gray-700_01 tracking-[0.10px] !font-neosansstd">
                      Racing Marathon
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="mt-[23px] !text-gray-700_90 tracking-[0.10px] !font-neosansstd opacity-0.6 !leading-[25px]"
                    >
                      Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, do
                      eiusmod tempor incididunt ut labore{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[32%]">
                  <Img src="images/img_image_35.png" alt="imagethirtyfive" className="w-full object-cover rounded-lg" />
                  <Heading
                    as="p"
                    className="mt-[19px] !text-lime-800_a2 tracking-[0.10px] !font-neosansstd opacity-0.8"
                  >
                    22.01.24
                  </Heading>
                  <Heading size="md" as="h5" className="mt-3.5 !text-gray-700_01 tracking-[0.10px] !font-neosansstd">
                    Abu Dhabi Football League
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="mt-[23px] !text-gray-700_90 tracking-[0.10px] !font-neosansstd opacity-0.6 !leading-[25px]"
                  >
                    Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, do
                    eiusmod tempor incididunt ut labore{" "}
                  </Text>
                </div>
              </div>
              <Text
                size="2xl"
                as="p"
                className="mt-[45px] !text-black-900 tracking-[0.10px] !font-neosansstd underline"
              >
                {`View all  >>`}
              </Text>
            </Tabs>
          </div>
          <div style={{ position: "relative", width: "100%", height: "408px" }}>
            <Footer className="flex justify-center items-center w-full bg-lime-800">
            </Footer>
          </div>
        </div>
      </div>
    </>
  );
}
