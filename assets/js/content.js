/* ============================================================================
 *  整站唯一要改的文件：文案（中 / EN / 日 / 한 / ES）、按钮、截图、视频，全在这里。
 *  ⚠️ 加字段时**五种语言都要填**：缺一种会静默回落到中文，不报错，
 *     表现只是英文页面上突然冒出一句中文（MAINTAINING.md 那条）。
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
      es: "{name} · Un cliente de pódcast para aprender escuchando",
      ko: "{name} · 들으며 배우는 팟캐스트 클라이언트",
    },
  },

  /* ── ② 语言 ───────────────────────────────────────────────────────────── */
  // 顺序就是切换器上的顺序；首次访问按浏览器语言猜，之后记住用户的选择。
  langs: [
    { code: "zh", label: "中", htmlLang: "zh-Hans" },
    { code: "en", label: "EN", htmlLang: "en" },
    { code: "ja", label: "日", htmlLang: "ja" },
    { code: "ko", label: "한", htmlLang: "ko" },
    { code: "es", label: "ES", htmlLang: "es" },
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
      href: "https://apps.apple.com/jp/app/spellmark/id6802482442?l=en-US",
      label: { zh: "在 App Store 下载", en: "Download on the App Store", ja: "App Store でダウンロード", es: "Descargar en el App Store", ko: "App Store에서 다운로드" },
    },
    {
      style: "secondary",
      href: "https://testflight.apple.com/",
      label: { zh: "加入 TestFlight 内测", en: "Join the TestFlight beta", ja: "TestFlight ベータに参加", es: "Únete a la beta de TestFlight", ko: "TestFlight 베타 참여" },
    },
    {
      style: "ghost",
      href: "mailto:inmank99@gmail.com",
      label: { zh: "联系作者", en: "Get in touch", ja: "連絡する", es: "Contactar", ko: "문의하기" },
      // ⚠️ 公开页面上的邮箱会被爬虫抓走，想换个地址就改这一行
    },
  ],

  /* ── ④ 导航 ───────────────────────────────────────────────────────────── */
  nav: [
    { href: "#how", label: { zh: "怎么用", en: "How it works", ja: "使い方", es: "Cómo funciona", ko: "사용 방법" } },
    { href: "#features", label: { zh: "功能", en: "Features", ja: "機能", es: "Funciones", ko: "기능" } },
    // ⚠️ 跟着画廊一起关掉：那一区 hidden 之后，这条会跳到一个不存在的位置。
    // { href: "#screens", label: { zh: "截图", en: "Screens", ja: "画面", es: "Capturas", ko: "화면" } },
    { href: "#about", label: { zh: "关于", en: "About", ja: "について", es: "Acerca de", ko: "소개" } },
  ],

  /* ── ⑤ 首屏 ───────────────────────────────────────────────────────────── */
  hero: {
    // 首屏那块图。写一张 = 一台大手机；写成数组 = 缩小并排。
    // ⚠️ **超过 3 张会自动排成「一排 5 个」的小图墙**（site.js 里判的），
    //    现在这 9 张就是 5 + 4 两排。想回到一台大手机就写回单张。
    // 留空则整块不显示。
    image: [
      "assets/media/shot-1.png",
      "assets/media/shot-2.png",
      "assets/media/shot-3.png",
      "assets/media/shot-4.png",
      "assets/media/shot-5.png",
      "assets/media/shot-6.png",
      "assets/media/shot-7.png",
      "assets/media/shot-8.png",
      "assets/media/shot-9.png",
    ],
    // ⚠️ 这一句是**整块图的说明**，不是某一张的——9 张共用它。
    //    要一张一句的话得改 site.js 的 renderHero，现在没有那个需求。
    imageAlt: {
      zh: "{name} 的界面截图",
      en: "Screenshots of {name}",
      ja: "{name} の画面",
      es: "Capturas de pantalla de {name}",
      ko: "{name} 화면 캡처",
    },
    eyebrow: { zh: "播客客户端 · 内置语言学习", en: "A podcast client with language learning built in", ja: "語学学習を備えたポッドキャストクライアント", es: "Un cliente de pódcast con aprendizaje de idiomas integrado", ko: "언어 학습이 내장된 팟캐스트 클라이언트" },
    title: {
      zh: "你已经在听的播客，\n就是最好的教材",
      en: "The podcasts you already listen to\nare the best material you have",
      ja: "すでに聴いているポッドキャストが、\nいちばんの教材になる",
      es: "Los pódcast que ya escuchas\nson el mejor material que tienes",
      ko: "이미 듣고 있는 팟캐스트가\n가장 좋은 교재입니다",
    },
    lead: {
      zh: "{name} 是一个完整的播客客户端：订阅、发现、下载、离线播放。在此之上，每一集都有逐句字幕、对照译文，和逐词可点的原句——让「刚才那句没听懂」当场变成可以看懂、可以收藏、可以复习的东西。",
      en: "{name} is a full podcast client — subscribe, discover, download, play offline. On top of that, every episode comes with a line-by-line transcript, a translation beneath it, and a sentence where every word is tappable, so the line you just missed becomes something you can make sense of, save and review.",
      ja: "{name} は購読・発見・ダウンロード・オフライン再生までそろったポッドキャストクライアントです。そのうえで、どのエピソードにも文単位の字幕と対訳、そして単語ごとにタップできる原文がついてきます。「今の一文が聞き取れなかった」を、その場で理解して保存し、復習できるものに変えます。",
      es: "{name} es un cliente de pódcast completo: suscríbete, descubre, descarga y escucha sin conexión. Además, cada episodio trae una transcripción línea a línea, su traducción debajo y una frase en la que cada palabra se puede tocar, de modo que aquello que acabas de no entender se convierte en algo que puedes comprender, guardar y repasar.",
      ko: "{name}은 구독, 발견, 다운로드, 오프라인 재생을 갖춘 완전한 팟캐스트 클라이언트입니다. 그 위에 모든 에피소드마다 문장별 자막과 그 아래 번역, 그리고 단어마다 누를 수 있는 원문이 붙습니다. 방금 놓친 그 문장이 이해하고, 저장하고, 다시 볼 수 있는 것이 됩니다.",
    },
  },

  /* ── ⑥ 首屏下面那段会自己播的字幕演示 ─────────────────────────────────
   *   en 是「音频里说的话」，zh / ja 是显示在下面的译文，跟界面语言走。
   *   active: true 的那一句会像 App 里一样被逐词点亮。
   * --------------------------------------------------------------------- */
  demo: {
    caption: { zh: "播放页的字幕屏 · 译文默认关着，就地一开就有", en: "The transcript screen — translation is off by default, one tap away", ja: "再生画面の字幕。訳文は既定でオフ、その場で切り替えられます", es: "La pantalla de transcripción: la traducción está desactivada por defecto, a un toque de distancia", ko: "자막 화면 — 번역은 기본으로 꺼져 있고, 한 번만 누르면 켜집니다" },
    lines: [
      {
        en: "The idea sounds simple enough — you learn a language by listening to things you actually want to hear.",
        zh: "这个想法听起来很简单——你靠听自己真正想听的东西来学一门语言。",
        ja: "考え方はいたって単純です。自分が本当に聴きたいものを聴いて、言語を身につけるのです。",
        es: "La idea suena bastante simple: aprendes un idioma escuchando aquello que de verdad quieres oír.",
        ko: "생각은 아주 단순합니다. 정말로 듣고 싶은 것을 들으면서 언어를 익히는 것.",
      },
      {
        active: true,
        en: "But the moment you miss a word, the whole sentence collapses, and by the time you have looked it up the episode has moved on without you.",
        zh: "但只要漏掉一个词，整句话就塌了；等你查完，节目早就自己往前走了。",
        ja: "ところが単語をひとつ聞き逃した瞬間に文全体が崩れ、調べ終えたころには番組はとっくに先へ進んでいます。",
        es: "Pero en cuanto se te escapa una palabra, la frase entera se derrumba; y cuando terminas de buscarla, el episodio ya siguió sin ti.",
        ko: "하지만 단어 하나를 놓치는 순간 문장 전체가 무너지고, 찾아보고 나면 에피소드는 이미 저만치 가 있습니다.",
      },
      {
        en: "That gap is the thing worth fixing.",
        zh: "值得解决的，正是这个空档。",
        ja: "埋める価値があるのは、その空白です。",
        es: "Ese hueco es justo lo que vale la pena resolver.",
        ko: "메울 가치가 있는 건 바로 그 빈틈입니다.",
      },
    ],
  },

  /* ── ⑦ 三步 ───────────────────────────────────────────────────────────── */
  steps: {
    title: { zh: "听 → 看字幕 → 逐词对照", en: "Listen → read along → word by word", ja: "聴く → 字幕を見る → 単語ごとに", es: "Escuchar → seguir el texto → palabra por palabra", ko: "듣기 → 자막 보기 → 단어별로 확인" },
    lead: {
      zh: "学习功能长在你本来就在做的那件事上。",
      en: "The learning side grows out of the thing you were doing anyway.",
      ja: "学習機能は、もともとしていたことの上に自然に乗っています。",
      es: "La parte de aprendizaje nace de lo que ya estabas haciendo.",
      ko: "학습 기능은 원래 하고 있던 그 일에서 자라납니다.",
    },
    items: [
      {
        k: "01",
        title: { zh: "先当播客听", en: "Listen first", ja: "まずポッドキャストとして", es: "Primero, escuchar", ko: "먼저 팟캐스트로" },
        body: {
          zh: "订阅 RSS、目录搜索、分类榜单、播放队列、变速续播、锁屏控制、后台下载。学习功能一个都不开，它也是个完整的播客 App。",
          en: "RSS subscriptions, directory search, category charts, a play queue, speed control, resume, lock-screen controls, background downloads. With every learning feature switched off, it's still a complete podcast app.",
          ja: "RSS 購読、ディレクトリ検索、カテゴリランキング、再生キュー、速度変更、レジューム、ロック画面操作、バックグラウンドダウンロード。学習機能を一切使わなくても、ポッドキャストアプリとして完結します。",
          es: "Suscripciones RSS, búsqueda en el directorio, listas por categoría, cola de reproducción, control de velocidad, reanudar donde lo dejaste, controles en la pantalla bloqueada y descargas en segundo plano. Con todas las funciones de aprendizaje apagadas, sigue siendo una app de pódcast completa.",
          ko: "RSS 구독, 디렉터리 검색, 카테고리 차트, 재생 대기열, 배속 조절, 이어 듣기, 잠금 화면 제어, 백그라운드 다운로드. 학습 기능을 하나도 켜지 않아도 그 자체로 완전한 팟캐스트 앱입니다.",
        },
      },
      {
        k: "02",
        title: { zh: "看字幕", en: "Read along", ja: "字幕を見る", es: "Seguir el texto", ko: "자막 보기" },
        body: {
          zh: "按下播放，字幕就在那儿，跟着音频一句句往前走。点一句跳过去，想要对照就地打开译文。",
          en: "Hit play and the transcript is right there, moving line by line with the audio. Tap a line to jump there; turn on the translation right where you are.",
          ja: "再生を押せば字幕がそこにあり、音声に合わせて一文ずつ進みます。行をタップすればそこへジャンプ。対訳もその場で切り替えられます。",
          es: "Dale a reproducir y la transcripción ya está ahí, avanzando línea a línea con el audio. Toca una línea para saltar a ella y activa la traducción sin salir de la pantalla.",
          ko: "재생을 누르면 자막이 바로 그 자리에 있고, 오디오를 따라 한 문장씩 넘어갑니다. 문장을 누르면 그 지점으로 이동하고, 번역도 그 자리에서 켤 수 있습니다.",
        },
      },
      {
        k: "03",
        title: { zh: "逐词对照", en: "Word by word", ja: "単語ごとに照らし合わせる", es: "Palabra por palabra", ko: "단어별로 확인" },
        body: {
          zh: "整句放大，逐词可点，点哪个词弹哪个词的释义。看完把这句收藏下来——原文、译文、出处，连同那一段真实语音。",
          en: "The sentence is blown up large and every word is tappable, with the definition one tap away. Save the line when you're done — text, translation, source, and the actual audio clip.",
          ja: "文を大きく表示し、どの単語もタップで辞書を引けます。読み終えた一文は保存——原文・訳文・出典に加えて、その部分の音声もそのまま残ります。",
          es: "La frase se amplía y cada palabra se puede tocar, con su definición a un solo toque. Cuando termines, guarda la línea: texto, traducción, procedencia y el fragmento de audio real.",
          ko: "문장이 크게 확대되고 단어마다 누를 수 있으며, 뜻은 한 번만 누르면 나옵니다. 다 보고 나면 그 문장을 저장하세요 — 원문, 번역, 출처, 그리고 실제 음성 조각까지.",
        },
      },
    ],
  },

  /* ── ⑧ 功能：每块可以配一张图，image 留空就只显示文字 ─────────────────── */
  features: {
    title: { zh: "它到底做了什么", en: "What it actually does", ja: "実際にできること", es: "Qué hace exactamente", ko: "실제로 하는 일" },
    items: [
      {
        image: "", // 例："assets/media/feature-transcript.png"
        imageAlt: { zh: "字幕生成", en: "Transcript generation", ja: "字幕の生成", es: "Generación de transcripciones", ko: "자막 생성" },
        title: { zh: "每一集都有字幕", en: "Every episode comes with a transcript", ja: "どのエピソードにも字幕がある", es: "Todos los episodios llevan transcripción", ko: "모든 에피소드에 자막이 붙습니다" },
        body: {
          zh: "不看发布方给不给，也不用等：支持的九门语言里，字幕由你的手机自己转出来。字幕跟着音频一句句出现，点一句就跳过去，正在念的那句一直亮着——跟读的高亮只用明暗：已经念过的字变白（浅色配色里是近黑），颜色在这个 App 里另有用处，是查过的词、搜索命中和已收藏的记号。",
          en: "It doesn't matter whether the publisher shipped one, and you don't sit around waiting: in the nine supported languages your phone transcribes the episode itself. Lines appear as the audio moves, the current one stays lit, and tapping a line takes you straight there — the read-along highlight is light and dark only: spoken words turn white (near-black in the light themes). Colour is reserved for marks: words you looked up, search hits, sentences you saved.",
          ja: "配信側が用意しているかどうかに左右されず、待たされることもありません。対応する 9 言語なら、端末自身が文字起こしします。音声に合わせて一文ずつ現れ、いま読まれている行は常に光り、タップすればそこへ飛べます。読み上げ位置の強調は明暗だけ——読み終えた語が白く（ライト系の配色では黒に近く）なります。色は別の役目、引いた単語・検索ヒット・保存した一文の目印です。",
          es: "Da igual si quien lo publica incluyó una, y no tienes que quedarte esperando: en los nueve idiomas admitidos, tu propio teléfono transcribe el episodio. Las líneas aparecen a medida que avanza el audio, la actual permanece resaltada y, al tocar una, vas directo a ese punto. El resaltado de lectura usa solo claro y oscuro: las palabras ya dichas se vuelven blancas (casi negras en los temas claros). El color se reserva para las marcas: palabras consultadas, coincidencias de búsqueda y frases guardadas.",
          ko: "발행자가 자막을 넣었는지는 상관없고, 기다리고 있을 필요도 없습니다. 지원하는 아홉 개 언어라면 기기가 직접 받아씁니다. 오디오가 흐르는 대로 문장이 나타나고 지금 읽는 문장은 계속 밝게 남으며, 문장을 누르면 곧바로 그 지점으로 갑니다. 따라 읽는 강조는 밝기만으로 표시합니다 — 이미 읽은 단어가 하얗게(밝은 배색에서는 검정에 가깝게) 바뀝니다. 색은 다른 일을 맡습니다: 찾아본 단어, 검색 결과, 저장한 문장의 표시입니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "逐句译文", en: "Inline translation", ja: "対訳", es: "Traducción intercalada", ko: "문장별 번역" },
        title: { zh: "译文夹在原文下面", en: "The translation sits under the original", ja: "訳文は原文のすぐ下に", es: "La traducción va justo debajo del original", ko: "번역이 원문 아래에 붙습니다" },
        body: {
          zh: "就地一开，整集都成了对照：原文一句，译文一句。21 种目标语言，默认关着——需要的时候它才出现。",
          en: "Turn it on where you are and the whole episode becomes bilingual: a line of source, a line of translation. 21 target languages, off by default — it shows up only when you want it.",
          ja: "その場でオンにすれば、エピソード全体が原文と訳文の二段になります。対象言語は 21。既定はオフで、必要なときだけ現れます。",
          es: "Actívala sin salir de la pantalla y el episodio entero se vuelve bilingüe: una línea de origen, una de traducción. 21 idiomas de destino, desactivada por defecto: solo aparece cuando la quieres.",
          ko: "그 자리에서 켜면 에피소드 전체가 대조판이 됩니다. 원문 한 줄, 번역 한 줄. 21개 대상 언어를 지원하며 기본은 꺼짐 — 필요할 때만 나타납니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "查词与注音", en: "Lookup and furigana", ja: "辞書引きとふりがな", es: "Diccionario y furigana", ko: "단어 찾기와 후리가나" },
        title: { zh: "点一个词，就懂一个词", en: "Tap one word, get that one word", ja: "単語をタップして、その語が分かる", es: "Toca una palabra y entiende esa palabra", ko: "단어 하나를 누르면, 그 단어를 알게 됩니다" },
        body: {
          zh: "整句放大，英语、中文、日语的每个词都能点，点了就告诉你它是什么意思。日语的汉字自动标上振假名——不用先会读，才看得懂。",
          en: "The sentence is blown up large and, in English, Chinese and Japanese, every word is tappable — tap one and it tells you what it means. Japanese kanji come with furigana, so you don't have to know the reading first.",
          ja: "文を大きく表示し、英語・中国語・日本語ではどの単語もタップ可能。タップすればその語の意味が分かります。日本語の漢字にはふりがな付きなので、読めなくても大丈夫です。",
          es: "La frase se amplía y, en inglés, chino y japonés, cada palabra se puede tocar: tócala y te dice qué significa. Los kanji japoneses llevan furigana, así que no necesitas saber la lectura de antemano.",
          ko: "문장이 크게 확대되고 영어·중국어·일본어에서는 단어마다 누를 수 있습니다. 누르면 뜻을 알려 줍니다. 일본어 한자에는 후리가나가 자동으로 붙어, 읽는 법을 먼저 알지 않아도 됩니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "收藏的句子", en: "Saved sentences", ja: "保存した一文", es: "Frases guardadas", ko: "저장한 문장" },
        title: { zh: "收藏的是一句话，不是一段文字", en: "You save a sentence, not a snippet of text", ja: "保存されるのは「一文」", es: "Guardas una frase, no un trozo de texto", ko: "저장되는 건 텍스트 조각이 아니라 한 문장입니다" },
        body: {
          zh: "★ 一下，原文、译文、出处和一段真实语音切片一起存下来。之后退订节目、删掉下载，这句话和它的声音都还在。",
          en: "One tap stores the line, its translation, where it came from, and a clip of the real audio. Unsubscribe from the show or delete the download later — the sentence and its sound stay.",
          ja: "★ を一度押せば、原文・訳文・出典、そして実際の音声の切り抜きまで保存されます。番組の購読をやめても、ダウンロードを削除しても、その一文と音声は残ります。",
          es: "Un toque guarda la línea, su traducción, de dónde salió y un fragmento del audio real. Aunque después dejes de seguir el programa o borres la descarga, la frase y su sonido siguen ahí.",
          ko: "한 번 누르면 문장과 번역, 출처, 그리고 실제 음성 조각이 함께 저장됩니다. 나중에 그 팟캐스트를 구독 취소하거나 다운로드를 지워도, 그 문장과 소리는 남아 있습니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "词汇量与复习", en: "Vocabulary and review", ja: "語彙と復習", es: "Vocabulario y repaso", ko: "어휘량과 복습" },
        title: { zh: "词自己会分类，不用你记", en: "Words sort themselves as you go", ja: "単語はひとりでに仕分けされる", es: "Las palabras se ordenan solas", ko: "단어는 알아서 분류됩니다" },
        body: {
          zh: "查过一次的词就永久变成「学习中」，跨天答对两次才算「学会」。复听、选择题和听音拼写，材料全部来自你自己收藏的句子。",
          en: "Look a word up once and it moves to “learning” for good; two correct answers on different days graduate it to “known”. Everything you review, get quizzed on, or spell by ear comes from sentences you saved.",
          ja: "一度でも辞書を引いた語は、その時点で「学習中」になります。日をまたいで二回正解して初めて「習得」。復習も選択問題も聞き取り書き取りも、素材はあなたが保存した文だけです。",
          es: "Buscar una palabra una vez la deja en «aprendiendo» para siempre; dos aciertos en días distintos la dan por sabida. Todo lo que repasas, lo que te preguntan y lo que escribes de oído sale de las frases que guardaste.",
          ko: "한 번 찾아본 단어는 그 자리에서 영구히 ‘학습 중’이 되고, 서로 다른 날에 두 번 맞혀야 ‘아는 단어’가 됩니다. 복습도, 문제도, 듣고 받아쓰기도 재료는 오직 직접 저장한 문장에서 나옵니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "起步词包", en: "Starter word packs", ja: "スターター単語パック", es: "Paquetes de palabras iniciales", ko: "입문 단어 팩" },
        title: { zh: "还没听够的时候，有一份垫脚石", en: "A stepping stone for before you've listened enough", ja: "まだ聴き足りないうちの、踏み台", es: "Un peldaño para cuando aún no has escuchado bastante", ko: "아직 충분히 듣지 못했을 때를 위한 디딤돌" },
        body: {
          zh: "刚装上 App 的第一天，收藏夹是空的。所以内置了一份起步词包：英语六千个词，日语、中文、西班牙语、法语各五千上下，一关十个。\n顺序是「越常用越靠前」；日语和中文还叠上了 JLPT 与 HSK 的级别，于是最基础的那批真的排在最前面。每个词尽量给它自己语言里的解释，而不是从英语转一道手。\n它只解决「材料还不够时这一屏是空的」——不是一门课程。",
          en: "On day one your saved sentences are empty. So a starter pack ships with the app: 6,000 English words, and around 5,000 each for Japanese, Chinese, Spanish and French, ten to a set.\nThe order puts the most common first; for Japanese and Chinese the JLPT and HSK levels are folded in on top, so the genuinely basic words really do come first. Each word is explained in its own language wherever we can, rather than routed through English.\nIt exists only to fix “this screen is empty until you've listened enough” — it isn't a course.",
          ja: "入れた初日、保存した文はまだ一つもありません。そこで起点になる単語パックを同梱しています。英語 6,000 語、日本語・中国語・スペイン語・フランス語は各 5,000 語ほど、1 セット 10 語。\n並び順は「よく使うものほど前」。日本語と中国語にはさらに JLPT と HSK の級を重ねてあるので、本当に基礎的な語が先に来ます。語義はできるかぎりその言語自身の説明を使い、英語を経由しません。\n目的は「材料がたまるまでこの画面が空になる」ことの解消だけで、講座ではありません。",
          es: "El primer día, tus frases guardadas están vacías. Por eso la app trae un paquete inicial: 6.000 palabras en inglés y unas 5.000 en japonés, chino, español y francés, de diez en diez.\nEl orden pone delante lo más frecuente; en japonés y chino se superponen además los niveles del JLPT y del HSK, así que lo verdaderamente básico va primero. Cada palabra se explica en su propio idioma siempre que podemos, en vez de pasar por el inglés.\nSolo existe para resolver «esta pantalla está vacía hasta que hayas escuchado bastante»: no es un curso.",
          ko: "설치한 첫날에는 저장한 문장이 하나도 없습니다. 그래서 입문 단어 팩을 함께 넣었습니다. 영어 6,000단어, 일본어·중국어·스페인어·프랑스어는 각각 5,000단어 안팎, 한 세트에 열 개씩.\n순서는 자주 쓰는 것부터. 일본어와 중국어에는 JLPT와 HSK의 급수까지 얹어서, 정말 기초적인 단어가 앞에 옵니다. 뜻풀이는 가능한 한 그 언어 자체의 설명을 쓰고, 영어를 거치지 않습니다.\n‘재료가 쌓이기 전까지 이 화면이 비어 있는’ 문제만 해결할 뿐, 강좌는 아닙니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "字幕外观", en: "Reading appearance", ja: "字幕の見た目", es: "Aspecto de la lectura", ko: "자막 모양새" },
        title: { zh: "这一页长什么样，你自己定", en: "You decide what this page looks like", ja: "この画面の見た目は、あなたが決める", es: "Tú decides cómo se ve esta página", ko: "이 화면이 어떻게 보일지는 당신이 정합니다" },
        body: {
          zh: "五套配色（连调色的面板自己都跟着变）、当前句底色六档——包括完全不高亮、背景暗度可以自己推、字号跟随系统的动态字体、注音开关、译文只给当前句还是整集都给。\n这些都在播放页就地弹出的一条小面板里：它只占屏幕下面一小条，上半页的字幕全程看得见，背后还能继续滚——边调边看，不用来回切页面。",
          en: "Five colour themes (the panel you're adjusting changes with them), six choices for the current line's background — including no highlight at all, a slider for how deep the background goes, type that follows Dynamic Type, phonetic readings on or off, and translation for just the current line or the whole episode.\nAll of it lives in a small panel that opens right on the player. It takes only a strip at the bottom, the transcript above stays visible the whole time, and the page behind keeps scrolling — you adjust while you watch, without jumping between screens.",
          ja: "配色 5 種類（調整中のパネル自身も一緒に変わります）、現在の行の背景は 6 段階——まったく光らせない選択肢も含みます。背景の濃さはスライダーで、文字サイズはダイナミックタイプ追従、ふりがなのオン／オフ、訳文は現在の行だけか全文か。\nいずれも再生画面にその場で開く小さなパネルの中にあります。占めるのは画面下の一帯だけで、上半分の字幕はずっと見えたまま、背後もそのままスクロールできます。画面を行き来せずに、見ながら調整できます。",
          es: "Cinco combinaciones de color (el propio panel que estás ajustando cambia con ellas), seis opciones para el fondo de la línea actual —incluida la de no resaltarla en absoluto—, un control para la profundidad del fondo, texto que sigue al Texto Dinámico, lecturas fonéticas que se activan o desactivan, y traducción solo de la línea actual o de todo el episodio.\nTodo está en un panel pequeño que se abre sobre el propio reproductor. Ocupa apenas una franja inferior, la transcripción de arriba sigue visible todo el rato y detrás se puede seguir desplazando: ajustas mientras miras, sin saltar de pantalla en pantalla.",
          ko: "다섯 가지 배색(조절하고 있는 패널 자체도 함께 바뀝니다), 현재 문장의 배경은 여섯 가지 — 아예 강조하지 않는 선택지까지 포함합니다. 배경 농도는 슬라이더로, 글자 크기는 동적 타입을 따르고, 발음 표기는 켜고 끌 수 있으며, 번역은 현재 문장만 볼지 전체를 볼지 고를 수 있습니다.\n모두 재생 화면에서 바로 열리는 작은 패널 안에 있습니다. 화면 아래 한 줄만 차지해서 위쪽 자막은 내내 보이고, 뒤쪽도 그대로 스크롤됩니다 — 화면을 오가지 않고 보면서 조절합니다.",
        },
      },
      {
        image: "",
        imageAlt: { zh: "播客基本功能", en: "Podcast basics", ja: "ポッドキャストの基本機能", es: "Lo esencial de un pódcast", ko: "팟캐스트 기본기" },
        title: { zh: "一个不将就的播客客户端", en: "A podcast client that doesn't cut corners", ja: "妥協のないポッドキャストクライアント", es: "Un cliente de pódcast que no se queda a medias", ko: "타협하지 않은 팟캐스트 클라이언트" },
        body: {
          zh: "订阅任意 RSS、目录搜索与地区榜单、跨节目自建列表、播放队列、边听边下与离线播放、锁屏与控制中心、跨启动续播、睡眠定时（也可以设成「播完这一集」）、快进快退跳几秒自己定。一集播完队列又空了，就接着播这个节目的下一集，播到头就停，听过的跳过。这些是基石，不是附赠。",
          en: "Subscribe to any RSS feed, search the directory, browse regional charts, build playlists across shows, queue episodes, download while you listen and play offline, control from the lock screen, resume across launches, set a sleep timer (or let it stop at the end of the episode), and pick how far the skip buttons jump. When an episode ends and the queue is empty, the next one from the same show follows on — skipping what you've heard, stopping at the end. This is the foundation, not a bonus.",
          ja: "任意の RSS 購読、ディレクトリ検索と地域別ランキング、番組をまたぐ自作リスト、再生キュー、聴きながらのダウンロードとオフライン再生、ロック画面とコントロールセンター、起動をまたぐレジューム、スリープタイマー（「このエピソードの終わりまで」も選べます）、スキップ秒数の変更。一本終わってキューも空なら、同じ番組の次の一本へ続きます——聴いたものは飛ばし、端まで来たら止まります。おまけではなく土台です。",
          es: "Suscríbete a cualquier RSS, busca en el directorio, explora las listas por región, crea listas propias entre programas, encola episodios, descarga mientras escuchas y reproduce sin conexión, controla desde la pantalla bloqueada, retoma donde lo dejaste, pon un temporizador de apagado (o deja que pare al acabar el episodio) y elige cuántos segundos saltan los botones. Cuando un episodio termina y la cola está vacía, sigue el siguiente del mismo programa: salta lo que ya escuchaste y se detiene al llegar al final. Esto es la base, no un extra.",
          ko: "어떤 RSS든 구독하고, 디렉터리를 검색하고, 지역 차트를 둘러보고, 여러 팟캐스트를 넘나드는 재생목록을 만들고, 대기열에 넣고, 들으면서 내려받아 오프라인으로도 듣고, 잠금 화면에서 제어하고, 앱을 다시 켜도 이어 듣습니다. 취침 타이머도 있고(‘이 에피소드 끝까지’도 고를 수 있습니다), 건너뛰기 초는 직접 정합니다. 한 편이 끝나고 대기열도 비면 같은 팟캐스트의 다음 편으로 이어집니다 — 이미 들은 건 건너뛰고, 끝에 닿으면 멈춥니다. 이건 덤이 아니라 기반입니다.",
        },
      },
    ],
  },

  /* ── ⑨ 截图画廊：加一张就往数组里加一条；空数组 = 整个区块不显示 ────────── */
  gallery: {
    title: { zh: "界面", en: "Screens", ja: "画面", es: "Pantallas", ko: "화면" },
    lead: { zh: "深浅两套配色跟随系统。", en: "Light and dark, following the system.", ja: "ライト／ダークはシステムに追従します。", es: "Claro y oscuro, siguiendo al sistema.", ko: "라이트/다크 모드는 시스템을 따릅니다." },
    // ⚠️ caption 可以不写（`site.js` 里判了 `if (cap)`），不写就只有图没有说明。
    //    下面 shot-1…9 的 caption 是空的，**填之前请自己看一眼图**——
    //    它们是按截图时间排的，顺序未必是想给人看的顺序。
    // ⚠️ 三种语言缺一种会静默回落到中文（`MAINTAINING.md` 那条）。
    // ⚠️ **整块先关掉**（2026-08-25）：那 9 张已经摆在首屏了，
    //    两处摆同一批是重复。`items` 空着这一区就整块不显示（site.js 判了 length）。
    //    要恢复：把下面的注释解开，并把 nav 里「截图」那一条也解开。
    items: [
      // {
      //   src: "assets/media/screenshot-player.png",
      //   caption: { zh: "播放页 · 字幕与译文", en: "Player · transcript and translation", ja: "再生画面・字幕と訳文", es: "Reproductor · transcripción y traducción", ko: "재생 화면 · 자막과 번역" },
      // },
      // { src: "assets/media/shot-1.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-2.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-3.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-4.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-5.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-6.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-7.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-8.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
      // { src: "assets/media/shot-9.png", caption: { zh: "", en: "", ja: "", es: "", ko: "" } },
    ],
  },

  /* ── ⑩ 视频：src 填上才显示；poster 是封面图，可留空 ───────────────────── */
  video: {
    src: "", // 例："assets/media/demo.mp4"
    poster: "",
    title: { zh: "看它跑起来", en: "See it running", ja: "動いているところ", es: "Míralo en marcha", ko: "실제로 움직이는 모습" },
    lead: { zh: "", en: "", ja: "", es: "", ko: "" },
  },

  /* ── ⑪ 关于 ───────────────────────────────────────────────────────────── */
  notes: {
    title: { zh: "几件该说在前面的事", en: "A few things worth saying up front", ja: "先に伝えておきたいこと", es: "Algunas cosas que conviene decir de entrada", ko: "먼저 말해 두고 싶은 것들" },
    items: [
      {
        title: { zh: "全在 App 内完成", en: "It all happens inside the app", ja: "すべてアプリ内で完結", es: "Todo ocurre dentro de la app", ko: "모든 처리는 앱 안에서" },
        body: {
          zh: "字幕相关的一切都在 App 内完成，不需要服务端，也不需要注册账号。你听的东西不会被交给任何人。",
          en: "Everything around the transcript happens inside the app — no server involved, no account to create. What you listen to isn't handed to anyone.",
          ja: "字幕まわりの処理はすべてアプリ内で完結します。サーバーもアカウント登録も不要。聴いている内容が誰かに渡ることはありません。",
          es: "Todo lo relacionado con la transcripción ocurre dentro de la app: sin servidor de por medio y sin cuenta que crear. Lo que escuchas no se le entrega a nadie.",
          ko: "자막과 관련된 모든 처리는 앱 안에서 끝납니다. 서버도, 계정 등록도 필요 없습니다. 무엇을 듣는지는 누구에게도 넘어가지 않습니다.",
        },
      },
      {
        title: { zh: "语言范围", en: "Language coverage", ja: "対応言語", es: "Idiomas cubiertos", ko: "지원 언어 범위" },
        body: {
          zh: "字幕由设备自己生成，支持九门：英语、日语、韩语、中文、西班牙语、法语、德语、意大利语、葡萄牙语。这九门之外的节目不给你生成一份读不通的字幕，界面上会直接说清楚。\n译文有 21 种目标语言。原句里的词都能点开查义；日语的汉字自动标振假名，中文标拼音。可以设成「在学」的语言就是上面那九门。",
          en: "Transcripts are generated on the device and cover nine languages: English, Japanese, Korean, Chinese, Spanish, French, German, Italian and Portuguese. For anything else the app won't hand you a transcript that doesn't hold together — it says so plainly instead.\nTranslation offers 21 target languages. Words in the original line are tappable for a definition; Japanese kanji get furigana and Chinese gets pinyin. The language you set as the one you're learning comes from the same nine.",
          ja: "字幕は端末側で生成し、対応は 9 言語——英語・日本語・韓国語・中国語・スペイン語・フランス語・ドイツ語・イタリア語・ポルトガル語。それ以外の番組には、意味の通らない字幕を無理に作らず、その旨をはっきり表示します。\n訳文の対象言語は 21。原文の単語はタップで意味を引け、日本語の漢字にはふりがな、中国語にはピンインが付きます。「学習中の言語」に設定できるのは上の 9 言語です。",
          es: "Las transcripciones se generan en el propio dispositivo y cubren nueve idiomas: inglés, japonés, coreano, chino, español, francés, alemán, italiano y portugués. Para lo demás, la app no te entrega una transcripción que no se sostiene: lo dice claramente.\nLa traducción ofrece 21 idiomas de destino. Las palabras del original se pueden tocar para ver su significado; los kanji japoneses llevan furigana y el chino, pinyin. El idioma que fijas como el que estás aprendiendo sale de esos mismos nueve.",
          ko: "자막은 기기에서 직접 만들며 아홉 개 언어를 지원합니다 — 영어, 일본어, 한국어, 중국어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어. 그 밖의 팟캐스트에는 말이 되지 않는 자막을 억지로 만들지 않고, 그 사실을 화면에 분명히 알려 줍니다.\n번역은 21개 대상 언어를 지원합니다. 원문의 단어는 눌러서 뜻을 볼 수 있고, 일본어 한자에는 후리가나, 중국어에는 병음이 붙습니다. ‘배우는 중인 언어’로 지정할 수 있는 것도 위의 아홉 개입니다.",
        },
      },
      {
        title: { zh: "界面语言", en: "Interface language", ja: "表示言語", es: "Idioma de la interfaz", ko: "인터페이스 언어" },
        body: {
          zh: "简体中文 / English / 日本語 / 한국어 / Español / Français，跟你要学的语言是两件事，互不影响。",
          en: "简体中文 / English / 日本語 / 한국어 / Español / Français — chosen independently of the language you're learning.",
          ja: "简体中文 / English / 日本語 / 한국어 / Español / Français。学習対象の言語とは別に選べます。",
          es: "简体中文 / English / 日本語 / 한국어 / Español / Français: se elige aparte del idioma que estés aprendiendo.",
          ko: "简体中文 / English / 日本語 / 한국어 / Español / Français — 배우려는 언어와는 별개로 고를 수 있습니다.",
        },
      },
      {
        title: { zh: "运行环境", en: "Requirements", ja: "動作環境", es: "Requisitos", ko: "실행 환경" },
        body: {
          zh: "iPhone，iOS 26 或更新版本。",
          en: "iPhone, iOS 26 or later.",
          ja: "iPhone、iOS 26 以降。",
          es: "iPhone con iOS 26 o posterior.",
          ko: "iPhone, iOS 26 이상.",
        },
      },
    ],
  },

  /* ── ⑫ 结尾与页脚 ─────────────────────────────────────────────────────── */
  closing: {
    title: { zh: "下次通勤的那半小时，\n可以顺手带走几个词", en: "The next half hour of your commute\ncan leave you a few words richer", ja: "次の通勤の三十分で、\n単語をいくつか持ち帰る", es: "La próxima media hora de trayecto\npuede dejarte unas cuantas palabras más", ko: "다음 출퇴근길 30분에\n단어 몇 개쯤은 챙겨 올 수 있습니다" },
  },
  footer: {
    // 留空这一行就不显示；想在页脚说句话就填进来
    line: { zh: "", en: "", ja: "", es: "", ko: "" },
    links: [
      { href: "terms.html", label: { zh: "使用条款", en: "Terms", ja: "利用規約", es: "Términos", ko: "이용약관" } },
      { href: "privacy.html", label: { zh: "隐私政策", en: "Privacy", ja: "プライバシー", es: "Privacidad", ko: "개인정보" } },
    ],
  },

  /* ── ⑫-2 使用条款 / 隐私政策 ───────────────────────────────────────────
   *  两页共用 index.html 那套壳，正文全在这里。⚠️ 三种语言都要填。
   *  ⚠️ body 里用 \n 分段，**不写 HTML**——渲染时按纯文本一段一个 <p>。
   *  ⚠️ 改了内容记得把 updated 也改掉：那个日期是「这一版从什么时候算」，
   *     不改的话等于对外说条款没变过。
   * --------------------------------------------------------------------- */
  legal: {
    updated: "2026-08-24",
    updatedLabel: { zh: "最后更新", en: "Last updated", ja: "最終更新", es: "Última actualización", ko: "최종 수정" },
    back: { zh: "← 回到首页", en: "← Back to home", ja: "← ホームに戻る", es: "← Volver al inicio", ko: "← 홈으로 돌아가기" },

    terms: {
      title: { zh: "使用条款", en: "Terms of Use", ja: "利用規約", es: "Términos de uso", ko: "이용약관" },
      intro: {
        zh: "下面这些是使用 {name} 时我们之间的约定。写得尽量短，也尽量说人话。",
        en: "These are the terms you agree to when you use {name}. Kept short, and in plain language.",
        ja: "{name} をお使いいただく際の取り決めです。できるだけ短く、わかりやすく書きました。",
        es: "Estos son los términos que aceptas al usar {name}. Cortos y en lenguaje claro.",
        ko: "{name}을 사용할 때 적용되는 약속입니다. 되도록 짧게, 되도록 쉬운 말로 적었습니다.",
      },
      sections: [
        {
          title: { zh: "这个 App 是什么", en: "What this app is", ja: "このアプリについて", es: "Qué es esta app", ko: "이 앱은 무엇인가" },
          body: {
            zh: "{name} 是一个播客客户端，附带一些帮你听懂的工具。\n你在里面听到的节目来自你自己添加的公开 RSS 源，内容的版权与责任都归各自的发布者。我们既不拥有它们，也不代表它们说话。",
            en: "{name} is a podcast client with a few tools that help you follow along.\nThe shows you hear come from public RSS feeds you added yourself. Their content, and the responsibility for it, belongs to whoever publishes them — we neither own those shows nor speak for them.",
            ja: "{name} は、聞き取りを助けるいくつかの機能を備えたポッドキャストクライアントです。\n再生される番組は、あなた自身が追加した公開 RSS フィードから届きます。その内容と責任は各配信者に属します。当方はそれらを所有しておらず、代弁する立場でもありません。",
            es: "{name} es un cliente de pódcast con algunas herramientas que te ayudan a seguir lo que escuchas.\nLos programas que oyes vienen de fuentes RSS públicas que añadiste tú. Su contenido, y la responsabilidad sobre él, pertenecen a quien los publica: ni somos dueños de esos programas ni hablamos en su nombre.",
            ko: "{name}은 듣는 내용을 따라가도록 돕는 몇 가지 도구가 붙은 팟캐스트 클라이언트입니다.\n여기서 듣는 방송은 직접 추가한 공개 RSS에서 옵니다. 그 콘텐츠의 저작권과 책임은 각 발행자에게 있으며, 저희는 그 방송을 소유하지도, 대변하지도 않습니다.",
          },
        },
        {
          title: { zh: "机器写出来的那部分", en: "The parts a machine writes", ja: "機械が書いている部分", es: "Lo que escribe una máquina", ko: "기계가 만들어 낸 부분" },
          body: {
            zh: "字幕、注音和译文是设备当场生成的，它们会出错——人名可能听岔，汉字可能注错音，一句话可能翻得松。我们会一直往更准的方向调，但对它们的准确性、完整性和是否适合你的用途，不作保证。\n把它们当作阅读时的旁注比较合适。用在考试、正式翻译、发表或者其他要紧的场合之前，请自己再核一遍。",
            en: "Transcripts, phonetic readings, and translations are produced on the spot by your device, and they will sometimes be wrong — a name misheard, a character given the wrong reading, a sentence rendered loosely. We keep working to make them better, but we make no warranty as to their accuracy, completeness, or fitness for your purpose.\nThey work best as notes in the margin. Before relying on them for an exam, a professional translation, something you publish, or anything else that matters, please check for yourself.",
            ja: "字幕・ふりがな・翻訳は端末上でその場で生成されるため、誤りが含まれます。人名の聞き間違い、漢字の読み間違い、訳文のずれなどが起こり得ます。改善は続けますが、その正確性・完全性・目的への適合性について保証はいたしかねます。\n読みながらの手がかり、という距離感でお使いください。試験・正式な翻訳・公開する文章など、確かさが要る場面では、ご自身での確認をお願いします。",
            es: "Las transcripciones, las lecturas fonéticas y las traducciones las genera tu dispositivo en el momento, y a veces se equivocan: un nombre mal oído, un carácter con la lectura equivocada, una frase traducida con holgura. Seguimos trabajando para afinarlas, pero no garantizamos su exactitud, su integridad ni su idoneidad para tu propósito.\nFuncionan mejor como notas al margen. Antes de apoyarte en ellas para un examen, una traducción profesional, algo que vayas a publicar o cualquier otra cosa que importe, compruébalo por tu cuenta.",
            ko: "자막, 발음 표기, 번역은 기기가 그 자리에서 만들어 내며 틀릴 때가 있습니다. 이름을 잘못 알아듣거나, 한자를 다르게 읽거나, 문장을 느슨하게 옮기기도 합니다. 계속 더 정확해지도록 손보고 있지만, 정확성·완전성·목적 적합성에 대해서는 보증하지 않습니다.\n읽을 때 곁에 두는 메모 정도로 쓰는 것이 알맞습니다. 시험, 정식 번역, 공개할 글처럼 중요한 곳에 쓰기 전에는 직접 한 번 더 확인해 주세요.",
          },
        },
        {
          title: { zh: "会员订阅", en: "Membership", ja: "メンバーシップ", es: "Suscripción", ko: "멤버십" },
          body: {
            zh: "会员通过 App Store 购买，到期自动续订，除非你在当期结束前至少 24 小时关掉它。\n管理和取消都在 iPhone 的「设置 → Apple ID → 订阅」里，我们这边没有另一套开关。价格、时长和试用条件，以你购买那一刻 App Store 上显示的为准。",
            en: "Membership is purchased through the App Store and renews automatically unless you turn it off at least 24 hours before the current period ends.\nManaging and cancelling both happen in Settings → Apple ID → Subscriptions on your iPhone; there is no separate switch on our side. Price, duration, and any trial terms are whatever the App Store shows you at the moment you subscribe.",
            ja: "メンバーシップは App Store を通じてご購入いただき、期間終了の 24 時間前までに解除しない限り自動更新されます。\n管理と解約は iPhone の「設定 → Apple ID → サブスクリプション」で行えます。当方側に別の窓口はありません。価格・期間・体験条件は、ご購入時に App Store に表示されるものが適用されます。",
            es: "La suscripción se compra a través del App Store y se renueva automáticamente salvo que la desactives al menos 24 horas antes de que termine el periodo en curso.\nGestionarla y cancelarla se hace en Ajustes → Apple ID → Suscripciones en tu iPhone; por nuestra parte no hay ningún otro interruptor. El precio, la duración y las condiciones de prueba son los que el App Store te muestre en el momento de suscribirte.",
            ko: "멤버십은 App Store를 통해 구매하며, 현재 기간이 끝나기 최소 24시간 전에 끄지 않으면 자동으로 갱신됩니다.\n관리와 해지는 iPhone의 설정 → Apple ID → 구독에서 합니다. 저희 쪽에 별도의 스위치는 없습니다. 가격, 기간, 체험 조건은 구매하는 시점에 App Store에 표시되는 내용을 따릅니다.",
          },
        },
        {
          title: { zh: "怎么用它", en: "How to use it", ja: "ご利用にあたって", es: "Cómo usarla", ko: "이용 방법" },
          body: {
            zh: "请在法律允许的范围内使用，也请尊重各家播客为自己内容定下的规矩。\nApp 里的下载和句子切片，是为了你自己听和学而做的，不适合再分发。",
            en: "Please use it within the law, and respect the terms each podcast sets for its own content.\nDownloads and sentence clips exist so that you can listen and study; they aren't meant to be passed along.",
            ja: "法令の範囲内でご利用ください。また、各ポッドキャストが定める利用条件を尊重してください。\nダウンロードや文単位の音声切り出しは、ご自身が聴いて学ぶための機能です。再配布には向きません。",
            es: "Úsala dentro de lo que permite la ley y respeta las condiciones que cada pódcast fija para su propio contenido.\nLas descargas y los fragmentos de frases existen para que escuches y estudies; no están pensados para redistribuirse.",
            ko: "법이 허용하는 범위에서 사용해 주시고, 각 팟캐스트가 자기 콘텐츠에 대해 정한 규칙을 존중해 주세요.\n다운로드와 문장 음성 조각은 직접 듣고 공부하기 위한 것이며, 다시 배포하기에 적합하지 않습니다.",
          },
        },
        {
          title: { zh: "会有变动", en: "Things will change", ja: "変更について", es: "Las cosas cambiarán", ko: "바뀌는 것들" },
          body: {
            zh: "功能、价格和这份条款都可能随版本调整。要紧的变动会更新到这一页；继续使用即表示接受更新后的版本。",
            en: "Features, pricing, and these terms may change from one release to the next. Anything significant will be updated on this page, and continuing to use the app means you accept the current version.",
            ja: "機能・価格・本規約は、バージョンによって変わることがあります。重要な変更はこのページに反映します。ご利用を続けられた場合、更新後の内容に同意いただいたものとみなします。",
            es: "Las funciones, los precios y estos términos pueden cambiar de una versión a otra. Lo importante se actualizará en esta página, y seguir usando la app significa aceptar la versión vigente.",
            ko: "기능, 가격, 그리고 이 약관은 버전에 따라 바뀔 수 있습니다. 중요한 변경은 이 페이지에 반영하며, 계속 사용하시면 갱신된 내용에 동의한 것으로 봅니다.",
          },
        },
        {
          title: { zh: "最终解释", en: "Interpretation", ja: "解釈について", es: "Interpretación", ko: "최종 해석" },
          body: {
            zh: "本条款由 {name} 的开发者拟定，并保留最终解释权。各语言版本如有出入，以中文版为准。",
            en: "These terms are written by the developer of {name}, who reserves the right of final interpretation. Where the language versions differ, the Chinese version governs.",
            ja: "本規約は {name} の開発者が定めるものであり、最終的な解釈権は開発者が有します。各言語版に相違がある場合は、中国語版を優先します。",
            es: "Estos términos los redacta el desarrollador de {name}, que se reserva el derecho de interpretación final. Si las versiones en distintos idiomas difieren, prevalece la versión en chino.",
            ko: "이 약관은 {name}의 개발자가 작성했으며, 최종 해석 권한은 개발자에게 있습니다. 언어별 판본이 서로 다를 경우 중국어판을 기준으로 합니다.",
          },
        },
        {
          title: { zh: "联系", en: "Getting in touch", ja: "お問い合わせ", es: "Contacto", ko: "문의" },
          body: {
            zh: "有疑问或者发现哪里不对，写信到 inmank99@gmail.com。",
            en: "Questions, or something looks wrong? Write to inmank99@gmail.com.",
            ja: "ご質問や不具合のご連絡は inmank99@gmail.com までお願いします。",
            es: "¿Dudas o algo que no cuadra? Escribe a inmank99@gmail.com.",
            ko: "궁금한 점이 있거나 잘못된 부분을 발견하셨다면 inmank99@gmail.com으로 보내 주세요.",
          },
        },
      ],
    },

    privacy: {
      title: { zh: "隐私政策", en: "Privacy Policy", ja: "プライバシーポリシー", es: "Política de privacidad", ko: "개인정보 처리방침" },
      intro: {
        zh: "一句话版本：{name} 没有服务器，也没有账号，你的东西留在你的设备上。下面是细节。",
        en: "The short version: {name} has no server and no accounts. Your things stay on your device. The details follow.",
        ja: "ひとことで言えば、{name} にはサーバーもアカウントもありません。あなたのデータは端末の中に留まります。以下が詳細です。",
        es: "En una frase: {name} no tiene servidor ni cuentas; tus cosas se quedan en tu dispositivo. Los detalles, a continuación.",
        ko: "한 줄 요약: {name}에는 서버도 계정도 없으며, 당신의 것은 당신 기기에 남습니다. 자세한 내용은 아래에 있습니다.",
      },
      sections: [
        {
          title: { zh: "我们不收集什么", en: "What we don't collect", ja: "収集しないもの", es: "Lo que no recogemos", ko: "수집하지 않는 것" },
          body: {
            zh: "没有账号，不用注册。没有统计埋点，没有广告，也没有任何第三方分析工具。\n我们这边没有一台服务器存着你的任何东西。",
            en: "No account, nothing to sign up for. No usage tracking, no ads, and no third-party analytics of any kind.\nThere is no server on our side holding anything of yours.",
            ja: "アカウントも登録も不要です。利用状況の計測、広告、第三者の分析ツールは一切使用していません。\nあなたのデータを保持するサーバーは、当方には存在しません。",
            es: "Sin cuenta y sin registro. Sin métricas de uso, sin publicidad y sin ninguna herramienta de análisis de terceros.\nPor nuestra parte no hay ningún servidor que guarde nada tuyo.",
            ko: "계정도, 가입 절차도 없습니다. 사용 통계 수집도, 광고도, 어떤 종류의 서드파티 분석 도구도 없습니다.\n저희 쪽에는 당신의 무언가를 담아 두는 서버가 한 대도 없습니다.",
          },
        },
        {
          title: { zh: "你的数据在哪儿", en: "Where your data lives", ja: "データの保存場所", es: "Dónde viven tus datos", ko: "데이터가 있는 곳" },
          body: {
            zh: "订阅列表、下载的音频、字幕、译文、收藏的句子和生词，全部存在这台设备上。\n如果你开着 iCloud 备份，它们会跟着系统备份一起走——那一段由 Apple 的规则管。",
            en: "Your subscriptions, downloaded audio, transcripts, translations, saved sentences, and saved words all live on this device.\nIf you have iCloud Backup switched on, they travel with the system backup, and that part is governed by Apple's rules.",
            ja: "購読リスト、ダウンロードした音声、字幕、翻訳、保存した文と単語は、すべてこの端末の中にあります。\niCloud バックアップを有効にしている場合はシステムのバックアップに含まれ、その部分は Apple の規定に従います。",
            es: "Tus suscripciones, el audio descargado, las transcripciones, las traducciones, las frases guardadas y las palabras guardadas viven todas en este dispositivo.\nSi tienes activada la copia de seguridad de iCloud, viajan con la copia del sistema, y esa parte se rige por las normas de Apple.",
            ko: "구독 목록, 내려받은 오디오, 자막, 번역, 저장한 문장과 단어는 모두 이 기기 안에 있습니다.\niCloud 백업을 켜 두었다면 시스템 백업과 함께 옮겨지며, 그 부분은 Apple의 규칙을 따릅니다.",
          },
        },
        {
          title: { zh: "App 会连哪些网", en: "What the app connects to", ja: "通信先", es: "A qué se conecta la app", ko: "앱이 접속하는 곳" },
          body: {
            zh: "只有两类：你添加的播客的 RSS、音频和封面；以及 Apple 的播客目录，用于搜索和榜单。\n这些请求直接从你的设备发往对方，对方会看到 IP 这类常规的访问信息。那不经过我们，我们也拿不到。",
            en: "Two kinds only: the RSS, audio, and artwork of the podcasts you added; and Apple's podcast directory, used for search and charts.\nThose requests go straight from your device to them, and they see the ordinary things a web request reveals, such as an IP address. None of it passes through us, and none of it reaches us.",
            ja: "通信は二種類だけです。あなたが追加したポッドキャストの RSS・音声・アートワークと、検索やランキングに使う Apple のポッドキャストディレクトリです。\nこれらの通信は端末から直接相手先へ送られ、相手先には IP アドレスなど通常の通信情報が伝わります。当方を経由することはなく、当方が取得することもありません。",
            es: "Solo dos cosas: el RSS, el audio y las portadas de los pódcast que añadiste; y el directorio de pódcast de Apple, para las búsquedas y las listas.\nEsas peticiones salen directamente de tu dispositivo hacia ellos, que ven lo habitual en cualquier petición web, como una dirección IP. Nada de eso pasa por nosotros ni nos llega.",
            ko: "두 가지뿐입니다. 직접 추가한 팟캐스트의 RSS·오디오·표지 이미지, 그리고 검색과 차트에 쓰이는 Apple의 팟캐스트 디렉터리입니다.\n이 요청들은 기기에서 상대방에게 곧바로 갑니다. 상대방은 IP 주소처럼 웹 요청에서 흔히 드러나는 정보를 보게 됩니다. 그 어느 것도 저희를 거치지 않고, 저희에게 오지도 않습니다.",
          },
        },
        {
          title: { zh: "用到的系统能力", en: "System features it uses", ja: "利用しているシステム機能", es: "Funciones del sistema que usa", ko: "사용하는 시스템 기능" },
          body: {
            zh: "转录、翻译、查词和朗读用的是 Apple 提供的设备端框架，处理在本机完成。\n这部分的具体行为遵循 Apple 自己的隐私政策。",
            en: "Transcription, translation, dictionary lookup, and speech all use Apple's on-device frameworks, and the work happens on the device itself.\nHow those behave is governed by Apple's own privacy policy.",
            ja: "文字起こし・翻訳・辞書・読み上げには Apple の端末内フレームワークを使用しており、処理は端末上で完結します。\nこれらの挙動については Apple 自身のプライバシーポリシーが適用されます。",
            es: "La transcripción, la traducción, la consulta del diccionario y la lectura en voz alta usan los frameworks en el dispositivo de Apple, y el procesamiento ocurre en el propio aparato.\nEl comportamiento de esa parte se rige por la política de privacidad de Apple.",
            ko: "전사, 번역, 사전 찾기, 음성 읽기는 Apple이 제공하는 온디바이스 프레임워크를 사용하며, 처리는 기기 안에서 이루어집니다.\n이 부분의 구체적인 동작은 Apple의 개인정보 처리방침을 따릅니다.",
          },
        },
        {
          title: { zh: "关于购买", en: "About purchases", ja: "購入について", es: "Sobre las compras", ko: "결제에 대하여" },
          body: {
            zh: "订阅由 App Store 处理。支付方式、账单信息这些我们看不到，App 只知道「当前有没有有效订阅」这一件事。",
            en: "Subscriptions are handled by the App Store. Payment methods and billing details are not visible to us; the app knows one thing only — whether a membership is currently active.",
            ja: "サブスクリプションは App Store が処理します。支払い方法や請求情報を当方が見ることはありません。アプリが知るのは「現在有効なメンバーシップがあるかどうか」だけです。",
            es: "Las suscripciones las gestiona el App Store. No vemos los métodos de pago ni los datos de facturación; la app solo sabe una cosa: si hay una suscripción activa en este momento.",
            ko: "구독은 App Store가 처리합니다. 결제 수단이나 청구 정보는 저희에게 보이지 않으며, 앱이 아는 것은 ‘지금 유효한 멤버십이 있는가’ 하나뿐입니다.",
          },
        },
        {
          title: { zh: "变动与联系", en: "Changes, and getting in touch", ja: "変更とお問い合わせ", es: "Cambios y contacto", ko: "변경과 문의" },
          body: {
            zh: "这份政策有变动会更新在这一页。有疑问写信到 inmank99@gmail.com。",
            en: "Any change to this policy will be posted on this page. Questions go to inmank99@gmail.com.",
            ja: "本ポリシーの変更はこのページに掲載します。ご質問は inmank99@gmail.com までお願いします。",
            es: "Cualquier cambio en esta política se publicará en esta página. Para dudas, escribe a inmank99@gmail.com.",
            ko: "이 방침이 바뀌면 이 페이지에 업데이트합니다. 궁금한 점은 inmank99@gmail.com으로 보내 주세요.",
          },
        },
      ],
    },
  },

  /* ── ⑬ 界面上的零碎词 ─────────────────────────────────────────────────── */
  ui: {
    themeToggle: { zh: "切换深浅色", en: "Toggle light or dark", ja: "ライト／ダークを切り替え", es: "Cambiar entre claro y oscuro", ko: "라이트/다크 전환" },
    langGroup: { zh: "选择语言", en: "Choose language", ja: "言語を選択", es: "Elegir idioma", ko: "언어 선택" },
    skip: { zh: "跳到正文", en: "Skip to content", ja: "本文へスキップ", es: "Ir al contenido", ko: "본문으로 건너뛰기" },
  },
};
