This repository has been created as an example for documenting a [simple-signal](https://github.com/t-mullen/simple-signal) issue [12](https://github.com/t-mullen/simple-signal/issues/12), it has no other purpose.

To reproduce the issue follow this steps:

- `npm install` both on the root folder and the `./client` folder.
- Execute `npm run start-server` and `npm run start-client` on different terminal sessions.
- Open `localhost:3000` on two or more different tabs.
- You'll see a list containing the id's of all the connected peers.
- Restart the server by killing the process and run `npm run start-server` again.

You'll observe:

That the peer id's will increase on every server restart.