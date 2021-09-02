import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import VideoPreview from './VideoPreview'

export default function VideoList({ videos }) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [])

	if (!videos && isLoading) return <p>Loading...</p>

	return (
		<section className='video-list'>
			{videos ? (
				videos.map(({ publicId, uploadedAt }) => (
					<VideoPreview key={publicId} videoId={publicId} uploadedAt={uploadedAt} />
				))
			) : (
				<section className='empty-msg'>
					<p>Your gallery is empty :(</p>
					<p>
						Go to the <Link to='/upload'>upload page</Link> to upload your first video!
					</p>
				</section>
			)}
		</section>
	)
}
