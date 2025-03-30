const LIFF_ID = 'https://miniapp.line.me/2007160897-REy3nXeW'; // ここにあなたのLIFF IDを入れる
const API_URL = 'https://script.google.com/macros/s/AKfycbz4-wzdz9scjTho5DirBcNzZSLSaH7jYjkoKNdA7PBkPBAjZsEVj0vPYcqZBOtREWO2/exec'; // ここにGASのデプロイURLを入れる

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
