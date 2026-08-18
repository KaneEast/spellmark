/* ============================================================================
 *  整站唯一要改的文件：文案（中 / EN / 日）、按钮、截图、视频，全在这里。
 *  index.html 和 site.js 平时不用动。
 *
 *  ① 改 App 名：只改下面 brand.name 这一处。
 *     所有文案里写成 {name} 的地方会自动替换，页面标题、页脚、分享标题也跟着变。
 *  ② 加截图 / 视频：把文件丢进 assets/media/，再把路径填到对应字段。
 *     留空的区块（画廊、视频、某个功能配图）不会显示占位框，直接不出现。
 *  ③ 加减按钮：改 cta 数组，几个都行，顺序就是显示顺序。
 * ========================================================================== */

window.SITE = {
  /* ── ① App 名：全站只有这一处 ─────────────────────────────────────────── */
  brand: {
    name: "Spellmark",
    // 浏览器标签页、分享卡片上的一句话（{name} 会被替换）
    tagline: {
      zh: "{name} · 听播客学语言的 iPhone 客户端",
      en: "{name} · A podcast client for learning by listening",
      ja: "{name} · 聴いて学ぶポッドキャストクライアント",
    },
  },

  /* ── ② 语言 ───────────────────────────────────────────────────────────── */
  // 顺序就是切换器上的顺序；首次访问按浏览器语言猜，之后记住用户的选择。
  langs: [
    { code: "zh", label: "中", htmlLang: "zh-Hans" },
    { code: "en", label: "EN", htmlLang: "en" },
    { code: "ja", label: "日", htmlLang: "ja" },
  ],
  defaultLang: "zh",

  /* ── ③ 按钮：加减随意，style 有 primary / secondary / ghost ─────────────
   *   disabled: true  → 灰掉不可点（还没上架时用）
   *   href 填上、disabled 删掉，按钮立刻可用
   *   note: 按钮下面那行小字，不要就删掉整行
   * --------------------------------------------------------------------- */
  cta: [
    {
      style: "primary",
      disabled: true,
      href: "",
      label: { zh: "即将上架 App Store", en: "Coming to the App Store", ja: "App Store で近日公開" },
      note: { zh: "上架后这里换成下载链接", en: "This becomes the download link at launch", ja: "公開後はダウンロードリンクに差し替わります" },
    },
    {
      style: "secondary",
      href: "https://testflight.apple.com/",
      label: { zh: "加入 TestFlight 内测", en: "Join the TestFlight beta", ja: "TestFlight ベータに参加" },
    },
    {
      style: "ghost",
      href: "mailto:inmank99@gmail.com",
      label: { zh: "联系作者", en: "Get in touch", ja: "連絡する" },
      // ⚠️ 公开页面上的邮箱会被爬虫抓走，想换个地址就改这一行
    },
  ],

  /* ── ④ 导航 ───────────────────────────────────────────────────────────── */
  nav: [
    { href: "#how", label: { zh: "怎么用", en: "How it works", ja: "使い方" } },
    { href: "#features", label: { zh: "功能", en: "Features", ja: "機能" } },
    { href: "#screens", label: { zh: "截图", en: "Screens", ja: "画面" } },
    { href: "#about", label: { zh: "关于", en: "About", ja: "について" } },
  ],

  /* ── ⑤ 首屏 ───────────────────────────────────────────────────────────── */
  hero: {
    // 首屏那张图：换成别的截图就改这里，留空则不显示手机
    image: "assets/media/screenshot-player.png",
    imageAlt: {
      zh: "{name} 播放页：英文字幕、逐句译文、当前句高亮",
      en: "{name} player: English transcript, per-line translation, current line highlighted",
      ja: "{name} の再生画面：英語字幕、文ごとの訳、再生中の一文をハイライト",
    },
    eyebrow: { zh: "播客客户端 · 内置语言学习", en: "A podcast client with language learning built in", ja: "語学学習を備えたポッドキャストクライアント" },
    title: {
      zh: "你已经在听的播客，\n就是最好的教材",
      en: "The podcasts you already listen to\nare the best material you have",
      ja: "すでに聴いているポッドキャストが、\nいちばんの教材になる",
    },
    lead: {
      zh: "{name} 是一个完整的播客客户端：订阅、发现、下载、离线播放。在此之上，每一集都有逐句字幕、对照译文，和逐词可点的原句——让「刚才那句没听懂」当场变成可以看懂、可以收藏、可以复习的东西。",
      en: "{name} is a full podcast client — subscribe, discover, download, play offline. On top of that, every episode comes with a line-by-line transcript, a translation beneath it, and a sentence where every word is tappable, so the line you just missed becomes something you can make sense of, save and review.",
      ja: "{name} は購読・発見・ダウンロード・オフライン再生までそろったポッドキャストクライアントです。そのうえで、どのエピソードにも文単位の字幕と対訳、そして単語ごとにタップできる原文がついてきます。「今の一文が聞き取れなかった」を、その場で理解して保存し、復習できるものに変えます。",
    },
  },

  /* ── ⑥ 首屏下面那段会自己播的字幕演示 ─────────────────────────────────
   *   en 是「音频里说的话」，zh / ja 是显示在下面的译文，跟界面语言走。
   *   active: true 的那一句会像 App 里一样被逐词点亮。
   * --------------------------------------------------------------------- */
  demo: {
    caption: { zh: "播放页的字幕屏 · 译文默认关着，就地一开就有", en: "The transcript screen — translation is off by default, one tap away", ja: "再生画面の字幕。訳文は既定でオフ、その場で切り替えられます" },
    lines: [
      {
        en: "The idea sounds simple enough — you learn a language by listening to things you actually want to hear.",
        zh: "这个想法听起来很简单——你靠听自己真正想听的东西来学一门语言。",
        ja: "考え方はいたって単純です。自分が本当に聴きたいものを聴いて、言語を身につけるのです。",
      },
      {
        active: true,
        en: "But the moment you miss a word, the whole sentence collapses, and by the time you have looked it up the episode has moved on without you.",
        zh: "但只要漏掉一个词，整句话就塌了；等你查完，节目早就自己往前走了。",
        ja: "ところが単語をひとつ聞き逃した瞬間に文全体が崩れ、調べ終えたころには番組はとっくに先へ進んでいます。",
      },
      {
        en: "That gap is the thing worth fixing.",
        zh: "值得解决的，正是这个空档。",
        ja: "埋める価値があるのは、その空白です。",
      },
    ],
  },

  /* ── ⑦ 三步 ───────────────────────────────────────────────────────────── */
  steps: {
    title: { zh: "听 → 看字幕 → 逐词对照", en: "Listen → read along → word by word", ja: "聴く → 字幕を見る → 単語ごとに" },
    lead: {
      zh: "学习功能不是另一个 Tab 里的作业，它长在你本来就在做的那件事上。",
      en: "The learning side isn't homework in another tab. It grows out of the thing you were doing anyway.",
      ja: "学習機能は別タブの宿題ではありません。もともとしていたことの上に自然に乗っています。",
    },
    items: [
      {
        k: "01",
        title: { zh: "先当播客听", en: "Listen first", ja: "まずポッドキャストとして" },
        body: {
          zh: "订阅 RSS、目录搜索、分类榜单、播放队列、变速续播、锁屏控制、后台下载。学习功能一个都不开，它也是个完整的播客 App。",
          en: "RSS subscriptions, directory search, category charts, a play queue, speed control, resume, lock-screen controls, background downloads. With every learning feature switched off, it's still a complete podcast app.",
          ja: "RSS 購読、ディレクトリ検索、カテゴリランキング、再生キュー、速度変更、レジューム、ロック画面操作、バックグラウンドダウンロード。学習機能を一切使わなくても、ポッドキャストアプリとして完結します。",
        },
      },
      {
        k: "02",
        title: { zh: "看字幕", en: "Read along", ja: "字幕を見る" },
        body: {
          zh: "按下播放，字幕就在那儿，跟着音频一句句往前走。点一句跳过去，想要对照就地打开译文。",
          en: "Hit play and the transcript is right there, moving line by line with the audio. Tap a line to jump there; turn on the translation right where you are.",
          ja: "再生を押せば字幕がそこにあり、音声に合わせて一文ずつ進みます。行をタップすればそこへジャンプ。対訳もその場で切り替えられます。",
        },
      },
      {
        k: "03",
        title: { zh: "逐词对照", en: "Word by word", ja: "単語ごとに照らし合わせる" },
        body: {
          zh: "整句放大，逐词可点，点哪个词弹哪个词的释义。看完把这句收藏下来——原文、译文、出处，连同那一段真实语音。",
          en: "The sentence is blown up large and every word is tappable, with the definition one tap away. Save the line when you're done — text, translation, source, and the actual audio clip.",
          ja: "文を大きく表示し、どの単語もタップで辞書を引けます。読み終えた一文は保存——原文・訳文・出典に加えて、その部分の音声もそのまま残ります。",
        },
      },
    ],
  },

  /* ── ⑧ 功能：每块可以配一张图，image 留空就只显示文字 ─────────────────── */
  features: {
    title: { zh: "它到底做了什么", en: "What it actually does", ja: "実際にできること" },
    items: [
      {
        image: "", // 例："assets/media/feature-transcript.png"
        imageAlt: { zh: "字幕生成", en: "Transcript generation", ja: "字幕の生成" },
        title: { zh: "每一集都有字幕", en: "Every episode comes with a transcript", ja: "どのエピソードにも字幕がある" },
        body: {
          zh: "不看发布方给不给，也不用等。字幕跟着音频一句句出现，点一句就跳过去，正在念的那句一直亮着。",
          en: "It doesn't matter whether the publisher shipped one, and you don't sit around waiting. Lines appear as the audio moves, the current one stays lit, and tapping a line takes you straight there.",
          ja: "配信側が用意しているかどうかに左右されず、待たされることもありません。音声に合わせて一文ずつ現れ、いま読まれている行は常に光り、タップすればそこへ飛べます。",
        },
      },
      {
        image: "",
        imageAlt: { zh: "逐句译文", en: "Inline translation", ja: "対訳" },
        title: { zh: "译文夹在原文下面", en: "The translation sits under the original", ja: "訳文は原文のすぐ下に" },
        body: {
          zh: "就地一开，整集都成了对照：原文一句，译文一句。21 种目标语言，默认关着——需要的时候它才出现。",
          en: "Turn it on where you are and the whole episode becomes bilingual: a line of source, a line of translation. 21 target languages, off by default — it shows up only when you want it.",
          ja: "その場でオンにすれば、エピソード全体が原文と訳文の二段になります。対象言語は 21。既定はオフで、必要なときだけ現れます。",
        },
      },
      {
        image: "",
        imageAlt: { zh: "查词与注音", en: "Lookup and furigana", ja: "辞書引きとふりがな" },
        title: { zh: "点一个词，就懂一个词", en: "Tap one word, get that one word", ja: "単語をタップして、その語が分かる" },
        body: {
          zh: "整句放大，英语、中文、日语的每个词都能点，点了就告诉你它是什么意思。日语的汉字自动标上振假名——不用先会读，才看得懂。",
          en: "The sentence is blown up large and, in English, Chinese and Japanese, every word is tappable — tap one and it tells you what it means. Japanese kanji come with furigana, so you don't have to know the reading first.",
          ja: "文を大きく表示し、英語・中国語・日本語ではどの単語もタップ可能。タップすればその語の意味が分かります。日本語の漢字にはふりがな付きなので、読めなくても大丈夫です。",
        },
      },
      {
        image: "",
        imageAlt: { zh: "收藏的句子", en: "Saved sentences", ja: "保存した一文" },
        title: { zh: "收藏的是一句话，不是一段文字", en: "You save a sentence, not a snippet of text", ja: "保存されるのは「一文」" },
        body: {
          zh: "★ 一下，原文、译文、出处和一段真实语音切片一起存下来。之后退订节目、删掉下载，这句话和它的声音都还在。",
          en: "One tap stores the line, its translation, where it came from, and a clip of the real audio. Unsubscribe from the show or delete the download later — the sentence and its sound stay.",
          ja: "★ を一度押せば、原文・訳文・出典、そして実際の音声の切り抜きまで保存されます。番組の購読をやめても、ダウンロードを削除しても、その一文と音声は残ります。",
        },
      },
      {
        image: "",
        imageAlt: { zh: "词汇量与复习", en: "Vocabulary and review", ja: "語彙と復習" },
        title: { zh: "词汇量是算出来的，不是打卡打出来的", en: "Vocabulary is computed, not clocked in", ja: "語彙数は計算されるもので、皆勤の記録ではない" },
        body: {
          zh: "只算「确定认识」的词：查过一次就永久变成学习中，跨天答对两次才算学会。复听和选择题的材料全部来自你自己收藏的句子——没有连续天数，没有小红点，没有欠着的作业。",
          en: "Only words you've shown you know are counted: looking one up moves it to “learning” for good, and it takes two correct answers on different days to graduate. Review and quiz material comes only from sentences you saved — no streaks, no badges, nothing owed.",
          ja: "確実に分かる語だけを数えます。一度でも辞書を引けばその語は「学習中」になり、日をまたいで二回正解して初めて「習得」。復習も選択問題も素材はあなたが保存した文だけ。連続日数もバッジも、返すべき宿題もありません。",
        },
      },
      {
        image: "",
        imageAlt: { zh: "播客基本功能", en: "Podcast basics", ja: "ポッドキャストの基本機能" },
        title: { zh: "一个不将就的播客客户端", en: "A podcast client that doesn't cut corners", ja: "妥協のないポッドキャストクライアント" },
        body: {
          zh: "订阅任意 RSS、目录搜索与地区榜单、跨节目自建列表、播放队列、离线下载、锁屏与控制中心、跨启动续播。这些是基石，不是附赠。",
          en: "Subscribe to any RSS feed, search the directory, browse regional charts, build playlists across shows, queue episodes, download for offline, control from the lock screen, resume across launches. This is the foundation, not a bonus.",
          ja: "任意の RSS 購読、ディレクトリ検索と地域別ランキング、番組をまたぐ自作リスト、再生キュー、オフラインダウンロード、ロック画面とコントロールセンター、起動をまたぐレジューム。おまけではなく土台です。",
        },
      },
    ],
  },

  /* ── ⑨ 截图画廊：加一张就往数组里加一条；空数组 = 整个区块不显示 ────────── */
  gallery: {
    title: { zh: "界面", en: "Screens", ja: "画面" },
    lead: { zh: "深浅两套配色跟随系统。", en: "Light and dark, following the system.", ja: "ライト／ダークはシステムに追従します。" },
    items: [
      {
        src: "assets/media/screenshot-player.png",
        caption: { zh: "播放页 · 字幕与译文", en: "Player · transcript and translation", ja: "再生画面・字幕と訳文" },
      },
      // { src: "assets/media/screenshot-library.png",
      //   caption: { zh: "资料库", en: "Library", ja: "ライブラリ" } },
    ],
  },

  /* ── ⑩ 视频：src 填上才显示；poster 是封面图，可留空 ───────────────────── */
  video: {
    src: "", // 例："assets/media/demo.mp4"
    poster: "",
    title: { zh: "看它跑起来", en: "See it running", ja: "動いているところ" },
    lead: { zh: "", en: "", ja: "" },
  },

  /* ── ⑪ 关于 ───────────────────────────────────────────────────────────── */
  notes: {
    title: { zh: "几件该说在前面的事", en: "A few things worth saying up front", ja: "先に伝えておきたいこと" },
    items: [
      {
        title: { zh: "全在 App 内完成", en: "It all happens inside the app", ja: "すべてアプリ内で完結" },
        body: {
          zh: "字幕相关的一切都在 App 内完成，不需要服务端，也不需要注册账号。你听的东西不会被交给任何人。",
          en: "Everything around the transcript happens inside the app — no server involved, no account to create. What you listen to isn't handed to anyone.",
          ja: "字幕まわりの処理はすべてアプリ内で完結します。サーバーもアカウント登録も不要。聴いている内容が誰かに渡ることはありません。",
        },
      },
      {
        title: { zh: "语言范围", en: "Language coverage", ja: "対応言語" },
        body: {
          zh: "字幕、译文、词义、注音覆盖多个语种；「学会了多少词」这一档目前只做英语。",
          en: "Transcripts, translations, word meanings and furigana cover several languages. The “how many words do I know” side is English-only for now.",
          ja: "字幕・訳文・語義・ふりがなは複数言語に対応。「何語覚えたか」の判定は今のところ英語のみです。",
        },
      },
      {
        title: { zh: "界面语言", en: "Interface language", ja: "表示言語" },
        body: {
          zh: "简体中文 / 日本語 / English，跟你要学的语言是两件事，互不影响。",
          en: "简体中文 / 日本語 / English — chosen independently of the language you're learning.",
          ja: "简体中文 / 日本語 / English。学習対象の言語とは別に選べます。",
        },
      },
      {
        title: { zh: "运行环境", en: "Requirements", ja: "動作環境" },
        body: {
          zh: "iPhone，iOS 26 或更新版本。",
          en: "iPhone, iOS 26 or later.",
          ja: "iPhone、iOS 26 以降。",
        },
      },
    ],
  },

  /* ── ⑫ 结尾与页脚 ─────────────────────────────────────────────────────── */
  closing: {
    title: { zh: "下次通勤的那半小时，\n可以顺手带走几个词", en: "The next half hour of your commute\ncan leave you a few words richer", ja: "次の通勤の三十分で、\n単語をいくつか持ち帰る" },
  },
  footer: {
    // 留空这一行就不显示；想在页脚说句话就填进来
    line: { zh: "", en: "", ja: "" },
    links: [
      // { href: "privacy.html", label: { zh: "隐私政策", en: "Privacy", ja: "プライバシー" } },
    ],
  },

  /* ── ⑬ 界面上的零碎词 ─────────────────────────────────────────────────── */
  ui: {
    themeToggle: { zh: "切换深浅色", en: "Toggle light or dark", ja: "ライト／ダークを切り替え" },
    langGroup: { zh: "选择语言", en: "Choose language", ja: "言語を選択" },
    skip: { zh: "跳到正文", en: "Skip to content", ja: "本文へスキップ" },
  },
};
