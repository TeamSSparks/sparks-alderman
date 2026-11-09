"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

/**
 * Decorative looping video drawn onto a canvas. iOS Safari and Brave draw
 * their own play/pause button over any <video> element, and CSS can't reach
 * it, so the real video stays invisible and the visitor only ever sees the
 * canvas and a still poster behind it.
 */
export default function BackgroundVideo({
  src,
  poster,
  className = "",
  style,
}: {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let visible = true;

    const draw = () => {
      if (video.videoWidth && !video.paused && visible) {
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.style.opacity = "1";
      }
      raf = requestAnimationFrame(draw);
    };

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) tryPlay();
    });
    io.observe(canvas);

    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    tryPlay();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${className}`}
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        className="absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
}
