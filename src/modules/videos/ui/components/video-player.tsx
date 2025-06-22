'use client'
import MuxPlayer from '@mux/mux-player-react'
import { THUMBNAIL_FALLBACK } from '../../constants';

interface VideoPlayerProps {
    playbackId?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
    autoPlay: boolean;
    onPlay : ()=> void;
}


export const VideoPlayer = ({
    playbackId,
    thumbnailUrl,
    autoPlay,
    onPlay
}: VideoPlayerProps)=>{

    // if(!playbackId) return null

    return (
        <MuxPlayer
        playbackId={playbackId || ""}
        poster={thumbnailUrl || THUMBNAIL_FALLBACK}
        playerInitTime={0}
        autoPlay={autoPlay}
        thumbnailTime={0}
        accentColor='#FF2056'
        className='w-full h-full object-contain'
        onPlay={onPlay}
        
        />
    )

}

