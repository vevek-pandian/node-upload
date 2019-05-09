function route(handlers, pathname) {
    console.log("You are inside the router " + pathname);

    if(typeof handlers[pathname] === 'function') {
        return handlers[pathname]();
    }
    else {
        console.log("No request handlers " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;