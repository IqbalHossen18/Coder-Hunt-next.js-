//http://localhost:3000/api/getblog

import fs from 'fs';
export default async function handler(req, res) {
      let data = await fs.promises.readdir('blogdata');
      // console.log(data)
      let myfile;
      let allblogs = [];
      for(let i = 0; i< data.length; i++){
        const item = data[i];
        // console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' +item), 'utf-8');
        // console.log( typeof myfile)

        allblogs.push(JSON.parse(myfile))
      }
      res.status(200).json(allblogs)
  }
  