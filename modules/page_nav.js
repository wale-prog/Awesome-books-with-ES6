const pageNav = () => {
  const navList = document.querySelectorAll('.nav-list-item');
  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add-new');
  const contact = document.getElementById('contact');

  for (let i = 0; i < navList.length; i += 1) {
    navList[i].addEventListener('click', (event) => {
      if (event.target.innerText === 'Add new') {
        list.classList.add('hidden');
        addNew.classList.remove('hidden');
        contact.classList.add('hidden');
      } else if (event.target.innerText === 'List') {
        list.classList.remove('hidden');
        addNew.classList.add('hidden');
        contact.classList.add('hidden');
      } else if (event.target.innerText === 'Contact') {
        list.classList.add('hidden');
        addNew.classList.add('hidden');
        contact.classList.remove('hidden');
      }
    });
  }
};

export default pageNav;
