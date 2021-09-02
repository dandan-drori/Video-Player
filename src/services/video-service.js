import axios from 'axios'

export const videoService = {
	getVideos,
	uploadVideo,
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3030/api/'

async function getVideos() {
	try {
		const res = await axios(`${BASE_URL}video`)
		return res.data
	} catch (err) {
		console.log(err)
	}
}

async function uploadVideo(base64EncodedVideo) {
	try {
		return await axios.post(`${BASE_URL}upload`, { data: base64EncodedVideo })
	} catch (err) {
		console.log(err)
	}
}
