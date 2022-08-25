# Node Express with JWT Auth

This was created by following the JWT authentication tutorial on The Net Ninja Youtube channel [here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp).

Branch `backend-views` reaches the final point of the tutorial with conditional rendering and protected views (smoothie page is only accessible by logged in users.)

The main branch continues with attempts to connect the Express app with a React front end. Currently, the login and sign up work as intended, creating a JWT cookie in the browser. However, there is no conditional rendering or protected views. I'll hopefully come back to this after learning about authenticating for a MERN stack project.

## Running the Backend with Views

Run `npm install` in the server directory and create a `.env` file, using `.env_example` as a template. Run the server with `npm run dev` and open [localhost:5000](localhost:5000). 

## Running the front and back end

With the server running simultaneously and printed out "connected to db", run `npm install` in the client directory and `npm start` to start the React App on port 3000. 
