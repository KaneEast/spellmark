# 产品介绍页

一个纯静态页面，没有构建步骤、没有依赖。直接双击 `index.html` 就能看。

```
site/
  index.html                 骨架，平时不用改
  deploy-to-pages.yml        部署用的 workflow 模板（见下）
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
| **App 名** | `brand.name` **一处**。文案里写成 `{name}` 的地方全会跟着变，标题栏、页脚、分享卡片也是 |
| 文案（中 / EN / 日） | 各区块的 `zh` / `en` / `ja` 三行，就地改 |
| 按钮：几个、什么字、指向哪 | `cta` 数组。`disabled: true` 是灰掉的占位，填上 `href` 删掉 `disabled` 就能点 |
| 加截图 / 视频 | 见 `assets/media/README.md` |
| 一处放几台手机并排 | `image` 从 `"a.png"` 改成 `["a.png", "b.png"]`，首屏和功能块都支持；画廊本来就是横排 |
| 加一条功能 | `features.items` 里加一条 |

两条会静默出问题的：

- ⚠️ **三种语言都要填。** 缺的那种会回落到中文，不报错，只是页面上突然冒出一句中文。
- ⚠️ **`index.html` 的 `<title>` 和 og 标签是给爬虫看的静态兜底**（微信、Slack 之类抓链接
  预览时不跑 JS）。换 App 名时，那三行要顺手一起改——JS 只管浏览器里看到的那份。

## 几个已经定好的行为

- **深浅色跟随系统**，右上角点一下才固定成某一种（存 localStorage）。配色直接取自
  App 的 Assets：`#2E6B54` / `#5CAE86`，底色 `#F0F2F4` / `#131516`。
- **语言首次按浏览器语言猜**，之后记住用户的选择。
- **空区块自己消失**：画廊没图、视频没填，那一整块连同导航里的入口都不出现，
  不会留占位框。
- 首屏下面那段字幕演示是纯 CSS/JS 的，文案在 `content.js` 的 `demo` 里。

## 部署到 GitHub Pages

仓库根目录的 `docs/` 是项目文档，不是网站，所以别用 Pages 的 "/docs" 那个选项。
用 Actions 发 `site/`：

```bash
mkdir -p .github/workflows
cp site/deploy-to-pages.yml .github/workflows/pages.yml
git add .github/workflows/pages.yml site && git commit -m "site: 产品介绍页" && git push
```

然后 GitHub → **Settings → Pages → Source** 选 **GitHub Actions**（只需选这一次）。
之后每次 push 动到 `site/` 就自动发布，地址是 `https://<用户名>.github.io/<仓库名>/`。

📌 **仓库得是 public**，否则 Pages 要付费账户。这个仓库现在是私有的话，
另一条路是把 `site/` 单独推到一个 public 仓库。
# spellmark
