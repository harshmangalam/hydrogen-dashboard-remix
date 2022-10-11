import { BsFilePostFill } from "react-icons/bs";
import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineHome,
} from "react-icons/hi";

import { RiDeviceLine, RiNotification4Line } from "react-icons/ri";
export const data = [
  { icon: HiOutlineHome, label: "Home", href: "/" },
  { icon: HiOutlineUsers, label: "Users", href: "/users" },
  { icon: BsFilePostFill, label: "Posts", href: "/posts" },
  { icon: HiOutlineUserGroup, label: "Groups", href: "/groups" },
  { icon: BsFilePostFill, label: "Group Posts", href: "/group-posts" },
  {
    icon: RiNotification4Line,
    label: "Notifications",
    href: "/notifications",
  },
  { icon: RiDeviceLine, label: "Devices", href: "/group-posts" },
];
