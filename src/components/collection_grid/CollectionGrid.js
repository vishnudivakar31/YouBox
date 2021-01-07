import { Box } from "@material-ui/core";
import VideoPaper from '../video_paper/VideoPaper'
import './collection_grid.css'

export default function CollectionGrid({ collections, onPlay, downloadVideo, downloadAudio, conversion_status, likeVideo, deleteVideo }) {
    return (
        <Box className='collection_grid'>
            {collections.map((item, index) => (
                <VideoPaper
                    index={index}
                    title={item.title}
                    url={item.url}
                    thumbnail_url={item.thumbnail_url}
                    favourite={item.favourite}
                    id={item.id}
                    conversion_status={conversion_status}
                    onPlay={onPlay}
                    likeVideo={likeVideo}
                    downloadAudio={downloadAudio}
                    downloadVideo={downloadVideo}
                    deleteVideo={deleteVideo}
                    category={item.category}
                />
            ))}
        </Box>
    )
}