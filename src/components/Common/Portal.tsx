import { Component } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');

interface PortalProps {
  children: React.ReactNode;
}

class Portal extends Component<PortalProps> {
  el: HTMLDivElement;
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
