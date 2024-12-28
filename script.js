// Function to check flags based on input
function checkFlags() {
    // Get the selected flag category from the dropdown
    const selectedCategory = document.getElementById('flagCategory').value;

    // Get the flags for the selected category from the flags object
    const selectedFlags = flags[selectedCategory];

    // Get the input flag value from the user
    const inputFlag = parseInt(document.getElementById('flagInput').value);

    if (isNaN(inputFlag)) {
        alert('Please enter a valid number!');
        return;
    }

    // Display the input value after "Flags Included:"
    const inputValueDisplay = document.getElementById('inputValueDisplay');
    inputValueDisplay.textContent = `Flags included for bitmask value: ${inputFlag}`;

    // Filter the flags that are included in the bitwise input
    const flagsIncluded = selectedFlags.filter(flag => (inputFlag & flag.bit) !== 0);

    // Display the result
    const flagList = document.getElementById('flagList');
    flagList.innerHTML = '';  // Clear the list before appending new items

    if (flagsIncluded.length > 0) {
        flagsIncluded.forEach(flag => {
            const listItem = document.createElement('li');
            listItem.textContent = `${flag.bit} - ${flag.name}`;
            flagList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No flags found';
        flagList.appendChild(listItem);
    }
}
