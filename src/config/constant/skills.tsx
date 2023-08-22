import { BiLogoCPlusPlus } from "react-icons/bi";
import {
  BsDatabaseFillCheck,
  BsFillCloudLightningRainFill,
  BsFillInfoSquareFill,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineWebhook } from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

export const skills = [
  {
    title: "Python",
    icon: <FaPython />,
    description:
      "AWS, Digital Ocean, Google Cloud, Heroku, fly.io,Vercel, Python Anywhere",
  },
  {
    title: "Cloud Computing",
    icon: <BsFillCloudLightningRainFill />,
    description:
      "AWS, Digital Ocean, Google Cloud, Heroku, fly.io,Vercel, Python Anywhere",
  },
  {
    title: "DevOps | Source Control",
    icon: <VscAzureDevops />,
    description:
      "Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, Travis CI, Gitlab, Git, CodeDeploy, Bitbucket",
  },
  {
    title: "Databases",
    icon: <BsDatabaseFillCheck />,
    description: "PostgreSQL, Redis, MySQL, MSSQL, SQLite, RabbitMQ,",
  },
  {
    title: "Web Development",
    icon: <CgWebsite />,
    description:
      "Django, Flask, FastAPI, RESTful APIs, HTML, CSS, Javascript, Sanic",
  },
  {
    title: "General Web",
    icon: <MdOutlineWebhook />,
    description:
      "Websockets, Microservices, OAuth, Webhooks, Caddy Server, NGINX, Apache,",
  },
  {
    title: "InfoSec",
    icon: <BsFillInfoSquareFill />,
    description:
      "Cryptography, SSH, GPG, SFTP, Message Digests, Blockchain, Fernets",
  },
  {
    title: "Automation",
    icon: <TbSettingsAutomation />,
    description:
      "Selenium, Web Scraping, Regexes, Automated and Algorithmic trading",
  },
  {
    title: "Soft Skills",
    icon: <GiSkills />,
    description:
      "Communication, Comprehension & Learning abilities, Patience & Dedication, ",
  },
  {
    title: "Financial (FinTech)",
    icon: <GrTechnology />,
    description:
      "Collection & Processing of data, Analysis, Trade automations, Algo trading systems, ",
  },
  {
    title: "C | C++ | C#",
    icon: <BiLogoCPlusPlus />,
    description: "Data structures, Algorithms, OOP, Structs",
  },
  {
    title: "Process Control",
    icon: <RiRemoteControlLine />,
    description:
      "Systemd, Systemctl, Supervisord, Supervisorctl, Monit, init.d",
  },
  {
    title: "GoLang",
    icon: <FaGolang />,
    description: "Fundamentals, Goroutines, Primitives",
  },
];
