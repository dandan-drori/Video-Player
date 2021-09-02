import React from 'react'

export default function UploadLoader({ uploadState }) {
	if (uploadState === 'uploading')
		return (
			<section className='upload-loader uploading'>
				<p>
					Uploading your video<span>...</span>
				</p>
			</section>
		)
	if (uploadState === 'success')
		return (
			<section className='upload-loader success'>
				<p>
					Upload successful <span>:)</span>
				</p>
			</section>
		)
	if (uploadState === 'fail')
		return (
			<section className='upload-loader fail'>
				<p>
					Upload failed <span>:(</span>
				</p>
			</section>
		)

	return <section className='upload-loader done'></section>
}
