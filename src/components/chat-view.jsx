import React from 'react';

import MessageView from './message-view';

const ChatView = ({ messageNodes }) => {
    return (
        <div style={{ margin: "16px", width: "60%" }}>
            {messageNodes.map(node => {
                return (
                    <MessageView email={node.email} messages={node.messages} />
                )
            })}

        </div>
    )
}

export default ChatView
