// comes under public file
let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                'http://localhost:3000/favicon.ico',
                '/img/my.png',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
                '/static/js/bootstrap.min.js',
                '/static/js/vendors~main.chunk.js',
                '/index.html',
                '/',
                "/about",
                "/user-list"
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)

    if(!navigator.onLine){

        // if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
        //     event.waitUntil(
        //         this.registration.showNotification("Internet", {
        //             body: "internet not working",
        //         })
        //     )
        // }

        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }

   


    // if (!navigator.onLine) {
    //     if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
    //         event.waitUntil(
    //             this.registration.showNotification("Internet", {
    //                 body: "internet not working",
    //             })
    //         )
    //     }
    //     event.respondWith(
    //         caches.match(event.request).then((resp) => {
    //             if (resp) {
    //                 return resp
    //             }
    //             let requestUrl = event.request.clone();
    //             fetch(requestUrl)
    //         })
    //     )
    // }
}) 
