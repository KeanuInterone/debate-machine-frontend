import React from 'react';

const WhoStartsSection = ({ onButtonClick }) => {
    const handleButtonClick = (side) => {
        onButtonClick(side);
    };

    return (
        <div className="who-starts-section">
            <button className="start-button aff-style" onClick={() => handleButtonClick('affirmative')}>
                Affirmative Starts
            </button>
            <button className="start-button neg-style" onClick={() => handleButtonClick('negative')}>
                Negative Starts
            </button>
        </div>
    );
};

export default WhoStartsSection;
