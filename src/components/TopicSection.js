import React, { useState } from 'react';
import CreateOwnCard from './CreateOwnCard';
import TopicCard from './TopicCard';

const TopicSection = ({ initialTopic, onTopicChange }) => {
    const [showTopicCards, setShowTopicCards] = useState(true);

    const handleTopicSelection = (topic) => {
        setShowTopicCards(false);
        onTopicChange(topic);
    };

    return (
        <div className="topic-section">
            <h3 className="topic-label">Select a topic:</h3>
            {showTopicCards ? (
                <div className="topic-cards">
                    <CreateOwnCard onSelect={handleTopicSelection} />
                    <TopicCard topic="Social media platforms should be held accountable for the spread of misinformation." onSelect={handleTopicSelection} />
                    <TopicCard topic="Universal basic income (UBI) is a viable solution to economic inequality." onSelect={handleTopicSelection} />
                    <TopicCard topic="Genetic engineering should be allowed to enhance human capabilities." onSelect={handleTopicSelection} />
                    {/* Add more TopicCard components with other premade topics */}
                </div>
            ) : (
                <textarea
                    className='topic-textarea'
                    placeholder='Enter your own topic...'
                    value={initialTopic}
                    onChange={(e) => onTopicChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default TopicSection;
