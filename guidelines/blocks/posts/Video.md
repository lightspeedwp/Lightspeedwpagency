# Video Post Format

The Video post format highlights video content, ideal for tutorials, vlogs, and webinars.

## Features
- **Featured Player:** Large video embed at the top of the post.
- **YouTube Integration:** Prompts to subscribe to the YouTube channel.
- **Engagement:** Like and Share buttons prominently displayed.

## WordPress Implementation
- **Post Format:** `video`
- **Template:** `single-video.html` (maps to `SingleVideoTemplate`)
- **Archive:** `archive-video.html` (maps to `VideoArchiveTemplate`)

## Data Structure
- `video_url`: URL to the video (YouTube/Vimeo)
- `video_duration`: Length of the video

## Usage
Select "Video" from the Post Format meta box.
