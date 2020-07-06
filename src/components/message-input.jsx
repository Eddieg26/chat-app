import React, { useState } from 'react';

import '../bulma.min.css';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChangeMessage = event => {
        setMessage(event.target.value);
    }

    const handleSendMessage = () => {
        if (message.length === 0) { return; }

        onSendMessage('edde@gmail.com', message);
    }

    return (
        <div style={{ display: "flex", justifyContent: "flex-start", }}>
            <input name="message" type="text" value={message} onChange={handleChangeMessage} />
            <button className="button is-primary" onClick={() => handleSendMessage()}>Send</button>
        </div>
    )
}

export default MessageInput;
