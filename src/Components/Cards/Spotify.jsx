import "./Spotify.css";
export default function Spotify() {
  return (
    <div>
      <iframe
        className="spotify-card w-full rounded-[20px] "
        src="https://open.spotify.com/embed/playlist/37i9dQZF1FoAwNYT1aMLMe?utm_source=generator"
        width="300" 
        height="490"
        frameBorder="0" 
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  );
}

