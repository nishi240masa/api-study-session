// h3:import
import {
  createApp,
  createRouter,
  defineEventHandler,
  getQuery,
  setResponseHeader,
} from "h3";
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
router
  .get(
    "/test",
    defineEventHandler((event) => {
      setResponseHeader(event, "Access-Control-Allow-Origin", "*");
      return { message: "これはgetの処理" };
    })
  )
  .post(
    "/test",
    defineEventHandler((event) => {
      setResponseHeader(event, "Access-Control-Allow-Origin", "*");

      // ランダムの数値を生成して配列に格納
      const random = Math.floor(Math.random() * 10);
      const array = [];
      for (let i = 0; i < random; i++) {
        array.push(i);
      }
      return { array };
    })
  )
  .put(
    "/test",
    defineEventHandler((event) => {
      setResponseHeader(event, "Access-Control-Allow-Origin", "*");

      // クエリパラメータから名前を取得
      const query = getQuery(event);
    })
  )
  .delete(
    "/",
    defineEventHandler((event) => {
      setResponseHeader(event, "Access-Control-Allow-Origin", "*");
      return { message: "Hello, World!" };
    })
  );

// エンドポイントの設定
router.get(
  "/omikuji", //これがエンドポイント
  defineEventHandler((event) => {
    setResponseHeader(event, "Access-Control-Allow-Origin", "*"); // CORSを許可する
    // クエリパラメータから誕生日を取得
    const query = getQuery(event);
    const birthday = query.birthday;
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
