# 截图和视频放这儿

丢文件进来，再去 `../js/content.js` 填路径。路径都是相对 `site/index.html` 的，
所以写成 `assets/media/你的文件名`。

## 截图

- 直接用 iPhone 的原始截图就行（1125×2436 之类），网页会自己套上手机外壳并缩放。
- 深色截图配深色页面、浅色配浅色，最好各出一套；只有一套也不影响。
- 单张超过 1 MB 就压一下（`sips -Z 1170 x.png` 缩到 1170 宽足够清晰）。

填到哪里：

| 想放的位置 | content.js 里的字段 |
|---|---|
| 首屏那台手机 | `hero.image` |
| 某个功能块配图 | `features.items[n].image` |
| 底部画廊（可多张，横排） | `gallery.items` 里加一条 `{ src, caption }` |

**并排放几台**：`hero.image` 和 `features.items[n].image` 都可以写成数组——
`image: ["assets/media/a.png", "assets/media/b.png"]`，会自动缩小并排。

## 视频

- 填 `video.src`，整块才会出现；不填就整块不显示。
- **H.264 + AAC 的 `.mp4`**，Safari 才认。
- GitHub 单文件上限 100 MB，实际控制在 20 MB 以内比较合适
  （1080p、30fps、~3 Mbps、30 秒左右）。
- `video.poster` 可以给一张封面图，不给就用视频第一帧。

```bash
# 录屏转成体积合适的 mp4
ffmpeg -i 录屏.mov -vf "scale=-2:1080" -c:v libx264 -crf 26 -preset slow \
       -pix_fmt yuv420p -c:a aac -b:a 128k demo.mp4
```
