import { useState } from 'react'
import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {

	return (
		<>
			<div className="container">
				<TeamMemberCard />
				<TeamMemberCard />
				<TeamMemberCard />
			</div>
		</>
	)

}

export default App;