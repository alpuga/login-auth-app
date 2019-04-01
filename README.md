# Login Auth MERN Application

<img src="https://user-images.githubusercontent.com/37851662/55364499-e1274280-54ae-11e9-81ab-a2c62f5a9f9d.gif" alt="alt text">

Login/Register page using passport and JWTs for authentication.

## Installing

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:8080 and client on http://localhost:3000
```

## Built With

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make a `.env` file where you will store your secret information like
your `MONGO_URI` and your `SECRETORKEY` and any other sensitive information.

Make sure to add your own `MONGO_URI` from your [mLab](http://mlab.com) database in `.env`.

```
MONGO_URI=mongodb://<dbuser>:<dbpassword>@dsXXXXXX.mlab.com:XXXXX/database
```

Also add your `SECRETORKEY` to your `.env`

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License
