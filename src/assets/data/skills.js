import importAll from "utils/importAll";
const images = importAll(require.context("/src/assets/images/skills/"));

const skills = {
  frontend: [
    {
      id: 1,
      image: images[0],
      title: "HTML",
    },
    {
      id: 2,
      image: images[1],
      title: "CSS",
    },
    {
      id: 3,
      image: images[2],
      title: "Tailwind",
    },
    {
      id: 4,
      image: images[3],
      title: "JavaScript",
    },
    {
      id: 5,
      image: images[4],
      title: "React.js",
    },
    {
      id: 6,
      image: images[5],
      title: "Redux.js",
    },
  ],
  backend: [
    {
      id: 1,
      image: images[6],
      title: "Node.js",
    },
    {
      id: 2,
      image: images[7],
      title: "Express.js",
    },
    {
      id: 3,
      image: images[8],
      title: "Python",
    },
    {
      id: 4,
      image: images[9],
      title: "FastAPI",
    },
    {
      id: 5,
      image: images[10],
      title: "Deno.js",
    },
    {
      id: 6,
      image: images[11],
      title: "Koa.js",
    },
  ],
  database: [
    {
      id: 1,
      image: images[12],
      title: "MySQL",
    },
    {
      id: 2,
      image: images[13],
      title: "MongoDB",
    },
    {
      id: 3,
      image: images[14],
      title: "Mongoose",
    },
    {
      id: 4,
      image: images[15],
      title: "Firebase",
    },
    {
      id: 4,
      image: images[16],
      title: "Redis",
    },
  ],
  tools: [
    {
      id: 1,
      image: images[17],
      title: "Git",
    },
    {
      id: 2,
      image: images[18],
      title: "CLI",
    },
    {
      id: 3,
      image: images[19],
      title: "VS Code",
    },
    {
      id: 4,
      image: images[20],
      title: "Postman",
    },
    {
      id: 5,
      image: images[21],
      title: "Vite",
    },
    {
      id: 6,
      image: images[22],
      title: "NPM",
    },
  ],
};

export default skills;
