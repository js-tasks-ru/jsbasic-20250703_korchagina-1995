let friends = [
  { firstName: 'Artsiom', lastName: 'Mezin' },
  { firstName: 'Ilia', lastName: 'Kantor' },
  { firstName: 'Christopher', lastName: 'Michael' }
];

function makeFriendsList(friends) {
  let list = document.createElement('ul');

  friends.forEach(el => {
    let li = document.createElement('li');
    li.textContent = `${el.firstName} ${el.lastName}`;
    list.appendChild(li);
  });

  return list;
}

document.body.appendChild(makeFriendsList(friends));