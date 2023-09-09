import MusicSvg from "../svgs/music";
import "./Track.css";

export interface AlbumProps {
  id: string;
  title: string;
  cover_medium: string;
  nb_tracks: number;
  release_date: string;
}

const AlbumCard = ({ data }: { data: AlbumProps }) => {
  return (
    <div className="trackCard albumCard">
      <div className="img" style={{backgroundImage: `url(${data.cover_medium})`}} />
      <div className="info">
        <div className="top">
          <h2>{data.title}</h2>
          <span>{data.nb_tracks} <MusicSvg /></span>
        </div>
        <p>
          {data.release_date}
        </p>
      </div>
    </div>
  );
};
export default AlbumCard;
