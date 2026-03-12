const driversLocations = {}; // in-memory store (can move to Redis for scalability)

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Driver connected:", socket.id);

    // Receive location updates from drivers
    socket.on("locationUpdate", (data) => {
      // data: { driverId, lat, lng, status }
      driversLocations[data.driverId] = {
        lat: data.lat,
        lng: data.lng,
        status: data.status || "available",
        socketId: socket.id,
        timestamp: new Date()
      };

      // Broadcast to dashboard (all connected clients)
      io.emit("driverLocation", driversLocations);
    });

    // Handle driver disconnect
    socket.on("disconnect", () => {
      console.log("Driver disconnected:", socket.id);
      // Remove driver from in-memory locations
      for (const driverId in driversLocations) {
        if (driversLocations[driverId].socketId === socket.id) {
          delete driversLocations[driverId];
        }
      }
      io.emit("driverLocation", driversLocations);
    });
  });
};