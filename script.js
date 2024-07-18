let userMessage;
const API_KEY ="sk-None-9WCY9uZaAMuIe9rAuKLyT3BlbkFJOl8s6p8doIaZzHCUC2M2";
const API_URL="https://api.openai.com/v1/chat/completions";
const generateResponse = (userMessage) => {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    "model": "gpt-4",
                    "messages": [
                        {
                            "role": "system",
                            "content": "You are a helpful assistant."
                        },
                        {
                            "role": "user",
                            "content": userMessage
                        }
                    ]
                })
            };

            fetch(API_URL, requestOptions)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    document.getElementById('results').innerHTML += `<p>Response: ${data.choices[0].message.content}</p>`;
                })
                .catch((error) => {
                    console.log(error);
                    document.getElementById('results').innerHTML += `<p>Error: ${error.message}</p>`;
                });
        };

        function performSearch() {
            const query = document.getElementById('search-input').value;
            
            if (query) {
                document.getElementById('results').innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
                generateResponse(query);
            } else {
                alert('Please enter a query!');
            }
        }
        document.getElementById('search-input').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
