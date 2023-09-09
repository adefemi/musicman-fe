import { Link } from "react-router-dom";
import "./Track.css";
import { formatSecondsToMinSec } from "../../utils/utils";
import PauseSvg from "../svgs/pause";
import PlaySvg from "../svgs/play";

export interface TrackProps {
  id: string;
  title: string;
  preview: string;
  album: {
    cover_medium: string;
  };
  artist: {
    id: string;
    name: string;
  };
  duration: number;
}

export interface TrackCardProps {
  data: TrackProps;
  isPlaying: boolean;
  onPlay: (link: string) => void;
  onPause: () => void;
}

const TrackCard = ({ data, isPlaying, onPlay, onPause }: TrackCardProps) => {
  const handlePlayButton = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay(data.preview);
    }
  };

  return (
    <div className="trackCard">
      <div
        className="img"
        style={{ backgroundImage: `url(${data.album.cover_medium})` }}
      >
        <button onClick={handlePlayButton}>
          {isPlaying ? <PauseSvg /> : <PlaySvg />}
        </button>
      </div>
      <div className="info">
        <div className="top">
          <h2>{data.title}</h2>
          <span>{formatSecondsToMinSec(data.duration)}</span>
        </div>
        <p>
          By <Link to={`artist/${data.artist.id}`}>{data.artist.name}</Link>
        </p>
      </div>
    </div>
  );
};
export default TrackCard;
