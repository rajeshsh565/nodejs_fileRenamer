import renameAll from "./logic/renameLogic.js";
import { resolve } from "path";

const contentFolder = "path_goes_here"; // path of folder which contains all items, use "\\" between folders
const extension = ".jpg"; //extension for new files
const name = "img"; //new name
const seperator = "_"; //seperator to put in between name and numbering;
const header = name + seperator;

renameAll(resolve(contentFolder), header, extension);
