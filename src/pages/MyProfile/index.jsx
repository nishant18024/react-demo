import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Input, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "components/Footer";

export default function MyProfilePage() {
  return (
    <>
      <Helmet>
        <title>Abu Dhabi Sports Council</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full pt-[21px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[34px]">
          <Header className="flex flex-row justify-between items-center w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[824px] w-full relative">
              <Img
                src="images/img_rectangle_24378.png"
                alt="image"
                className="justify-center h-[824px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-[85%] gap-1 bottom-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[34px]">
                    <Text size="s" as="p" className="tracking-[0.26px] !font-lexend">
                      <span className="text-black-900 font-neosanspro">Home</span>
                      <span className="text-white-A700 font-neosanspro"></span>
                      <span className="text-black-900 font-neosanspro">/</span>
                      <span className="text-gray-500 font-neosanspro"></span>
                      <span className="text-black-900 font-neosanspro">My Account /</span>
                      <span className="text-gray-500 font-neosanspro">My Profile</span>
                    </Text>
                    <div className="flex flex-row justify-start items-start w-full gap-[9px]">
                      <div className="h-[566px] w-[32%] mt-0.5 relative">
                        <Input
                          color="white_A700"
                          name="firstName"
                          className="w-[89%] bottom-[5%] right-0 m-auto absolute"
                        />
                        <div className="flex flex-col items-center justify-start w-[90%] h-full left-0 bottom-0 top-0 m-auto absolute">
                          <div className="flex flex-col items-center justify-start w-full gap-1">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row justify-center w-full p-3 z-[1] bg-lime-800 rounded-[10px]">
                                  <div className="flex flex-row justify-start items-center w-full gap-[23px] my-3">
                                    <Img
                                      src="images/img_ellipse_62.png"
                                      alt="circleimage"
                                      className="h-20 w-[26%] rounded-[50%]"
                                    />
                                    <div className="flex flex-col items-start justify-start w-[68%] gap-1">
                                      <Text size="lg" as="p" className="tracking-[0.32px] !font-medium">
                                        Arjun Rawat
                                      </Text>
                                      <div className="flex flex-row justify-between items-start w-full">
                                        <Text size="s" as="p" className="mt-px tracking-[0.26px]">
                                          arjun.rawat@gmail.com
                                        </Text>
                                        <div className="flex flex-col items-center justify-start h-6 w-6">
                                          <Img
                                            src="images/img_iconly_light_arrow.svg"
                                            alt="iconlylight_one"
                                            className="h-6 w-6"
                                          />
                                        </div>
                                      </div>
                                      <Text size="md" as="p" className="ml-px tracking-[0.28px]">
                                        +91 9827628272
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[50px] w-[50px] mt-[-34px] ml-[135px]">
                                  <Img
                                    src="images/img_iconly_bold_arrow.svg"
                                    alt="iconlybold_one"
                                    className="h-[50px] w-[50px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[416px] w-full relative">
                              <Text size="lg" as="p" className="bottom-[27%] left-[13%] m-auto text-center absolute">
                                First Name
                              </Text>
                              <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-3 m-auto border-gray-700_01 border border-solid bg-gradient5 absolute rounded-lg">
                                <div className="flex flex-row justify-between items-center w-[98%] mt-[18px] mb-[22px]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Heading size="s" as="h1" className="!text-lime-800 tracking-[0.32px]">
                                      My Profile{" "}
                                    </Heading>
                                    <Text size="s" as="p" className="mt-[3px] !text-gray-700">
                                      View or edit your personal info
                                    </Text>
                                    <Text size="lg" as="p" className="mt-[37px] !text-black-900 tracking-[0.32px]">
                                      My Events
                                    </Text>
                                    <Text size="s" as="p" className="mt-[3px] !text-gray-700">
                                      View all events you attended
                                    </Text>
                                    <Text size="lg" as="p" className="mt-[35px] !text-black-900 tracking-[0.32px]">
                                      Interested Events
                                    </Text>
                                    <Text size="s" as="p" className="mt-[5px] !text-gray-700">
                                      View all Events in your wishlist
                                    </Text>
                                    <Text size="lg" as="p" className="mt-[37px] !text-black-900 tracking-[0.32px]">
                                      Help and Support
                                    </Text>
                                    <Text size="s" as="p" className="mt-[3px] !text-gray-700">
                                      Access customer support, FAQs
                                    </Text>
                                    <a href="#" className="mt-[37px]">
                                      <Text size="lg" as="p" className="!text-black-900 tracking-[0.32px]">
                                        Logout
                                      </Text>
                                    </a>
                                    <Text size="s" as="p" className="mt-[3px] !text-gray-700">
                                      Log out of this account
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[8%] gap-[53px]">
                                    <div className="flex flex-col items-center justify-start w-full gap-[53px]">
                                      <div className="flex flex-col items-center justify-start h-6 w-6">
                                        <Img
                                          src="images/img_iconly_light_arrow_lime_800.svg"
                                          alt="iconlylight"
                                          className="h-6 w-6"
                                        />
                                      </div>
                                      <div className="flex flex-col items-center justify-start h-6 w-6">
                                        <Img
                                          src="images/img_iconly_light_arrow_black_900.svg"
                                          alt="iconlylight"
                                          className="h-6 w-6"
                                        />
                                      </div>
                                      <div className="flex flex-col items-center justify-start h-6 w-6">
                                        <Img
                                          src="images/img_iconly_light_arrow_black_900.svg"
                                          alt="iconlylight"
                                          className="h-6 w-6"
                                        />
                                      </div>
                                      <div className="flex flex-col items-center justify-start h-6 w-6">
                                        <Img
                                          src="images/img_iconly_light_arrow_black_900.svg"
                                          alt="iconlylight"
                                          className="h-6 w-6"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start h-6 w-6">
                                      <Img
                                        src="images/img_iconly_light_arrow_black_900.svg"
                                        alt="iconlylight"
                                        className="h-6 w-6"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[510px] w-[68%] relative">
                        <div className="flex flex-col items-start justify-start w-[48%] gap-7 right-0 top-0 m-auto absolute">
                          <Text size="lg" as="p" className="!text-gray-700_01 text-center">
                            Last Name
                          </Text>
                          <Input name="lastName" className="w-full" />
                          <Text size="lg" as="p" className="!text-gray-700_01 text-center">
                            Date of Birth
                          </Text>
                          <div className="flex flex-row items-center justify-center w-full h-[45px] relative">
                            <Input name="dob" className="w-full pr-[45px]" />
                            <div className="absolute right-0 h-full flex items-center">
                              <Img
                                src="images/img_iconly_light_calendar_gray_700_01.svg"
                                alt="iconlylight"
                                className="h-6 w-6 mr-2"
                              />
                            </div>
                          </div>
                          <Text size="lg" as="p" className="!text-gray-700_01 text-center">
                            Mobile Number
                          </Text>
                          <Input name="mobileNumber" className="w-full" />
                        </div>
                        <Button
                          color="lime_800"
                          size="xl"
                          className="w-full bottom-0 right-0 left-0 m-auto rounded-tl-lg rounded-br-lg font-bold absolute"
                        >
                          Save Changes
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[48%] left-0 top-0 m-auto absolute">
                          <Text size="lg" as="p" className="!text-gray-700_01 text-center">
                            First Name
                          </Text>
                          <Input name="firstName" className="w-full mt-[26px]" />
                          <Text size="lg" as="p" className="mt-[31px] !text-gray-700_01 text-center">
                            Gender
                          </Text>
                          <Input name="edittext" className="w-full mt-[25px]" />
                          <Text size="lg" as="p" className="mt-[31px] !text-gray-700_01 text-center">
                            Email Address
                          </Text>
                          <Input name="email" className="w-full mt-[26px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[39%] ml-12 gap-[25px]">
                  <div className="flex flex-row justify-between w-full">
                    <Text size="lg" as="p" className="mt-px text-center">
                      Gender
                    </Text>
                    <Text size="lg" as="p" className="text-center">
                      Date of Birth
                    </Text>
                  </div>
                  <Input color="white_A700" name="edittext_one" className="w-[72%]" />
                </div>
              </div>
            </div>
            <div className="h-[408px] w-full relative">
              <Footer />
              <div className="h-px w-full bottom-[19%] right-0 left-0 m-auto bg-white-A700 absolute" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
