import React from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const MessageSection = ({ messages, isLoading }) => {
    return (
        <div className="message-section">
            {messages.map((msg, index) => (
                <Message key={index} name={msg.name} message={msg.message} />
            ))}
            {isLoading && <TypingIndicator />}
        </div>
    );
};

export default MessageSection;
