import React, { useState } from 'react';

const PromptCard = ({ title, initialPrompt, onChange }) => {
    const [expanded, setExpanded] = useState(false);
    const [prompt, setPrompt] = useState(initialPrompt);

    const handlePromptChange = (e) => {
        const newPrompt = e.target.value;
        setPrompt(newPrompt);
        onChange(newPrompt);
    };
    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`prompt-card ${expanded ? 'expanded' : ''}`}>
            <div className={`card-header ${title === 'Affirmative Prompt' ? 'aff-style' : 'neg-style'}`} onClick={handleCardClick}>
                <h4>{title}</h4>
                <div className={`arrow ${expanded ? 'expanded' : ''}`}>&#9660;</div>
            </div>
            <textarea
                className={`prompt-textarea ${expanded ? 'expanded' : ''}`}
                placeholder="Enter prompt..."
                value={prompt}
                onChange={handlePromptChange}
            />
        </div>
    );
};

export default PromptCard;