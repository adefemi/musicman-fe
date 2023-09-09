import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./ArtistCover.css";
import { formatNumberWithCommas } from "../../utils/utils";

export interface ArtistCoverProps {
  name: string;
  nb_fan: number;
  picture_medium: string;
}

const ArtistCover = ({
  data,
  loading,
}: {
  data?: ArtistCoverProps;
  loading: boolean;
}) => {
  if (loading) {
    return (
      <SkeletonTheme baseColor="#3a3c4d80" highlightColor="#595c7780">
        <Skeleton height={350} />
      </SkeletonTheme>
    );
  }
  return (
    <div
      className="artistCover"
      style={{ backgroundImage: `url(${data?.picture_medium})` }}
    >
      <div className="info">
        <h1>{data?.name}</h1>
        <p>
          <b>{data && formatNumberWithCommas(data.nb_fan)}</b> Fans
        </p>
      </div>
    </div>
  );
};

export default ArtistCover;
