import { Box, IconButton, Paper, Tooltip } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './collection_grid.css'

export default function CollectionGrid({ collections, onPlay, downloadVideo, downloadAudio, conversion_status }) {
    return (
        <Box className='collection_grid'>
            {collections.map((item, index) => (
                <Tooltip key={index} title={item.title}>
                    <Paper elevation={1} key={index} className='collection_paper'>
                        <img src={item.thumbnail_url} alt='thumpnail' /> 
                        <Box className='video_title'>{item.title}</Box>
                        <Box className='video_button_group'>
                            <IconButton onClick={() => onPlay(item.url, item.title)}>
                                <PlayArrowIcon />
                            </IconButton>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton onClick={() => downloadVideo(item.url, item.title, item.id)}>
                                <GetAppIcon />
                            </IconButton>
                            <IconButton 
                                onClick={() => downloadAudio(item.url, item.title, item.id)}
                                disabled={conversion_status.id === item.id}
                            >
                                <MusicNoteIcon />
                            </IconButton>
                            <Box className='convertion_msg' hidden={conversion_status.id !== item.id}>{conversion_status.msg}</Box>
                        </Box>
                    </Paper>
                </Tooltip>
            ))}
        </Box>
    )
}