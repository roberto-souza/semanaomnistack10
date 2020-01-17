import socketio from "socket.io-client";

import { API_URL } from "../constants";

const socket = socketio(API_URL, { autoConnect: false });

function connect(latitude, longitude, techs) {
  socket.io.opts.query = { latitude, longitude, techs };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect;
  }
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on("new-dev", subscribeFunction);
}

export { connect, disconnect, subscribeToNewDevs };
