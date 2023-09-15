function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResults');
    const mainContent = document.getElementById('mainContent');

    const searchTerm = searchInput.value.trim();

    // Clear previous search results
    searchResultsContainer.innerHTML = '';

    // Get all the paragraphs on the current page
    const paragraphs = document.querySelectorAll('p');
    let hasSearchResults = false;

    // Iterate through paragraphs and check for the searchTerm (case-insensitive)
    paragraphs.forEach(paragraph => {
        const paragraphText = paragraph.textContent;

        // Convert paragraph text and search term to lowercase for comparison
        const lowerCaseParagraphText = paragraphText.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (lowerCaseParagraphText.includes(lowerCaseSearchTerm) && lowerCaseSearchTerm.length > 4) {
            // Create a result element for each matching paragraph
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<p>${paragraphText}</p>`;
            searchResultsContainer.appendChild(resultItem); // Append result to the searchResultsContainer
            hasSearchResults = true;
        }
    });

    // If search results are found, hide the main content
    if (hasSearchResults || searchTerm !== '') {
        mainContent.style.visibility = 'hidden';
    } else {
        // If no search results, show main content
        mainContent.style.visibility = 'visible';
        searchResultsContainer.innerHTML = '';
    }
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', performSearch);

// Event listener for input in the search bar
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', performSearch);
