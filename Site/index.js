import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PixlrBgResult1 from "./PixlrBgResult1/PixlrBgResult1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  PixlrBgResult1: new PixlrBgResult1({
    x: 130,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
