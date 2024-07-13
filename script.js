function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        document.getElementById('results').innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;
        // Here you would typically call your search function or API
        // For demonstration, we'll just show a static result
        setTimeout(() => {
            document.getElementById('results').innerHTML += `<p>Results for: <strong>${query}</strong></p>`;
        }, 1000);
    } else {
        alert('Please enter a query!');
    }
}
