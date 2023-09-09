import { formatSecondsToMinSec } from "../../utils/utils";
import "./Track.css";

export interface TrackListProps {
  id: string;
  title: string;
  duration: number;
  counter: number;
}

const TrackListCard = ({ data }: { data: TrackListProps }) => {
  return (
    <div className="trackListCard">
      <div className="item">
        <span>{data.counter}</span>
        <span className="title">{data.title}</span>
      </div>
      <div>{formatSecondsToMinSec(data.duration)}</div>
    </div>
  );
};
export default TrackListCard;
