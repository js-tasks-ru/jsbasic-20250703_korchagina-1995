function highlight(table) {
  const headerCells = table.rows[0].cells;
  let ageIndex;
  let genderIndex;
  let statusIndex;

  for (let i = 0; i < headerCells.length; i++) {
    const text = headerCells[i].textContent;

    if (text === 'Age') {
      ageIndex = i;
    }
    if (text === 'Gender') {
      genderIndex = i;
    }
    if (text === 'Status') {
      statusIndex = i;
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const cells = row.cells;

    const ageCell = cells[ageIndex];
    const genderCell = cells[genderIndex];
    const statusCell = cells[statusIndex];

    const age = parseInt(ageCell.textContent);
    const gender = genderCell.textContent;
    const available = statusCell.dataset.available;

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }

    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }
  }
}

highlight(table);
