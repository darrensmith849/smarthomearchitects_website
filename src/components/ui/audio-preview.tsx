"use client";

import { useRef, useState, useEffect } from "react";
import type { Track } from "@/data/site";

export function AudioPreview({ track }: { track: Track }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      const pct = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(pct) ? 0 : pct);
      const mins = Math.floor(audio.currentTime / 60);
      const secs = Math.floor(audio.currentTime % 60);
      setCurrentTime(`${mins}:${secs.toString().padStart(2, "0")}`);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  return (
    <div className="flex items-center gap-4 py-3 group">
      <audio ref={audioRef} src={track.previewSrc} preload="none" />

      {/* Track number */}
      <span className="w-6 text-right text-sm text-warm-gray/60 tabular-nums">
        {track.number}
      </span>

      {/* Play button */}
      <button
        onClick={toggle}
        className="shrink-0 w-9 h-9 rounded-full border border-light-gray flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21" />
          </svg>
        )}
      </button>

      {/* Track info + progress */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-charcoal truncate">
            {track.title}
          </span>
          {track.isFullSingle && (
            <span className="shrink-0 text-[10px] uppercase tracking-widest text-accent font-medium px-1.5 py-0.5 border border-accent/30 rounded">
              Single
            </span>
          )}
        </div>
        {/* Progress bar */}
        <div
          className="mt-1.5 h-1 bg-light-gray rounded-full cursor-pointer"
          onClick={seek}
          role="slider"
          aria-label={`Seek ${track.title}`}
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
        >
          <div
            className="h-full bg-accent rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Time */}
      <span className="text-xs text-warm-gray tabular-nums shrink-0">
        {isPlaying ? currentTime : track.duration}
      </span>
    </div>
  );
}
