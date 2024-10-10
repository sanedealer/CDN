// pingWorker.js
let pingInterval;

self.onmessage = function(event) {
    if (event.data.action === 'start') {
        const { interval } = event.data;
        pingInterval = setInterval(() => {
            self.postMessage({ type: 'ping' });
        }, interval);
    } else if (event.data.action === 'stop') {
        clearInterval(pingInterval);
    }
};
