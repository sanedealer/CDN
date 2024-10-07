// This is the code for your Web Worker.
setInterval(() => {
    // Send a message back to the main thread every 5 seconds
    self.postMessage({ message: 'Ping', timestamp: Date.now() });
}, 3000);
