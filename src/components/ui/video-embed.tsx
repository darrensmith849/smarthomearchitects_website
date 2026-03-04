import type { Video } from "@/data/site";

export function VideoEmbed({ video }: { video: Video }) {
  return (
    <div>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal/5">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-charcoal">{video.title}</h3>
        <span className="text-xs text-warm-gray capitalize">
          {video.type.replace("-", " ")}
        </span>
      </div>
    </div>
  );
}
