

import fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      // Send a 500 status response for the error
      res.status(500).json('An error occurred while reading the data.');
      return; // Exit the function to prevent further execution
    }

    // Send a 200 status response with the JSON data
    res.status(200).json(JSON.parse(data));
  });
}
