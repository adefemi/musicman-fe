import { useParams } from "react-router-dom";
import ArtistCover, {
  ArtistCoverProps,
} from "../components/ArtistCover/ArtistCover";
import layout from "../components/Layout";
import { AlbumProps } from "../components/Track/AlbumCard";
import { TrackListProps } from "../components/Track/TrackListCard";
import { useQuery } from "@tanstack/react-query";
import { getArtist } from "../utils/network";
import TrackList from "../components/Track/TrackList";
import AlbumList from "../components/Track/AlbumList";

interface ArtistProps extends ArtistCoverProps {
  topTracks: TrackListProps[];
  topAlbums: AlbumProps[];
}

const Artist = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await fetch(getArtist(id as string));
      const data = await res.json();
      return data.result as ArtistProps;
    },
    enabled: !!id,
  });
  return (
    <div className="artist">
      {error ? (
        <i>An error occured when trying to get artist</i>
      ) : (
        <>
          <section className="topSection">
            <ArtistCover data={data} loading={isLoading} />
            <div>
              <h2>Top Tracks</h2>
              <TrackList data={data?.topTracks} loading={isLoading} />
            </div>
          </section>
          <section>
            <h2>Top Albums</h2>
            <AlbumList data={data?.topAlbums} loading={isLoading} />
          </section>
        </>
      )}
    </div>
  );
};

export default layout(Artist);
