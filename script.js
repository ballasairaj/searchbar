let userMessage;
const API_KEY ="sk-None-9WCY9uZaAMuIe9rAuKLyT3BlbkFJOl8s6p8doIaZzHCUC2M2";

const generateResponse =() => {
    const API_URL="https://api.openai.com/v1/chat/completions";
    const requstOptions ={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-4o",
            "messages": [
              {
                "role": "system",
                "content": "You are a helpful assistant."
              },
              {
                "role": "user",
                "content": "userMessage"
              }
            ]
        })
    }
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data);

    }).catch((error) =>{
        console.log(error);
    })
}
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        document.getElementById('results').innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
        // Here you would typically call your search function or API
        
        // generateResponse()
        setTimeout(() => {
            document.getElementById('results').innerHTML += `<p>Results for: <strong>${query}</strong></p>`;
        }, 1000);
    } else {
        alert('Please enter a query!');
    }
}
