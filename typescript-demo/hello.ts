async function hello() {
    const {
        default: world
    } = await import(/* webpackChunkName: "world" */ "./world");
    document.body.innerText = `hello ${world}`;
}

hello();
