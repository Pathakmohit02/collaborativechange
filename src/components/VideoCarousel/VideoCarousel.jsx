import React, { useState } from 'react';
import './VideoCarousel.css';

const videoSources = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
  "/videos/video6.mp4"
];

const VISIBLE_COUNT = 3;

const VideoCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);

  const prev = () => {
    setStartIdx((prev) =>
      prev === 0 ? videoSources.length - VISIBLE_COUNT : prev - 1
    );
  };

  const next = () => {
    setStartIdx((prev) =>
      prev === videoSources.length - VISIBLE_COUNT ? 0 : prev + 1
    );
  };

  const visibleVideos = videoSources.slice(
    startIdx,
    startIdx + VISIBLE_COUNT
  ).length < VISIBLE_COUNT
    ? [
        ...videoSources.slice(startIdx),
        ...videoSources.slice(0, VISIBLE_COUNT - videoSources.slice(startIdx).length)
      ]
    : videoSources.slice(startIdx, startIdx + VISIBLE_COUNT);

  return (
    <div className="carousel-container">
      
      <button className="carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="carousel-video-group">
        {visibleVideos.map((src, idx) => (
          <video
            key={idx}
            src={src}
            controls
            className="carousel-player"
          />
        ))}
      </div>
      <button className="carousel-arrow right" onClick={next}>&gt;</button>
    </div>
  );
};

export default VideoCarousel;
