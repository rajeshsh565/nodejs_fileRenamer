import { readdirSync, statSync } from "fs";
import { extname, resolve } from "path";
import renamer from "./renamer.js";

const renameAll = (folderPath, header, extension) => {
  
  const getFiles = () => {
    const allFiles = readdirSync(folderPath, {
      withFileTypes: false,
    }); //array of all items inside each folder of given foldersDirectory
    return allFiles.filter((file) => statSync(resolve(folderPath,file)).isFile());
  }
  function generateRandomWord() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < 5; i++) {
      word += letters[Math.floor(Math.random() * letters.length)];
    }
    return word;
  }

  //rename initialize, rename randomly initially to avoid conflicting names
  const renameStarter = (rename) => {
    const initialFiles = getFiles();
    const randomHeader = generateRandomWord();
      rename(initialFiles, randomHeader);
      console.log("Renaming...");
      setTimeout(()=>{
        const finalFiles = getFiles();
        rename(finalFiles, header);
        console.log("Rename Complete");
      },5000);
  }

  //actual rename function
  const rename = (files, header) => {
    if (files.length < 10) {
      files.map((fileName, index) => {
        const footer = index + 1 + extension;
        renamer(folderPath, fileName, header + footer);
      });
    }
  
    if (files.length >= 10 && files.length < 100) {
      files.map((fileName, index) => {
        const footer = index + 1 + extension;
          if (String(index + 1).length < 2) {
            renamer(folderPath, fileName, header + "0" + footer);
          } else {
            renamer(folderPath, fileName, header + footer);
          }
      });
    }
  
    if (files.length >= 100 && files.length < 1000) {
      files.map((fileName, index) => {
        const footer = index + 1 + extension;
      if (String(index + 1).length < 2) {
        renamer(folderPath, fileName, header + "00" + footer);
      } else if (String(index + 1).length < 3) {
        renamer(folderPath, fileName, header + "0" + footer);
      } else {
        renamer(folderPath, fileName, header + footer);
      }
        });
    }
  }

  renameStarter(rename);
};

export default renameAll;
