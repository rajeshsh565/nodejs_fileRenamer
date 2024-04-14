import { extname, join } from "path";
import { readdirSync, statSync } from "fs";
import renameAll from "./renameLogic.js";

const dig = (items, itemsPath, header, extension) => {
  items.map((item) => {
    const stat = statSync(join(itemsPath, item));
    if(stat.isDirectory()){
         const items = readdirSync(join(itemsPath, item), {
           withFileTypes: false,
         });
         dig(items, join(itemsPath,item), header, extension);
    }
  });
  renameAll(itemsPath, header, extension);
};

export default dig;
