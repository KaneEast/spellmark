# Spellmark 产品介绍页

纯静态，没有构建步骤、没有依赖。双击 `index.html` 就能在本地看。
线上地址：<https://kaneeast.github.io/spellmark/>

```
index.html                 骨架，平时不用改
.nojekyll                  空文件，让 Pages 跳过 Jekyll。⚠️ 别删
assets/
  css/site.css             样式（配色取自 App 的 Assets）
  js/content.js         ←  改这一个文件就够了
  js/site.js               渲染逻辑，平时不用改
  media/                ←  截图和视频丢这儿（里面另有一份说明）
  favicon.svg
```

## 改什么，都在 `assets/js/content.js`

| 想改的东西 | 改哪儿 |
|---|---|
| **App 名** | `brand.name` **一处**。文案里写成 `{name}` 的地方全会跟着变 |
| 文案（中 / EN / 日） | 各区块的 `zh` / `en` / `ja` 三行，就地改 |
| 按钮：几个、什么字、指向哪 | `cta` 数组。`disabled: true` 是灰掉的占位，填上 `href` 删掉 `disabled` 就能点 |
| 加截图 / 视频 | 见 `assets/media/README.md` |
| 一处放几台手机并排 | `image` 从 `"a.png"` 改成 `["a.png", "b.png"]`，首屏和功能块都支持；画廊本来就是横排 |
| 加一条功能 | `features.items` 里加一条 |

三条会静默出问题的：

- ⚠️ **三种语言都要填。** 缺的那种会回落到中文，不报错，只是页面上突然冒出一句中文。
- ⚠️ **`index.html` 里的 `<title>` 和 og 标签是给爬虫看的静态兜底**——微信、Slack 抓链接
  预览时不跑 JS。换 App 名时那几行要一起改，`content.js` 只管浏览器里看到的那份。
- ⚠️ **og:image 必须写绝对地址。** 相对路径在浏览器里没问题，但抓预览的爬虫不认，
  表现是「分享出去没有封面图」，而你自己怎么看都是好的。

## 几个已经定好的行为

- **深浅色跟随系统**，右上角点一下才固定成某一种（存 localStorage）。配色取自 App 的
  Assets：`#2E6B54` / `#5CAE86`，底色 `#F0F2F4` / `#131516`。
- **语言首次按浏览器语言猜**，之后记住用户的选择。
- **空区块自己消失**：画廊没图、视频没填，那一整块连同导航里的入口都不出现。
- 首屏下面那段字幕演示是纯 CSS/JS 的，文案在 `content.js` 的 `demo` 里。

## 部署

GitHub → Settings → Pages → **Deploy from a branch** → `main` / `(root)`。
只设一次，之后 **push 到 main 就自动发布**，一分钟左右生效。

📌 网页文件在这个仓库的根目录，App 源码在另一个私有仓库里，两边不相干。
