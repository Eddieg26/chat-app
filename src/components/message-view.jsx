import React from 'react';
import '../bulma.min.css';

const MessageView = ({ email, messages }) => {

    const MessageElement = ({ isLast, text, timestamp }) => {
        return (
            <div style={{ display: 'flex', justifyContent: email === 'eddie@gmail.com' ? "flex-start" : "flex-end", margin: "8px" }}>
                {email === 'eddie@gmail.com' ?
                    <>
                        {isLast && <figure className="image is-32x32">
                            <img src={`https://i.pravatar.cc/150?u=${email}`} alt="" />
                        </figure>}
                        <div className="box">
                            <div className="content">
                                <p>{text}</p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="box">
                            <div className="content">
                                <p>{text}</p>
                            </div>
                        </div>
                        {isLast && <figure className="image is-32x32">
                            <img src={`https://i.pravatar.cc/150?u=${email}`} alt="" />
                        </figure>}
                    </>
                }
            </div>)
    }


    const getMessageElements = () => {
        return messages.map((message, index) => {
            return (
                <MessageElement isLast={index === messages.length - 1} text={message.text} />
            )
        });
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", margin: "16px" }}>
            {getMessageElements()}

        </div>
    )
}

export default MessageView
