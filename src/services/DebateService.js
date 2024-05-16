var debId = null;
const DebateService = {
    createDebate: async (topic, affPrompt, negPrompt, whoStarts) => {
        var postBody = {
            topic: topic,
            aff_prompt: affPrompt,
            neg_prompt: negPrompt,
            who_starts: whoStarts
        }

        const response = await fetch('https://n09b4i2wd4.execute-api.ap-southeast-4.amazonaws.com/v1/debate-machine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        });

        const responseBody = await response.json();

        debId = responseBody.deb_id;

        return responseBody.response;
    },

    advanceDebate: async () => {
        var postBody = {
            deb_id: debId
        }

        const response = await fetch('https://n09b4i2wd4.execute-api.ap-southeast-4.amazonaws.com/v1/debate-machine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        });

        const responseBody = await response.json();

        return responseBody.response;
    }

};

export default DebateService;