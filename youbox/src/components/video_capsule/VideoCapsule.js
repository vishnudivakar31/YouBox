import { Card, CardContent, Typography } from "@material-ui/core";

export default function VideoCapsule({ thumbnail_url, title, author_name }) {
    return (
        <Card className='video_capsule'>
            <CardContent>
                <img
                    src={thumbnail_url}
                    alt='image of video'
                />
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='subtitle2'>
                    Uploaded by {author_name}
                </Typography>
            </CardContent>
        </Card>
    )
}