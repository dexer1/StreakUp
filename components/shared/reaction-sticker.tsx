import Image from "next/image";
import type { Reaction } from "@/types";
import { cn } from "@/lib/utils";

const reactionStickers = {
  fire: { src: "/stickers/twemoji/fire.svg", label: "Fire" },
  clap: { src: "/stickers/twemoji/clap.svg", label: "Applause" },
  strong: { src: "/stickers/twemoji/strong.svg", label: "Strength" },
} satisfies Record<Reaction["type"], { src: string; label: string }>;

export function ReactionSticker({
  type,
  size = 18,
  className,
}: {
  type: Reaction["type"];
  size?: number;
  className?: string;
}) {
  const sticker = reactionStickers[type];

  return (
    <Image
      src={sticker.src}
      alt={sticker.label}
      width={size}
      height={size}
      unoptimized
      draggable={false}
      className={cn("inline-block shrink-0 select-none object-contain", className)}
    />
  );
}
