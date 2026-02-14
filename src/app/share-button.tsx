"use client";

import { Share2 } from "lucide-react";

export function ShareButton({ className }: { className?: string }) {
  const handleShare = async () => {
    const shareData = {
      title: "第二回 日進さくら祭り",
      text: "令和8年3月28日（土）日進小学校 校庭にて開催！家族みんなで楽しめる春のおまつり。",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("URLをコピーしました！");
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
      aria-label="このイベントをシェアする"
    >
      <Share2 className="w-4 h-4" />
      シェアする
    </button>
  );
}

export function ShareButtonAlt({ className }: { className?: string }) {
  const handleShare = async () => {
    const shareData = {
      title: "第二回 日進さくら祭り",
      text: "令和8年3月28日（土）日進小学校 校庭にて開催！家族みんなで楽しめる春のおまつり。",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("URLをコピーしました！");
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
      aria-label="このイベントをシェアする"
    >
      <Share2 className="w-4 h-4" />
      友達にシェア
    </button>
  );
}
