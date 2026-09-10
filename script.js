try {
    let name = "Hello world";
    let b = 10;

    if (b == 0) {
        throw new Error("Zero error");
    }
    console.log(name);
    console.log(c);
}
catch (error) {
    console.log(error.message);
}
finally {
    console.log("Java Script is completed");
    console.log("King is none")
}