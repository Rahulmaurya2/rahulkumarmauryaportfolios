// data/skills.ts

import ReactIcon from "../../../assets/icons/reactIcon.svg";
import TypescriptIcon from "../../../assets/icons/typescriptIcon.svg";
import NextJSIcon from "../../../assets/icons/nextjsIcon.svg";
import ReduxIcon from "../../../assets/icons/reduxIcon.svg";
import TailwindCSSIcon from "../../../assets/icons/tailwindcssIcon.svg";
import JavaScriptIcon from "../../../assets/icons/JavaScript.svg";
import HTMLCSSIcon from "../../../assets/icons/htmlIcon.svg";
import StyledComponentsIcon from "../../../assets/icons/CSS3.svg";
import NodeJs from "../../../assets/icons/Node.js.svg";
import JiraIcon from "../../../assets/icons/Jira.svg";
import SmartContractIcon from "../../../assets/icons/Solidity.svg";
import VsCodeIcon from "../../../assets/icons/Visual Studio Code (VS Code).svg";
import WebSocketIcon from "../../../assets/icons/Socket.io.svg";
import JestIcon from "../../../assets/icons/Jest.svg";
import PostManIcon from "../../../assets/icons/Postman.svg";

// data/skills.ts

import type { FC, SVGProps } from "react";

export interface Skill {
  id: number;
  name: string;
  image: string | FC<SVGProps<SVGSVGElement>>; // string path or React SVG
  usedIn: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    image: JavaScriptIcon,
    usedIn: "Software development, Web3 integration, Frontend development",
  },
  {
    id: 2,
    name: "TypeScript",
    image: TypescriptIcon,
    usedIn: "Software development, Web3 integration, Frontend development",
  },
  {
    id: 3,
    name: "React.js (Vite)",
    image: ReactIcon,
    usedIn: "Frontend development, Component library",
  },
  {
    id: 4,
    name: "React Native",
    image: ReactIcon,
    usedIn: "Mobile development",
  },
  {
    id: 5,
    name: "Next.js",
    image: NextJSIcon,
    usedIn: "SSR, SEO optimization, MarketPlace",
  },
  {
    id: 6,
    name: "HTML & CSS",
    image: HTMLCSSIcon,
    usedIn: "Common for all",
  },
  {
    id: 7,
    name: "Styled Components",
    image: StyledComponentsIcon,
    usedIn: "Dynamic styling, Theming, Responsive design",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    image: TailwindCSSIcon,
    usedIn: "UI Design, Responsive layouts",
  },
  {
    id: 10,
    name: "Smart Contract",
    image: SmartContractIcon,
    usedIn: "Smart contract integration, Wallet Auth",
  },
  {
    id: 11,
    name: "Node.js",
    image: NodeJs,
    usedIn: "Familiarity with backend integration, API development",
  },
  {
    id: 12,
    name: "Redux",
    image: ReduxIcon,
    usedIn: "Global State Management",
  },
  {
    id: 13,
    name: "Jest",
    image: JestIcon,
    usedIn: "Unit tests for utility functions",
  },
  {
    id: 14,
    name: "WebSocket",
    image: WebSocketIcon,
    usedIn: "Realtime mint count , Subscription status",
  },
  {
    id: 15,
    name: "Postman",
    image: PostManIcon,
    usedIn: "API testing and validation",
  },
  {
    id: 16,
    name: "VSCode",
    image: VsCodeIcon,
    usedIn: "All Development Environments",
  },
  {
    id: 17,
    name: "Jira",
    image: JiraIcon,
    usedIn: "Agile sprint planning and ticket tracking",
  },
];
