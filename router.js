function route(handler, pathname) {
    console.log("You are inside the router " + pathname);

    if(typeof handler[pathname] === 'function') {
        return handler[pathname]();
    }
    else {
        console.log("No request handlers " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;