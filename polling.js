// pingWorker.js
self.onmessage = function (e) {
    const { interval } = e.data;

    const sendPing = () => {
        postMessage('ping');
    };

    // Start sending pings at regular intervals
    setInterval(sendPing, interval);
};
