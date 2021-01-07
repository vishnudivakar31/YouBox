import { Box, IconButton, Paper, Tooltip } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GetAppIcon from '@material-ui/icons/GetApp';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function VideoPaper({title, url, thumbnail_url, favourite, id, conversion_status, onPlay, likeVideo, downloadAudio, downloadVideo, category, index, marginRight }) {
    return (
        <Tooltip key={index} title={title} style={{ marginRight: marginRight}}>
            <Paper elevation={1} key={index} className='collection_paper'>
                <img src={thumbnail_url} alt='thumpnail' /> 
                <Box className='video_title'>{title}</Box>
                <Box className='video_button_group'>
                    <IconButton onClick={() => onPlay(url, title)}>
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton onClick={() => likeVideo({ id: id, category, status: !favourite})}>
                        {favourite ? <FavoriteIcon style={{ fill: '#d63031' }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton onClick={() => downloadVideo(url, title, id)}>
                        <GetAppIcon />
                    </IconButton>
                    <IconButton 
                        onClick={() => downloadAudio(url, title, id)}
                        disabled={conversion_status.id === id}
                    >
                        <MusicNoteIcon />
                    </IconButton>
                    <Box className='convertion_msg' hidden={conversion_status.id !== id}>{conversion_status.msg}</Box>
                </Box>
            </Paper>
        </Tooltip>
    )
}