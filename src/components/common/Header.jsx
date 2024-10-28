import React from "react"

const Header = ({ title }) => {
	return (
		<header className="header">
			<div className="container" style={{padding:'30px'}}>
				<h1 className="header-title text-center">{title}</h1>
			</div>
		</header>
	)
}

export default Header
