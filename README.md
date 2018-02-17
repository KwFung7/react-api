## Start app

### `cd ~/mongo/bin && ./mongod --dbpath ~/mongo-data`
  - start database server

### `yarn install`

### `yarn start`
  - simultaneously start backend server and frontend admin
  - port 5000 for server
  - port 3000 for admin interface, developed with create react app


## Testing

### `yarn test`

### `yarn watch-test`
  - test with nodemon hotloader


## Deployment

### `Set start script in package.json`

### `Set engines in package.json`
- specify which node version used, so heroku follow it

### `Heroku create app, add addons e.g. mLab, get DB url`
- `heroku login`
- `heroku create`, create app
- `heroku addons:create mongolab:sandbox`
- `heroku config`, show mongodb url