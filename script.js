document.getElementById('submit').addEventListener('click', () => {
    const list1Input = document.getElementById('list1').value;
    const list2Input = document.getElementById('list2').value;
    const list1 = list1Input.split(',').map(num => parseFloat(num.trim())).sort();
    const list2 = list2Input.split(',').map(num => parseFloat(num.trim())).sort();

    let totalDistance = 0;
    for (let i = 0; i < list1.length; i++) {
        distanceBetweenPoints = list1[i] - list2[i];
        totalDistance = totalDistance + distanceBetweenPoints;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Total Distance: [${totalDistance}]</p>
    `;
});