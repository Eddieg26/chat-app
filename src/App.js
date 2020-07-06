import React, { useState, useEffect } from 'react';

import MessageInput from './components/message-input';
import ChatView from './components/chat-view';

import { mockMessages } from './mock-messagses';

import './bulma.min.css';

function App() {
    const [messageNodes, setMessageNodes] = useState([{ email: 'eddie@gmail.com', messages: [{ text: 'Hello', timestamp: Date.now }], },]);

    useEffect(() => {
        const interval = setInterval(() => {
            let randomMessage = Math.random() * (mockMessages.length - 1);
            const message = mockMessages[Number.parseInt(randomMessage)];
            onAddMessage(message.email, message.message);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const onAddMessage = (email, message) => {

        const newMessage = { text: message, timestamp: Date.now };
        let lastMessageNode = { ...messageNodes[messageNodes.length - 1] };
        if (lastMessageNode.email === email) {
            let newMessages = [...messageNodes];
            lastMessageNode.messages.push(newMessage);
            newMessages[messageNodes.length - 1] = lastMessageNode;
            setMessageNodes([...newMessages]);
        } else {
            setMessageNodes([...messageNodes, { email, messages: [newMessage] }])
        }
    };

    return (
        <div>
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '16px',
                    }}
                >
                    <ChatView messageNodes={messageNodes} />
                    <MessageInput onSendMessage={onAddMessage} />
                </div>
            </div>
        </div>
    );
}

export default App;
