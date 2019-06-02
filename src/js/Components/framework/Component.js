export default class Component {
    constructor(host) {
        this.host = host;
        this.render();
    }
    render() {
        this.host.innerHTML = "";
    }
}