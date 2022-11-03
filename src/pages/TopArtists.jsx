
import { ArtistCard, Loader, Error } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopArtist = () => {

    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top artist" />;

    if (error) return <Error />

    return (
        <>
            <div className='flex flex-col'>
                <h2 className='font-bold text-3xl text-gray-300 text-left mt-4 mb-10'>Discover Top Artist</h2 >
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>
        </>
    )
}

export default TopArtist;
