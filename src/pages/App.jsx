import { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../cmps/Header'
import Gallery from './Gallery'
import Upload from './Upload'
import UploadLoader from '../cmps/UploadLoader'

function App() {
	const [uploadState, setUploadState] = useState('done')

	return (
		<Router>
			<Header />
			<UploadLoader uploadState={uploadState} />
			<main className='App'>
				<Switch>
					<Route path='/upload'>
						<Upload setUploadState={setUploadState} />
					</Route>
					<Route path='/' component={Gallery} />
				</Switch>
			</main>
		</Router>
	)
}

export default App
