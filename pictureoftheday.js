
async function fetchPictureOfTheDay() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=FULiaWxW4GzEuCO96xawrhUC3Y4xx5DI5VLaUZ6n');
        const data = await response.json();
        return data.url; // Assuming the API returns an object with a 'url' property containing the image URL.
    } catch (error) {
        console.error('Error fetching picture of the day:', error);
        return null;
    }
}

async function displayPictureOfTheDay() {
    const pictureOfTheDayContainer = document.getElementById('picture-of-the-day');
    const imageUrl = await fetchPictureOfTheDay();

    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        pictureOfTheDayContainer.appendChild(imageElement);
    } else {
        pictureOfTheDayContainer.innerHTML = '<p>Failed to fetch the picture of the day.</p>';
    }
}

displayPictureOfTheDay();
