import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<section className='header'>
			<Link to='/'>Video Player</Link>
			<section>
				<Link to='/'>Gallery</Link>
				<Link to='/upload'>Upload</Link>
			</section>
		</section>
	)
}
