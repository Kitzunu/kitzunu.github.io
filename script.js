// Define the flags (these can be adjusted to fit your needs)
const predefinedFlags = [
    { id: 1, name: 'Flag 1' },
    { id: 2, name: 'Flag 2' },
    { id: 4, name: 'Flag 3' },
    { id: 8, name: 'Flag 4' },
    { id: 16, name: 'Flag 5' },
    { id: 32, name: 'Flag 6' },
    { id: 64, name: 'Flag 7' },
    { id: 128, name: 'Flag 8' },
];

// Function to check flags based on input
function checkFlags() {
    const inputFlag = parseInt(document.getElementById('flagInput').value);

    if (isNaN(inputFlag)) {
        alert('Please enter a valid number!');
        return;
    }

    const flagsIncluded = predefinedFlags.filter(flag => (inputFlag & flag.id) !== 0);

    // Display the result
    const flagList = document.getElementById('flagList');
    flagList.innerHTML = '';  // Clear the list before appending new items

    if (flagsIncluded.length > 0) {
        flagsIncluded.forEach(flag => {
            const listItem = document.createElement('li');
            listItem.textContent = flag.name;
            flagList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No flags found';
        flagList.appendChild(listItem);
    }
}
