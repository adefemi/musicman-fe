import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TrackListCard, { TrackListProps } from "./TrackListCard";
import AlbumCard, { AlbumProps } from "./AlbumCard";

interface AlbumType {
  loading: boolean;
  data?: AlbumProps[];
}

const AlbumList = ({ loading, data }: AlbumType) => {
  const getLoader = (key: number) => {
    return (
      <SkeletonTheme key={key} baseColor="#3a3c4d80" highlightColor="#595c7780">
        <Skeleton height={100} />
      </SkeletonTheme>
    );
  };

  return (
    <div className="albumList">
      {loading && [1, 2, 3].map((_, i) => getLoader(i))}
      {data?.map((item, i) => (
        <AlbumCard key={i} data={item} />
      ))}
    </div>
  );
};

export default AlbumList;
