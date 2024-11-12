export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [

  {

    children: [
      {
        name: "Live",
        icon: "pepicons-pencil:camera",
        id: uniqueId(),
        url: "/",
      },
      {
        name: "Newsfeed",
        icon: "hugeicons:menu-square",
        id: uniqueId(),
        url: "/ui/typography",
      },
      {
        name: "Resources",
        icon: "grommet-icons:resources",
        id: uniqueId(),
        url: "/ui/table",
      },
      {
        name: "Messages",
        icon: "mynaui:message",
        id: uniqueId(),
        url: "/ui/form",
      },
      {
        name: "Settings",
        icon: "lucide:settings",
        id: uniqueId(),
        url: "/ui/shadow",
      },
    ],
  },
  // {
  //   heading: "AUTH",
  //   children: [
  //     {
  //       name: "Login",
  //       icon: "solar:login-2-linear",
  //       id: uniqueId(),
  //       url: "/auth/login",
  //     },
  //     {
  //       name: "Register",
  //       icon: "solar:shield-user-outline",
  //       id: uniqueId(),
  //       url: "/auth/register",
  //     },
  //   ],
  // },

];

export default SidebarContent;
