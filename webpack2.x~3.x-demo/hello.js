async function hello() {
    const {
        default: world
    } = await import(/* webpackChunkName: "world" */ './world.js');
    const env = 'dev'
    const config = await import(/* webpackMode: "lazy-once", webpackChunkName: "config" */`./config/${env}.json`);
    document.body.innerText = `hello ${world} env: ${config.env}`;
}

hello();
