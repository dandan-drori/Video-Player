import React from 'react'
import { Video } from 'cloudinary-react'

export default function VideoPreview({ videoId, uploadedAt }) {
	return (
		<section className='video-preview'>
			<Video
				cloudName='dandan-img-cloud'
				publicId={videoId}
				width='300'
				crop='fit'
				fallbackContent='Your browser does not support HTML5 video tags'
				autoPlay
				controls
			/>
			<small>Uploaded At: {new Date(uploadedAt).toLocaleString()}</small>
		</section>
	)
}
