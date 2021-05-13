fetch('https://api.mcsrvstat.us/2/minecraft.uclaacm.com').then((res) => {
  return res.json();
}).then((data) => {
  console.log(data)
  const status = document.querySelector('.status-wrapper .values .status');
  const players = document.querySelector('.status-wrapper .values .players');

  if (data.online) {
    status.textContent='online';
    status.style.color = '#3d9c4c';
    players.textContent = data.players.online + '/' + data.players.max;
  } else {
    status.textContent='offline 😔 message a mod on the ACM Discord!';
    status.style.color = '#E83D3D';
    players.textContent = '---';
  }
}).catch((err) => {
  console.log(err)
  const error = document.querySelector('.error');
  error.style.display = 'inherit';

  const status = document.querySelector('.status-wrapper');
  status.style.display = 'none';
})