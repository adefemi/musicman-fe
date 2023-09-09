import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TrackCard, { TrackProps } from "../Track/TrackCard";
import usePlayAudio from "../../hooks/usePlayAudio";

interface SearchListProps {
  loading: boolean;
  data?: TrackProps[];
}

const SearchList = ({ loading, data }: SearchListProps) => {
  const { playing, onPlay, onPause } = usePlayAudio();
  const getLoader = (key: number) => {
    return (
      <SkeletonTheme key={key} baseColor="#3a3c4d80" highlightColor="#595c7780">
        <Skeleton height={150} />
      </SkeletonTheme>
    );
  };

  return (
    <div className="searchList">
      {loading && [1, 2, 3].map((_, i) => getLoader(i))}
      {data?.map((d, i) => (
        <TrackCard
          key={i}
          data={d}
          isPlaying={playing(d.preview)}
          onPlay={onPlay}
          onPause={onPause}
        />
      ))}
    </div>
  );
};

export default SearchList;
