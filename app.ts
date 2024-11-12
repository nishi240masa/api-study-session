// h3:import
import { createApp, createRouter, defineEventHandler } from "h3";
import { getFortune } from "./src/omikuzi/omikuzi";

// ここでappを作成している
export const app = createApp();

// ここでrouterを作成している
// routerとは、リクエストを受け取り、それに対するレスポンスを返すためのもの
const router = createRouter();
app.use(router);

// GET,POST,PUT,DELETE
// GET: リソースの取得
// POST: リソースの作成
// PUT: リソースの更新
// DELETE: リソースの削除

// ここでGETリクエストを受け取る
router.get(
  "/",
  defineEventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  })
);

// ここでPOSTリクエストを受け取る
router.post(
  "/",
  defineEventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  })
);

// ここでPUTリクエストを受け取る
router.put(
  "/",
  defineEventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  })
);

// ここでDELETEリクエストを受け取る
router.delete(
  "/",
  defineEventHandler((event) => {
    return { message: "⚡️ Tadaa!" };
  })
);

// エンドポイントの設定
router.get(
  "/omikuji", //これがエンドポイント
  defineEventHandler((event) => {
    // クエリパラメータから誕生日を取得
    const birthday = event.node.req.url.split("?birthday=")[1];
    if (!birthday) {
      return {
        error:
          "誕生日を指定してください。?birthday=YYYY-MM-DD の形式で指定してください。",
      };
    }

    // おみくじの結果を生成
    const fortune = getFortune();
    return { birthday, fortune };
  })
);
