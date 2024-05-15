var debId = null;
const DebateService = {
    createDebate: async (topic, affPrompt, negPrompt, whoStarts) => {
        var postBody = {
            topic: topic,
            aff_prompt: affPrompt,
            neg_prompt: negPrompt,
            who_starts: whoStarts
        }

        // const response = await fetch('https://ovtuu968q1.execute-api.us-east-2.amazonaws.com/v1/ssd-chatbot', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(postBody)
        // });

        // const responseBody = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const responseBody = {
            deb_id: "12345",
            first_message: {
                name: "Affirmative",
                message: "I am the affirmative side. and I aggree with the topic",
            }
        }

        debId = responseBody.deb_id;

        return responseBody.first_message;
    },

    advanceDebate: async () => {
        var postBody = {
            deb_id: debId
        }

        // const response = await fetch('https://ovtuu968q1.execute-api.us-east-2.amazonaws.com/v1/ssd-chatbot', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(postBody)
        // });

        // const responseBody = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const responseBody = {
            next_message: {
                name: "Negative",
                message: "I am the negative side. and I dissagree with the topic",
            }
        }

        return responseBody.next_message;
    }

};

export default DebateService;