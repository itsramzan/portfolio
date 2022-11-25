import importAll from "utils/importAll";
const images = importAll(require.context("/src/assets/images/clients/"));

const clients = [
  {
    id: 1,
    name: "Montaha Era",
    avatar: images[0],
    job: "Web designer",
    says:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam quaerat debitis maxime, perferendis qui tempore corporis sunt voluptatibus, quasi iste. Sunt illum cum quidem quis libero iure magni ea!",
  },
  {
    id: 2,
    name: "Rahul Ahmed",
    avatar: images[1],
    job: "Web developer",
    says:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam quaerat debitis maxime, perferendis qui tempore corporis sunt voluptatibus, quasi iste. Sunt illum cum quidem quis libero iure magni ea!",
  },
  {
    id: 3,
    name: "Rimon Ahmed",
    avatar: images[2],
    job: "CEO",
    says:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam quaerat debitis maxime, perferendis qui tempore corporis sunt voluptatibus, quasi iste. Sunt illum cum quidem quis libero iure magni ea!",
  },
  {
    id: 4,
    name: "Noushin Setu",
    avatar: images[3],
    job: "UX/UI designer",
    says:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam quaerat debitis maxime, perferendis qui tempore corporis sunt voluptatibus, quasi iste. Sunt illum cum quidem quis libero iure magni ea!",
  },
  {
    id: 5,
    name: "Shuvo",
    avatar: images[4],
    job: "Backend developer",
    says:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam quaerat debitis maxime, perferendis qui tempore corporis sunt voluptatibus, quasi iste. Sunt illum cum quidem quis libero iure magni ea!",
  },
];

export default clients;
