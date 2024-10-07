// This is the code for your Web Worker.
setInterval(() => {
    // Send a message back to the main thread every 1 second
    self.postMessage({ message: 'Ping', timestamp: Date.now() });
}, 1000);
