function checkFlags() {
    const selectedCategory = document.getElementById('flagCategory').value;
    const selectedFlags = flags[selectedCategory];
    const inputFlag = parseInt(document.getElementById('flagInput').value);

    if (isNaN(inputFlag)) {
        alert('Please enter a valid number!');
        return;
    }

    const inputValueDisplay = document.getElementById('inputValueDisplay');
    inputValueDisplay.textContent = `Flags included for bitmask value: ${inputFlag}`;

    const flagsIncluded = selectedFlags.filter(flag => (inputFlag & flag.bit) !== 0);

    const flagList = document.getElementById('flagList');
    flagList.innerHTML = '';

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
