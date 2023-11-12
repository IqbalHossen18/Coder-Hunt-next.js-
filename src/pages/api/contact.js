import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
     const data = await fs.promises.readdir('contactdata');
         fs.promises.writeFile((`contactdata/${data.length + 1}.json`), JSON.stringify(req.body));
    res.status(200).json({message:'Contact data submited successfully'})
    } else {
      res.status(500).json({message:'Not Allowed'})
    }
  }