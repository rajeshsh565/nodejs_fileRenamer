import { join } from 'path';
import mv from 'mv';
import { exit } from 'process';
const renamer = (folderPath, oldName, newName) =>{
     mv(join(folderPath, oldName), join(folderPath, newName), {clobber:false}, (err)=>{
          if(err){
               console.log(err);
          }
     })
}

export default renamer;