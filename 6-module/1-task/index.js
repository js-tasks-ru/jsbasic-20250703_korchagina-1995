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
    this.elem = this.render();
  }

  onTableClick = (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
      target.closest('tr').remove();
    }
  }

  getTableHtml() {
    
    const thead = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
    `;

    const tbody = `
      <tbody>
        ${this.rows.map(row => `
          <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button>X</button></td>
          </tr>
        `).join('')}
      </tbody>
    `;

    return thead + tbody;
  }

  render() {
    const table = document.createElement('table');
    table.innerHTML = this.getTableHtml();
    table.addEventListener('click', this.onTableClick);
    return table;
  }

}



