import React from 'react';
import { marked } from 'marked'

const Message = ({ name, message }) => {

    const htmlContent = marked.parse(message);

    return (
        <div className="message">
            <div className="message-header">
                <div className={`profile-picture ${name === "Affirmative" ? 'aff-style' : 'neg-style'}`}>
                    {name === "Affirmative" ? 'A' : 'N'}
                </div>
                <div className="name">
                    <h4>{name}</h4>
                </div>
            </div>
            <div className="message-content">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    );
};

export default Message;
