import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineMail,
  AiFillSetting,
} from "react-icons/ai";
import { BsFiletypeDoc } from "react-icons/bs";
import { SiReacthookform } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";

type Sidebar = {
  icon: IconType;
  name: string;
  link: string;
}[];
export const sidebar: Sidebar = [
  {
    icon: BsFiletypeDoc,
    name: "New Doc",
    link: "new-doc",
  },
  {
    icon: AiOutlineHome,
    name: "Admin",
    link: "admin",
  },
  {
    icon: AiOutlineBarChart,
    name: "Chart",
    link: "chart",
  },
  {
    icon: SiReacthookform,
    name: "Form",
    link: "form",
  },
  {
    icon: AiOutlineMail,
    name: "Email",
    link: "email",
  },
  {
    icon: CgProfile,
    name: "Profile",
    link: "profile",
  },
  {
    icon: AiFillSetting,
    name: "Setting",
    link: "setting",
  },
];
