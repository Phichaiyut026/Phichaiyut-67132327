// Function to show alert when "Learn More" is clicked
function showAlert(destination) {
    alert(`You selected ${destination}. More information coming soon!`);
}

// Function to handle search form submission
function searchDestination(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;

    if (destination && departureDate && returnDate) {
        alert(`Searching for trips to ${destination} from ${departureDate} to ${returnDate}`);
    } else {
        alert('Please fill out all fields before searching.');
    }
}
