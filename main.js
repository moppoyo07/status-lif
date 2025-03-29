const LIFF_ID = 'YOUR_LIFF_ID_HERE'; // ここにあなたのLIFF IDを入れる
const API_URL = 'YOUR_GAS_ENDPOINT_URL'; // ここにGASのデプロイURLを入れる

window.onload = function () {
  liff.init({ liffId: LIFF_ID })
    .then(() => {
      fetchStatus();
    })
    .catch(() => {
      document.getElementById('statusList').innerText = 'LIFF初期化エラー';
    });
};

function fetchStatus() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('statusList');
      list.innerHTML = '';
      data.forEach(row => {
        const card = document.createElement('div');
        card.className = 'status-card';
        card.innerHTML = `<span>${row.name}</span><span>${row.status}</span>`;
        list.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById('statusList').innerText = 'データ取得失敗';
    });
}
