1. Install dependencies in command line
   ```
   npm install
   ```
2. run server in command line (assuming you have node.js application installed on your computer)
   ```
   node app
   ```
3. Description of existing APIs:

 - GET  http://127.0.0.1:3000/ or http://localhost:3000/

 - GET  http://127.0.0.1:3000/login or http://localhost:3000/login

 - POST http://127.0.0.1:3000/login or http://localhost:3000/login
 ```
    Content-Type: 'application/json'
    Body: {
           "username": "test",
           "password": "123456"
          }
```

