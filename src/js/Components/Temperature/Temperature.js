import Component from "../framework/Component";
export default class Temperature extends Component {
constructor(host) {
        super(host);
    }

    render() {
        this.host.innerHTML = 'T??e';
    }
}