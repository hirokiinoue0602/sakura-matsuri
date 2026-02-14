import {
  CalendarDays,
  Clock,
  MapPin,
  Music,
  Gamepad2,
  Wrench,
  UtensilsCrossed,
  Plane,
  Gift,
  AlertTriangle,
  ChevronDown,
  Bike,
  Ban,
  CloudRain,
} from "lucide-react";
import { ShareButton, ShareButtonAlt } from "./share-button";

/* ────────────────────────────────────────
   桜の花びら SVG コンポーネント
──────────────────────────────────────── */
function SakuraPetal({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z" />
      <path
        d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
        transform="rotate(72 12 12)"
      />
      <path
        d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
        transform="rotate(144 12 12)"
      />
      <path
        d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
        transform="rotate(216 12 12)"
      />
      <path
        d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
        transform="rotate(288 12 12)"
      />
      <circle cx="12" cy="12" r="2.5" fill="#f7b8c4" />
    </svg>
  );
}

/* ────────────────────────────────────────
   セクション見出し
──────────────────────────────────────── */
function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8" id={id}>
      <SakuraPetal className="text-sakura-300" size={24} />
      <h2 className="text-2xl md:text-3xl font-bold text-sakura-800 text-center">
        {children}
      </h2>
      <SakuraPetal className="text-sakura-300" size={24} />
    </div>
  );
}

/* ────────────────────────────────────────
   体験コンテンツカード
──────────────────────────────────────── */
function ActivityCard({
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-sakura-100 hover:shadow-md hover:border-sakura-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sakura-100 flex items-center justify-center text-sakura-600">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-sakura-900 text-lg">{title}</h3>
            {badge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-vermilion/10 text-vermilion">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-sakura-800/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   FAQ アコーディオン
──────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  icon,
}: {
  question: string;
  answer: string;
  icon: React.ReactNode;
}) {
  return (
    <details className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-sakura-100 overflow-hidden">
      <summary className="flex items-center gap-3 p-4 md:p-5 hover:bg-sakura-50/50 transition-colors">
        <span className="flex-shrink-0 text-sakura-500">{icon}</span>
        <span className="flex-1 font-medium text-sakura-900">{question}</span>
        <ChevronDown
          className="accordion-icon flex-shrink-0 w-5 h-5 text-sakura-400"
          aria-hidden="true"
        />
      </summary>
      <div className="px-4 pb-4 md:px-5 md:pb-5 pl-12 md:pl-14">
        <p className="text-sm text-sakura-800/70 leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}

/* ────────────────────────────────────────
   メインページ
──────────────────────────────────────── */
export default function Home() {
  const activities = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "ワークショップ",
      description:
        "お子さまから大人まで楽しめるワークショップを多数ご用意。参加するとおかしがもらえます！",
      badge: "無料",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "スポーツゲーム",
      description:
        "フリースロー・バッティングゲームなど体を動かして遊べるコーナー。参加賞としておかしをプレゼント！",
      badge: "無料",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "ドローンクレーンゲーム",
      description:
        "大人気のドローンクレーンゲーム！混雑時は整理券を配布しますので、お早めにお越しください。",
      badge: "無料・整理券あり",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "キッチンカー",
      description:
        "各種キッチンカーが大集合！お祭りグルメをお楽しみください。",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "子供向けワークショップ",
      description:
        "小さなお子さまでも楽しめるワークショップをご用意しています。親子で一緒にチャレンジ！",
      badge: "無料",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "バンド演奏",
      description:
        "ステージでのバンド演奏でお祭りを盛り上げます♪ みんなで楽しもう！",
    },
  ];

  const faqs = [
    {
      icon: <CloudRain className="w-5 h-5" />,
      question: "雨の日はどうなりますか？",
      answer:
        "小雨決行・雨天中止となります。開催の判断は当日の朝に行います。",
    },
    {
      icon: <Bike className="w-5 h-5" />,
      question: "駐車場はありますか？",
      answer:
        "小学校の駐車場はご利用いただけません。自転車でのご来場をお願いいたします。お車でのご来場はご遠慮ください。",
    },
    {
      icon: <Ban className="w-5 h-5" />,
      question: "飲酒・喫煙はできますか？",
      answer:
        "校庭内でのアルコール・喫煙は全面禁止です。ご理解・ご協力をお願いいたします。",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      question: "参加費はかかりますか？",
      answer:
        "ワークショップ、スポーツゲーム、ドローンクレーンゲームなどの遊びコーナーはすべて無料で参加できます。参加するとおかしがもらえます！キッチンカーは有料です。",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      question: "その他の注意事項はありますか？",
      answer:
        "会場内ではお子さまから目を離さないようお願いいたします。ゴミは各自お持ち帰りください。その他、チラシ記載の注意事項に従ってください。",
    },
  ];

  return (
    <>
      {/* 桜の花びらアニメーション */}
      <div aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SakuraPetal
            key={i}
            className={`petal petal-${i} text-sakura-300`}
            size={i % 2 === 0 ? 16 : 22}
          />
        ))}
      </div>

      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sakura-100">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-sm font-bold text-sakura-700 flex items-center gap-1.5">
            <SakuraPetal className="text-sakura-400" size={18} />
            日進さくら祭り
          </span>
          <div className="hidden sm:flex items-center gap-6 text-sm text-sakura-700">
            <a href="#overview" className="hover:text-vermilion transition-colors">
              開催概要
            </a>
            <a href="#activities" className="hover:text-vermilion transition-colors">
              体験コンテンツ
            </a>
            <a href="#faq" className="hover:text-vermilion transition-colors">
              注意事項
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* 背景グラデーション */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #fdeef0 0%, #fef7f7 50%, #f0f9ff 100%)",
          }}
          aria-hidden="true"
        />
        {/* 装飾の円 */}
        <div
          className="absolute top-10 -right-20 w-72 h-72 rounded-full bg-sakura-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-20 w-60 h-60 rounded-full bg-sky-200/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sakura-100 text-sakura-700 text-sm font-medium mb-6">
            <CalendarDays className="w-4 h-4" />
            令和8年 3月28日（土）
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-vermilion">第二回</span>
            <br className="md:hidden" />
            <span className="text-sakura-800"> 日進さくら祭り</span>
          </h1>
          <p className="text-lg md:text-xl text-sakura-700/80 mb-8 max-w-md mx-auto">
            家族みんなで楽しめる、春のおまつり
          </p>

          {/* 情報カード */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-sakura-100">
              <CalendarDays className="w-6 h-6 text-vermilion mx-auto mb-2" />
              <p className="text-xs text-sakura-600 font-medium">日にち</p>
              <p className="font-bold text-sakura-900">3月28日（土）</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-sakura-100">
              <Clock className="w-6 h-6 text-vermilion mx-auto mb-2" />
              <p className="text-xs text-sakura-600 font-medium">時間</p>
              <p className="font-bold text-sakura-900">10:00〜16:00</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-sakura-100">
              <MapPin className="w-6 h-6 text-vermilion mx-auto mb-2" />
              <p className="text-xs text-sakura-600 font-medium">場所</p>
              <p className="font-bold text-sakura-900">日進小学校 校庭</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-vermilion text-white font-bold shadow-lg shadow-vermilion/25 hover:bg-vermilion-dark transition-colors focus:outline-none focus:ring-2 focus:ring-vermilion focus:ring-offset-2"
            >
              くわしく見る
            </a>
            <ShareButton className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sakura-200 text-sakura-700 font-medium hover:bg-sakura-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sakura-300 focus:ring-offset-2" />
          </div>
        </div>
      </header>

      {/* ===== 開催概要 ===== */}
      <section id="overview" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading>開催概要</SectionHeading>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-sm border border-sakura-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm font-medium text-sakura-500 mb-1">
                    イベント名
                  </dt>
                  <dd className="font-bold text-sakura-900 text-lg">
                    第二回 日進さくら祭り
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-sakura-500 mb-1">
                    開催日
                  </dt>
                  <dd className="font-bold text-sakura-900 text-lg">
                    令和8年 3月28日（土）
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-sakura-500 mb-1">
                    時間
                  </dt>
                  <dd className="font-bold text-sakura-900 text-lg">
                    10:00 開始〜16:00 終了
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-sakura-500 mb-1">
                    会場
                  </dt>
                  <dd className="font-bold text-sakura-900 text-lg">
                    日進小学校 校庭
                  </dd>
                </div>
              </dl>
            </div>

            {/* Google Map プレースホルダ */}
            <div className="border-t border-sakura-100">
              <div className="aspect-video sm:aspect-[2/1] bg-sakura-50 flex items-center justify-center">
                <div className="text-center text-sakura-400">
                  <MapPin className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-sm font-medium">
                    Google Map 埋め込みエリア
                  </p>
                  <p className="text-xs mt-1">日進小学校 校庭</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 体験コンテンツ ===== */}
      <section
        id="activities"
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #fdeef0 30%, #fdeef0 70%, transparent 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading>
            たくさんあそんで
            <br className="sm:hidden" />
            おかしをGetしよう！
          </SectionHeading>

          <p className="text-center text-sakura-700/80 mb-10 max-w-lg mx-auto leading-relaxed">
            ワークショップやスポーツゲーム、ドローンクレーンゲームなど
            <strong className="text-sakura-800">すべて無料</strong>
            で遊べます。参加するとおかしがもらえるよ！
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 注意事項 FAQ ===== */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <SectionHeading>ご来場の注意事項</SectionHeading>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA（来場を促す） ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, #f7b8c4 0%, #fbdce1 40%, #e0f2fe 100%)",
            }}
          >
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-extrabold text-sakura-900 mb-3">
                春の日進で会いましょう！
              </h2>
              <p className="text-sakura-800/80 mb-6 max-w-md mx-auto">
                3月28日（土）10:00〜16:00
                <br />
                日進小学校 校庭にてお待ちしています
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-vermilion text-white font-bold shadow-lg shadow-vermilion/25 hover:bg-vermilion-dark transition-colors focus:outline-none focus:ring-2 focus:ring-vermilion focus:ring-offset-2"
                >
                  <MapPin className="w-4 h-4" />
                  会場をチェック
                </a>
                <ShareButtonAlt className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 text-sakura-700 font-medium hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-sakura-300 focus:ring-offset-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="border-t border-sakura-100 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
          <div className="text-center mb-8">
            <SakuraPetal className="text-sakura-300 mx-auto mb-3" size={32} />
            <p className="font-bold text-sakura-800 text-lg">
              第二回 日進さくら祭り
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm mb-8">
            <div>
              <p className="text-sakura-500 font-medium mb-1">主催</p>
              <p className="text-sakura-800 font-bold">日進未来を紡ぐ会</p>
            </div>
            <div>
              <p className="text-sakura-500 font-medium mb-1">後援</p>
              <p className="text-sakura-800 font-bold">
                きらら商店街振興組合
              </p>
            </div>
            <div>
              <p className="text-sakura-500 font-medium mb-1">協賛</p>
              <p className="text-sakura-800 font-bold">
                大宮日進七夕まつり実行委員会
              </p>
            </div>
          </div>

          <div className="border-t border-sakura-100 pt-6 text-center text-xs text-sakura-400">
            <p>&copy; 2026 日進未来を紡ぐ会. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
