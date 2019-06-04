import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div className="ui standard modal visible active">Modal Must be in a portal in React</div>
		</div>
	);
};

export default Modal;
