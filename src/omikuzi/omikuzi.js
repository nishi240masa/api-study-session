// おみくじの結果の配列
// DBの代わりに配列を使っている
const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

// おみくじを引く関数
export function getFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}
