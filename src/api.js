const name = document.getElementById('user');
const score = document.getElementById('score');
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lR1m11mtj2PWF1nDJal8/scores';

const addData = async () => {
  const send = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
  return send.json();
};

const getData = async () => {
  const send = await fetch(api);
  const response = await send.json();
  return response;
};

export { addData, getData };
