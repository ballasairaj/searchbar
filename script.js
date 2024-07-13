function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        document.getElementById('results').innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
        //  call your search function or API
        
        setTimeout(() => {
            document.getElementById('results').innerHTML += `<p>Results for: <strong>${query}</strong></p>`;
        }, 1000);
    } else {
        alert('Please enter a query!');
    }
}
