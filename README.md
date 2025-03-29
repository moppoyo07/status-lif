# LIFF ステータス表示アプリ

## セットアップ手順

1. LINE DevelopersでLIFFチャネルを作成
2. LIFF ID を取得して `main.js` に貼り付け
3. GASでステータス一覧APIを作成し、URLを `main.js` に貼り付け
4. GitHubにこの3ファイル（index.html, style.css, main.js）をアップロード
5. GitHub Pagesを有効にして、LIFFチャネルにそのURLを登録

## ステータスAPI仕様（GAS）

```javascript
function doGet() {
  const sheet = SpreadsheetApp.openById('スプレッドシートID').getSheetByName('ステータス一覧');
  const data = sheet.getDataRange().getValues();
  const output = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row[0]) {
      output.push({ name: row[0], status: row[1] });
    }
  }

  return ContentService.createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}
