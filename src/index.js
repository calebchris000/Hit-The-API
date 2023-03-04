import './index.scss';
import { addData, getData } from './api.js';
import createList from './generateList.js';

const name = document.getElementById('user');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const listContainer = document.querySelector('.lists');

const renderData = async () => {
  listContainer.innerHTML = '';
  const data = await getData();
  const { result } = data;
  const sorted = result.sort((a, b) => b.score - a.score);
  createList(sorted);
};

const uploadData = async (e) => {
  e.preventDefault();
  await addData();
  name.value = '';
  score.value = '';

  await renderData();
};

submit.addEventListener('click', uploadData);

window.onload = renderData;
