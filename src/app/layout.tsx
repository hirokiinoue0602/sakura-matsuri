import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第二回 日進さくら祭り | 令和8年3月28日（土）",
  description:
    "令和8年3月28日（土）10:00〜16:00、日進小学校 校庭にて開催！ワークショップ、スポーツゲーム、ドローンクレーンゲーム、キッチンカーなど家族みんなで楽しめる春のおまつりです。主催：日進未来を紡ぐ会",
  keywords: [
    "日進さくら祭り",
    "さくら祭り",
    "日進小学校",
    "お祭り",
    "イベント",
    "さいたま市",
    "春祭り",
  ],
  openGraph: {
    title: "第二回 日進さくら祭り",
    description:
      "令和8年3月28日（土）日進小学校 校庭にて開催！家族みんなで楽しめる春のおまつり。ワークショップ・ゲーム・キッチンカーなど盛りだくさん！",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "第二回 日進さくら祭り",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "第二回 日進さくら祭り | 3月28日（土）",
    description:
      "家族みんなで楽しめる春のおまつり。ワークショップ・ゲーム・キッチンカーなど盛りだくさん！",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "第二回 日進さくら祭り",
    description:
      "家族みんなで楽しめる春のおまつり。ワークショップ、スポーツゲーム、ドローンクレーンゲーム、キッチンカーなど盛りだくさん！",
    startDate: "2026-03-28T10:00:00+09:00",
    endDate: "2026-03-28T16:00:00+09:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "日進小学校 校庭",
      address: {
        "@type": "PostalAddress",
        addressLocality: "さいたま市北区",
        addressRegion: "埼玉県",
        addressCountry: "JP",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "日進未来を紡ぐ会",
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
