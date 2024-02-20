function generateImage() {
    const imagePrompt = document.getElementById('imagePrompt').value;

    // We'll use "fetch" to make the API call (reusing DeepAI's example structure)
    fetch('https://api.deepai.org/api/text2img', { // The correct endpoint for image generation
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '78be5cfd-b8ba-486a-9a9b-6f473ecb489e' // Insert your actual DeepAI API key
        },
        body: JSON.stringify({ 
            text: imagePrompt,
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the image data returned
        const imageUrl = data.output_url; // Assuming API responds with image URL
        displayImage(imageUrl);
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors 
    });
}

function displayImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageContainer.appendChild(imageElement);
}
