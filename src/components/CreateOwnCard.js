import React from 'react';

const CreateOwnCard = ({ onSelect }) => {
    const handleSelect = () => {
        onSelect("");
    };

    return (
        <div className="topic-card" onClick={handleSelect}>
            Create your own topic!
        </div>
    );
};

export default CreateOwnCard;
