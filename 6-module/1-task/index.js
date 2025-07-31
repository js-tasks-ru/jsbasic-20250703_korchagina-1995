/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.renderTable();
  }

  renderTable() {
    const table = document.createElement('table');

    const thead = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
        </tr>
      </thead>
    `;

    const tbodyRows = this.rows.map(row => `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      </tr>
    `).join('');

    const tbody = `<tbody>${tbodyRows}</tbody>`;

    table.innerHTML = thead + tbody;

    table.addEventListener('click', (e) => {

      const target = e.target;

      if (target.tagName === 'BUTTON') {
        target.closest('tr').remove();
      }
    });

    return table;
  }
  
}



