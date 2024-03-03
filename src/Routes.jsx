import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EventLandingPage from "pages/EventLandingPage";
import EventInternalPage from "pages/EventInternalPage";
import MyProfile from "pages/MyProfile";
import GetStartedScreen from "pages/GetStartedScreen";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "eventlandingpage",
      element: <EventLandingPage />,
    },
    {
      path: "eventinternalpage",
      element: <EventInternalPage />,
    },
    {
      path: "myprofile",
      element: <MyProfile />,
    },
    {
      path: "getstartedscreen",
      element: <GetStartedScreen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
