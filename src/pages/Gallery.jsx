import { useEffect, useState } from 'react'
import { videoService } from '../services/video-service.js'
import VideoList from '../cmps/VideoList'

export default function Gallery() {
	const [videos, setVideos] = useState()

	useEffect(() => {
		;(async () => {
			const videos = await videoService.getVideos()
			setVideos(videos)
		})()
	}, [])

	return (
		<section className='gallery'>
			<h2>Gallery</h2>
			<VideoList videos={videos} />
		</section>
	)
}
