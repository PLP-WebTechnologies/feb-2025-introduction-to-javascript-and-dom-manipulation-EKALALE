// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = 'The text has been updated!';
    dynamicText.style.color = 'red'; // Modify CSS styles dynamically
    dynamicText.style.fontWeight = 'bold';
});

// Add a new element to the page
document.getElementById('addElementButton').addEventListener('click', function() {
    const container = document.getElementById('contentContainer');

    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically by philipo.';
    newElement.style.color = 'green';

    container.appendChild(newElement);
});

// Remove the last added element
document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('contentContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    } else {
        alert('No more elements to remove!');
    }
});
