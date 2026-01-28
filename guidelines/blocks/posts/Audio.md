# Audio Post Format

The Audio post format is used for podcast episodes, music tracks, or other audio-centric content.

## Features
- **Prominent Player:** Displays an audio player at the top of the post.
- **Subscribe Actions:** Buttons to subscribe on various platforms (Apple Podcasts, Spotify, etc.).
- **Meta Data:** specialized fields for audio file URL and duration.

## WordPress Implementation
- **Post Format:** `audio`
- **Template:** `single-audio.html` (maps to `SingleAudioTemplate`)
- **Archive:** `archive-audio.html` (maps to `AudioArchiveTemplate`)

## Data Structure
- `audio_file`: URL to the MP3 file
- `duration`: Length of the audio (e.g., "45:30")

## Usage
Select "Audio" from the Post Format meta box in the WordPress editor.
