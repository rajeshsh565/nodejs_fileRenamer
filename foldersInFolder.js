import { readdirSync } from "fs";
import { resolve } from "path";
import dig from "./logic/folderDig.js";

const foldersDirectory = "path_goes_here"; //path of folder which contains all folders,use "\\" between folders
const extension = ".jpg"; //extension for new files
const name = "img";
const seperator = "-";
const header = name + seperator;

const items = readdirSync(resolve(foldersDirectory), {
  withFileTypes: false,
});  //array of folders with all the folders inside foldersDirectory.

dig(items, resolve(foldersDirectory), header, extension);