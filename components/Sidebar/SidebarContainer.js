import React from "react";
import { CgFeed, CgDetailsMore } from "react-icons/cg";
import { MdDrafts, MdExplore } from "react-icons/md";
import {
  BsBookmarkFill,
  BsSearch,
  BsGoogle,
  BsApple,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import SidebarNavigation from "./SidebarNavigation";
import SidebarTags from "./SidebarTags";

import SocialMediaButton from "../SignupPage/SocialMediaButton";
function SidebarContainer() {
  const sidebar = {
    navigation: [
      {
        name: "My Feed",
        link: "/my-feed",
        icon: <CgFeed />,
      },
      {
        name: "Drafts",
        link: "/drafts",
        icon: <MdDrafts />,
      },
      {
        name: "Bookmarks",
        link: "/bookmarks",
        icon: <BsBookmarkFill />,
      },
      {
        name: "Explore",
        link: "/explore",
        icon: <MdExplore />,
      },
      {
        name: "Search",
        link: "/search",
        icon: <BsSearch />,
      },
      {
        name: "More",
        link: "/more",
        icon: <CgDetailsMore />,
      },
    ],
    tags: [
      {
        name: "#react",
        link: "/react",
        articles: 120,
      },
      {
        name: "#javascript",
        link: "/javascript",
        articles: 113,
      },
      {
        name: "#nodejs",
        link: "/nodejs",
        articles: 95,
      },
      {
        name: "#html",
        link: "/html",
        articles: 76,
      },
      {
        name: "#web-development",
        link: "/web-development",
        articles: 80,
      },
      {
        name: "#python",
        link: "/python",
        articles: 50,
      },
      {
        name: "#java",
        link: "/java",
        articles: 34,
      },
      {
        name: "#beginners",
        link: "/beginners",
        articles: 20,
      },
    ],
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: <BsFacebook />,
      color: "fb",
      onClick: () => {
        console.log("Facebook clicked");
      },
    },
    {
      name: "Github",
      icon: <BsGithub />,
      color: "github",
      onClick: () => {
        console.log("Github clicked");
      },
    },
    {
      name: "Linkedin",
      icon: <BsLinkedin />,
      color: "linkedin",
      onClick: () => {
        console.log("Linkedin clicked");
      },
    },
    {
      name: "Google",
      icon: <BsGoogle />,
      color: "google",
      onClick: () => {
        console.log("Google clicked");
      },
    },
    {
      name: "Apple",
      icon: <BsApple />,
      color: "apple",
      onClick: () => {
        console.log("Apple clicked");
      },
    },
  ];
  return (
    <div className="flex">
      <div className="w-[14vw]">
        <div className="mb-2">
          {sidebar.navigation.map((nav) => (
            <div className="">
              <SidebarNavigation key={nav.name} navitem={nav} />
            </div>
          ))}
        </div>
        <hr />
        <div className="">
          <h3 className="text-sm uppercase mt-2 font-sans font-medium pl-2">
            Trending Tags
          </h3>
          {sidebar.tags.map((tag) => (
            <SidebarTags key={tag.name} tagItem={tag} />
          ))}
        </div>
        <h4 className="pl-2 text-md mt-2 text-active font-medium cursor-pointer active:text-active-dark">
          Show more
        </h4>
      </div>
      <div className="">
        {socialMedia.map((social) => (
          <SocialMediaButton socialMedia={social} />
        ))}
      </div>
    </div>
  );
}

export default SidebarContainer;
