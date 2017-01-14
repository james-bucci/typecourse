
NODE TYPESCRIPT
install ts-node -D (to auto transpile and run .ts files)
add to package.json:
    "start": "./node_modules/.bin/ts-node ./server/server.ts",

SEQUALIZE
npm install sequelize -S
npm install @types/sequelize -D

EXPRESS
npm install express -S 
npm install @types/express -D
npm install @types/es

SECURITY 
never return an array of data (json injection / highjacking), wrap it in an object

HOT RELOADING OF SERVER
npm install nodemon -D
add to package.json:
    "watch": "./node_modules/.bin/nodemon -w . --ext \".ts\" --exec \"npm run start\""

TOOLS
install chrome extension JSONView
npm install human-readable-ids --save (used for console.error to identify errors for users)

TYPESCRIPT
TSCONFIG - noEmitOnError = true makes sure no JS is ggenerated if there are typescript errors.
npm install @types/bluebird -D

HTTP
remember to declar the rsjx/add/operator/map or you get a ZoneAweareError (possibly using the wrong.map function)