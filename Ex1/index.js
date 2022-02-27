function drawTable() {
    let table = document.getElementById('tab');
    let row = document.getElementById('rows').value;
    let col = document.getElementById('cols').value;

    console.log(row + " " + col);

    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
        let tr = document.createElement('tr');
        for (let colIndex = 0; colIndex < col; colIndex++) {
            let td = document.createElement('td');

            let text = document.createTextNode(colIndex);

            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


document.getElementById('summit').addEventListener('click', drawTable);