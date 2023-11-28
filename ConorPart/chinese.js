// Function to be called when the "Menu" button is clicked
function LoadChinese() {
    // Step 1: Fetch the JSON file
    fetch('Food.json')
        .then(response => response.json()) // Step 2: Parse JSON data
        .then(data => {
            // Step 3: Retrieve and display information for Chinese restaurant
            const chineseRestaurant = data.chinese;
            displayInfo(chineseRestaurant);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayInfo(chineseRestaurant) {
    const outputElement = document.getElementById('output');

    // Clear previous content
    outputElement.innerHTML = '';

    // Display restaurant type
    outputElement.innerHTML += `<h2>Chinese Restaurant</h2>`;

    // Display details
    outputElement.innerHTML += `<p>Type: ${chineseRestaurant.type}</p>`;
    outputElement.innerHTML += `<p>Distance: ${chineseRestaurant.detail.distance}</p>`;
    outputElement.innerHTML += `<p>Location: ${chineseRestaurant.detail.location}</p>`;
    outputElement.innerHTML += `<p>Delivery Cost: ${chineseRestaurant.detail.delivery}</p>`;

    // Display menu
    outputElement.innerHTML += '<h3>Menu:</h3>';
    if (chineseRestaurant.menu) {
        for (const category in chineseRestaurant.menu) {
            if (chineseRestaurant.menu.hasOwnProperty(category)) {
                outputElement.innerHTML += `<div class="menu-category"><h4>${category}</h4>`;
                for (const item of chineseRestaurant.menu[category]) {
                    outputElement.innerHTML += `<div class="menu-item">
                        <img src="${item[0].toLowerCase()}.jpg" alt="${item[0]}">
                        <p>${item[0]}: €${item[1]}</p>
                    </div>`;
                }
                outputElement.innerHTML += `</div>`;
            }
        }
    }

    // Show the menu container
    outputElement.style.display = 'block';
}
