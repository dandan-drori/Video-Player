import React, { useState } from 'react'
import { videoService } from '../services/video-service.js'

export default function Upload({ setUploadState }) {
	const [fileInput, setFileInput] = useState('')
	const [fileName, setFileName] = useState('')
	const [videoSrc, setVideoSrc] = useState('')

	const onFileInputChange = ev => {
		const file = ev.target.files[0]
		setFileName(file.name)
		processFile(file)
	}

	const processFile = file => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setVideoSrc(reader.result)
		}
	}

	const onSubmit = async ev => {
		ev.preventDefault()
		if (!videoSrc) return
		setUploadState('uploading')
		try {
			await videoService.uploadVideo(videoSrc)
			setUploadState('success')
		} catch (err) {
			setUploadState('fail')
		}
		setTimeout(() => {
			setUploadState('done')
		}, 2000)
		setFileInput('')
		setVideoSrc('')
	}

	return (
		<section className='upload'>
			<form onSubmit={onSubmit}>
				{videoSrc ? <p>{fileName}</p> : <label htmlFor='video'>Select a file</label>}
				<input
					type='file'
					id='video'
					name='video'
					accept='video/*'
					onChange={onFileInputChange}
					value={fileInput}
				/>
				<button disabled={!videoSrc}>Upload</button>
			</form>
		</section>
	)
}
