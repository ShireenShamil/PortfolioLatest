// Top-level and category icons
import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';

import frontend_icon from './frontend_icon.png';
import backend_icon from './backend_icon.png';
import database_icon from './database_icon.png';
import tools_icon from './tools_icon.png';

// Tech-specific icons for detailed dialog
import html_icon from './html-icon.png';
import css_icon from './css-icon.png';
import js_icon from './js-icon.png';
import react_icon from './react-icon.png';
import next_icon from './next-icon.png';
import tailwind_icon from './tailwind-icon.png';
import bootstrap_icon from './bootstrap-icon.png';
import node_icon from './node-icon.png';
import express_icon from './express-icon.png';
import mongodb from './mongodb.png';       // already existed
import git from './git.png';               // already existed
import figma from './figma.png';           // already existed
import vscode from './vscode.png';         // already existed
import firebase from './firebase.png';     // ✅ ADDED this missing import

// Other existing UI & service icons
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';

// Other utility icons
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,

  frontend_icon,
  backend_icon,
  database_icon,
  tools_icon,

  html_icon,
  css_icon,
  js_icon,
  react_icon,
  next_icon,
  tailwind_icon,
  bootstrap_icon,
  node_icon,
  express_icon,

  mongodb,
  git,
  figma,
  vscode,
  firebase,    // ✅ included here

  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,

  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
  { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
  { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
  { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' },
];

export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual...', link: '' },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Technologies',
    description: 'HTML, CSS, JavaScript, React Js, Next Js',
    more: {
      Frontend: {
        icon: assets.frontend_icon,
        items: [
          { name: 'HTML', icon: assets.html_icon },
          { name: 'CSS', icon: assets.css_icon },
          { name: 'JavaScript', icon: assets.js_icon },
          { name: 'React.js', icon: assets.react_icon },
          { name: 'Next.js', icon: assets.next_icon },
          { name: 'Tailwind CSS', icon: assets.tailwind_icon },
          { name: 'Bootstrap', icon: assets.bootstrap_icon },
        ],
      },
      Backend: {
        icon: assets.backend_icon,
        items: [
          { name: 'Node.js', icon: assets.node_icon },
          { name: 'Express.js', icon: assets.express_icon },
        ],
      },
      Database: {
        icon: assets.database_icon,
        items: [
          { name: 'MongoDB', icon: assets.mongodb },
        ],
      },
      Tools: {
        icon: assets.tools_icon,
        items: [
          { name: 'Git', icon: assets.git },
          { name: 'Figma', icon: assets.figma },
          { name: 'VS Code', icon: assets.vscode },
        ],
      },
    },
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'B.Tech in Computer Science',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 5 projects',
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
