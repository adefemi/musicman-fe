import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TrackListCard, { TrackListProps } from "./TrackListCard";

interface TrackListType {
  loading: boolean;
  data?: TrackListProps[];
}

const TrackList = ({ loading, data }: TrackListType) => {
  const getLoader = () => {
    return (
      <SkeletonTheme baseColor="#3a3c4d80" highlightColor="#595c7780">
        <Skeleton height={30} count={3} style={{marginBottom: 10}} />
      </SkeletonTheme>
    );
  };

  return (
    <>
      {loading && getLoader()}
      {data?.map((item, i) => (
        <TrackListCard
          key={i}
          data={{
            ...item,
            counter: i + 1,
          }}
        />
      ))}
    </>
  );
};

export default TrackList;
