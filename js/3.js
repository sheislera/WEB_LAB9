function closeBlock(button) {
    var block = button.parentNode;
    block.style.display = 'none';
}

function calculateSum() {
    var table = document.querySelector('table');
    var sumRow = document.createElement('tr');
    var rows = table.querySelectorAll('tr');
    var columnCount = rows[0].querySelectorAll('td').length;
    var columnSums = new Array(columnCount).fill(0);
    rows.forEach(function(row) {
        var cells = row.querySelectorAll('td');
        cells.forEach(function(cell, columnIndex) {
            columnSums[columnIndex] += parseInt(cell.textContent);
        });
    });
    columnSums.forEach(function(sum) {
        var cell = document.createElement('td');
        cell.textContent = sum;
        sumRow.appendChild(cell);
    });

    table.appendChild(sumRow);
}
