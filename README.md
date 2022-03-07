# nerdle-demo

## Design Discussions of Nerdle Game can be accessed from here https://docs.google.com/spreadsheets/d/1pSfisRUdTh8zxvMDvlRiQWuyUG-KHTyqhQAn5QfVZm0/edit?usp=sharing as well as you may find in same git repo https://github.com/krishna-chandra/nerdle-demo/blob/main/Nerdle%20-%20Design%20Document.xlsx


React frontend code is in frontend folder, app runs on port 3000 on development mode
`npm run build` command used to generated production build of react app.

First run npm install for the first time only, if want to run react app in development mode and then `npm start`

Backend Nodejs code is in backend folder, run npm install for the first time.
The `node app.js` or `nodemon` command to run the server, app runs on port 8080 default, port can be configured through .env file port variable, located at the root of the backend folder.

Define the equation in `gameconfig.json` file, it stores json object, where key is the number of colums and value is the equation, as shown in below image

Open browser on localhost:8080, the app is served at root path, the react app production build code is in build folder.

