async function hello() {
    const {
        default: world
    } = await import(/* webpackChunkName: "world" */ './world.js');
    document.body.innerText = `hello ${world}`;
}

hello();
