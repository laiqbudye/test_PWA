if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(res => {
            console.log("Service Worker Registered!!!");
            console.log(res);
        })
        .catch(err => {
            console.log("Service Worker Registeration failed");
            console.log(err);
        })
} else {
    console.log("App is not supported")
}