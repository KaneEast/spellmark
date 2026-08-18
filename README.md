# Spellmark

**你已经在听的播客，就是最好的教材。**

Spellmark 是一个完整的 iPhone 播客客户端——订阅、发现、下载、离线播放。在此之上，
每一集都有逐句字幕、对照译文，和逐词可点的原句，让「刚才那句没听懂」当场变成
可以看懂、可以收藏、可以复习的东西。

🔗 **产品介绍页：<https://kaneeast.github.io/spellmark/>**

<img src="assets/media/screenshot-player.png" width="300" alt="Spellmark 播放页：英文字幕、逐句译文、当前句高亮">

---

## 这个仓库是什么

上面那个介绍页的全部源码。**纯静态**：没有构建步骤、没有依赖、没有框架，
双击 `index.html` 就能看。

- **三语**（简体中文 / English / 日本語），首次按浏览器语言判断，之后记住选择
- **深浅色跟随系统**，也可以手动固定
- 所有文案、按钮、截图集中在一个文件里（`assets/js/content.js`），
  页面骨架和渲染逻辑不用碰
- 内容为空的区块（截图墙、视频）自动隐藏，不留占位框

配色和图标取自 App 本身：`#2E6B54` / `#9ED8BE`。

## 要改这个页面

看 [MAINTAINING.md](MAINTAINING.md)。
