import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import TopicSection from './components/TopicSection';
import PromptCard from './components/PromptCard';
import WhoStartsSection from './components/WhoStartsSection';
import DebateService from './services/DebateService';
import MessageSection from './components/MessageSection';
import AdvanceDebateButton from './components/AdvanceDebateButton';
import './App.css';

function App() {

    const [topic, setTopic] = useState('');
    const [affirmativePrompt, setAffirmativePrompt] = useState('You are a debater who has to argue in favor of a topic.');
    const [negativePrompt, setNegativePrompt] = useState('You are a debater who has to argue against a topic.');
    const [showsWhoStarts, setShowsWhoStarts] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [conversationStarted, setConversationStarted] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (conversationStarted) {
            scrollToBottom();
        }
    }, [isLoading]);

    const handleTopicChange = (newTopic) => {
        if (newTopic === '') {
            setShowsWhoStarts(false);
        } else {
            setShowsWhoStarts(true);
        }
        setTopic(newTopic);
    }
    const handleAffirmativeChange = (newPrompt) => {
        setAffirmativePrompt(newPrompt);
    }
    const handleNegativeChange = (newPrompt) => {
        setNegativePrompt(newPrompt);
    }
    const handleWhoStartsClick = async (whoStarts) => {
        if (topic === '' || affirmativePrompt === '' || negativePrompt === '') {
            return;
        }
        setConversationStarted(true);
        setShowsWhoStarts(false);
        setIsLoading(true);
        const firstMessage = await DebateService.createDebate(topic, affirmativePrompt, negativePrompt, whoStarts);
        setIsLoading(false);
        setMessages([firstMessage]);
    }
    const handleAdvanceDebateClick = async () => {
        setIsLoading(true);
        const newMessage = await DebateService.advanceDebate();
        setIsLoading(false);
        setMessages([...messages, newMessage]);
    }

    return (
        <div className="app">
            <Header />
            <TopicSection initialTopic={topic} onTopicChange={handleTopicChange} />
            <h3>Prompts:</h3>
            <PromptCard title="Affirmative Prompt" initialPrompt={affirmativePrompt} onChange={handleAffirmativeChange} />
            <PromptCard title="Negative Prompt" initialPrompt={negativePrompt} onChange={handleNegativeChange} />
            {showsWhoStarts && (
                <div>
                    <h3>Who starts:</h3>
                    <WhoStartsSection onButtonClick={handleWhoStartsClick} />
                </div>
            )}
            <MessageSection messages={messages} isLoading={isLoading} />
            {(messages.length > 0 && !isLoading) && (
                <AdvanceDebateButton onClick={handleAdvanceDebateClick} />
            )}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default App;
