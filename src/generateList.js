const createList = (result) => {
  const listContainer = document.querySelector('.lists');
  let item = '';
  result.forEach((element) => {
    const { user, score } = element;
    item += `
          <li class="nameValue">${user}: ${score}</li>
      `;
  });
  listContainer.innerHTML = item;
};

export default createList;
