import React from 'react';

const TopicCard = ({ topic, onSelect }) => {
    const handleSelect = () => {
        onSelect(topic);
    };

    return (
        <div className="topic-card" onClick={handleSelect}>
            {topic}
        </div>
    );
};

export default TopicCard;
