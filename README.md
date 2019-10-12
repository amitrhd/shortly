# shortly
Requirements Node.js 10.x, NPM 6.x, MongoDB 4.x, redis-server 5.x

# Installation Steps
1. Make a copy of config/env.example.json and rename it as config/env.json .
2. Put required credentials in env.json as per your environment. 
3. Install Node.js dependency using `npm install`
4. To run locally use start script `npm start`
5. For production setup, use pm2 process manager and and set cluster size according to your machine. `pm2 start app.js -i <cluster_size>`

# Testing 
Use `npm test` script to execute test cases. Make sure you run test and it passes before you raise pull request. 
