// // Get NASA API key from https://api.nasa.gov/
// const apiKey = "rMprJGU4ScaObfb3FDbQo03wpHkzPFCfXqhTXbiR";

// // Function to fetch the image of the day for the current date
// function getCurrentImageOfTheDay() {
// 	const currentDate = new Date().toISOString().split("T")[0];
// 	const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

// 	fetchImageData(apiUrl);
// }

// // Function to fetch the image of the day for the selected date
// function getImageOfTheDay(selectedDate) {
// 	const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;

// 	fetchImageData(apiUrl);
// }

// // Function to fetch image data from the NASA API and display it
// function fetchImageData(apiUrl) {
// 	fetch(apiUrl)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			displayImageData(data);
// 			saveSearch(data.date);
// 		})
// 		.catch((error) => {
// 			console.error("Error fetching data:", error);
// 		});
// }

// // Function to save a date to local storage
// function saveSearch(searchDate) {
// 	const searches = JSON.parse(localStorage.getItem("searches")) || [];
// 	searches.push(searchDate);
// 	localStorage.setItem("searches", JSON.stringify(searches));
// 	addSearchToHistory();
// }

// // Function to display image data in the current-image-container
// function displayImageData(data) {
// 	const currentImageContainer = document.getElementById(
// 		"current-image-container"
// 	);
// 	currentImageContainer.innerHTML = "";

// 	const imageElement = document.createElement("img");
// 	imageElement.src = data.url;
// 	imageElement.alt = data.title;

// 	const titleElement = document.createElement("h2");
// 	titleElement.textContent = data.title;

// 	const explanationElement = document.createElement("p");
// 	explanationElement.textContent = data.explanation;

// 	currentImageContainer.appendChild(imageElement);
// 	currentImageContainer.appendChild(titleElement);
// 	currentImageContainer.appendChild(explanationElement);

// 	// Update the card heading
// 	document.getElementById(
// 		"card-heading"
// 	).textContent = `Picture On ${data.date}`;
// }

// // Function to add the search history to the UI
// function addSearchToHistory() {
// 	const searches = JSON.parse(localStorage.getItem("searches")) || [];
// 	const searchHistoryList = document.getElementById("search-history-list");
// 	searchHistoryList.innerHTML = "";

// 	searches.forEach((searchDate) => {
// 		const listItem = document.createElement("li");
// 		listItem.textContent = searchDate;
// 		listItem.addEventListener("click", () => {
// 			getImageOfTheDay(searchDate);
// 		});
// 		searchHistoryList.appendChild(listItem);
// 	});
// }

// // Event listener for form submission
// const searchForm = document.getElementById("search-form");
// searchForm.addEventListener("submit", function (e) {
// 	e.preventDefault();
// 	const selectedDate = document.getElementById("search-input").value;
// 	getImageOfTheDay(selectedDate);
// });

// // Initial call to get the current image of the day when the page loads
// getCurrentImageOfTheDay();

// // Call to populate the search history from local storage
// addSearchToHistory();

// Get NASA API key from https://api.nasa.gov/
const apiKey = "rMprJGU4ScaObfb3FDbQo03wpHkzPFCfXqhTXbiR";

// Function to fetch the image of the day for the current date
function getCurrentImageOfTheDay() {
	const currentDate = new Date().toISOString().split("T")[0];
	const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

	fetchImageData(apiUrl);
}

// Function to fetch the image of the day for the selected date
function getImageOfTheDay(selectedDate) {
	const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;

	fetchImageData(apiUrl);
}

// Function to fetch image data from the NASA API and display it
function fetchImageData(apiUrl) {
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			displayImageData(data);
			saveSearch(data.date);
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

// Function to save a date to local storage if it's not already present
function saveSearch(searchDate) {
	const searches = JSON.parse(localStorage.getItem("searches")) || [];

	// Check if the date is not already in the searches array
	if (!searches.includes(searchDate)) {
		searches.push(searchDate);
		localStorage.setItem("searches", JSON.stringify(searches));
		addSearchToHistory();
	}
}

// Function to display image data in the current-image-container
function displayImageData(data) {
	const currentImageContainer = document.getElementById(
		"current-image-container"
	);
	currentImageContainer.innerHTML = "";

	const imageElement = document.createElement("img");
	imageElement.src = data.url;
	imageElement.alt = data.title;

	const titleElement = document.createElement("h2");
	titleElement.textContent = data.title;

	const explanationElement = document.createElement("p");
	explanationElement.textContent = data.explanation;

	currentImageContainer.appendChild(imageElement);
	currentImageContainer.appendChild(titleElement);
	currentImageContainer.appendChild(explanationElement);

	// Update the card heading
	document.getElementById(
		"card-heading"
	).textContent = `Picture On ${data.date}`;
}

// Function to add the search history to the UI
function addSearchToHistory() {
	const searches = JSON.parse(localStorage.getItem("searches")) || [];
	const searchHistoryList = document.getElementById("search-history-list");
	searchHistoryList.innerHTML = "";

	searches.forEach((searchDate) => {
		const listItem = document.createElement("li");
		listItem.textContent = searchDate;
		listItem.addEventListener("click", () => {
			getImageOfTheDay(searchDate);
		});
		searchHistoryList.appendChild(listItem);
	});
}

// Event listener for form submission
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const selectedDate = document.getElementById("search-input").value;
	getImageOfTheDay(selectedDate);
});

// Initial call to get the current image of the day when the page loads
getCurrentImageOfTheDay();

// Call to populate the search history from local storage
addSearchToHistory();
