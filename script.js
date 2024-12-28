// Define the different flag categories
const flagCategories = {
    mechanicImmunity: [
        { id: 1, name: 'Immune to Stun' },
        { id: 2, name: 'Immune to Silence' },
        { id: 4, name: 'Immune to Fear' },
        { id: 8, name: 'Immune to Charm' },
        { id: 16, name: 'Immune to Sleep' },
    ],
    creatureExtraFlags: [
        { id: 1, name: 'Can Swim' },
        { id: 2, name: 'Is Ghost' },
        { id: 4, name: 'Can Fly' },
        { id: 8, name: 'Is Summoned' },
        { id: 16, name: 'Can Target Players' },
    ]
};

// Function to check flags based on input
function checkFlags() {
    // Get the selected flag category
    const selectedCategory = document.getElementById('flagCategory').value;

    // Get the flags for the selected category
    const selectedFlags = flagCategories[selectedCategory];

    // Get the input flag value
    const inputFlag = parseInt(document.getElementById('flagInput').value);

    // Display the input value after "Flags Included:"
    const inputValueDisplay = document.getElementById('inputValueDisplay');
    inputValueDisplay.textContent = `Flags included for bitmask value: ${inputFlag}`;

    if (isNaN(inputFlag)) {
        alert('Please enter a valid number!');
        return;
    }

    // Filter the flags that are included in the bitwise input
    const flagsIncluded = selectedFlags.filter(flag => (inputFlag & flag.id) !== 0);

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
