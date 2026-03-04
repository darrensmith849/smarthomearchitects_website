"use client";

import { AudioPreview } from "./audio-preview";
import type { Track } from "@/data/site";

interface TrackListProps {
  tracks: Track[];
  limit?: number;
}

export function TrackList({ tracks, limit }: TrackListProps) {
  const displayed = limit ? tracks.slice(0, limit) : tracks;

  return (
    <div className="divide-y divide-light-gray/60">
      {displayed.map((track) => (
        <AudioPreview key={track.number} track={track} />
      ))}
    </div>
  );
}
