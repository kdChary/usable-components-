import React, { useRef, useState } from 'react';

import './LoginPage.css';
// const inputFeild = [{id:'userName', label:'User Name', type:'text'}]

const LoginPage = () => {
	// const [userName, setUserName] = useState('')
	// const [password, setPassword] = useState('') value={userName}

	const userNameRef = useRef('');
	const passwordRef = useRef('');
	return (
		<article className="loginPage">
			<h1 className="title">Title</h1>
			<form className="loginForm">
				<label htmlFor="userName">
					User Name
					<input
						nam="userName"
						type="text"
						ref={userNameRef}
						placeholder="User name"
						className='input'
					/>
				</label>
				<label htmlFor="password">
					Password
					<input
						name="password"
						type="password"
						ref={passwordRef}
						placeholder="Password"
						className='input'
					/>
				</label>
				<label htmlFor="box">
					<input className='check' name="box" type="checkbox" placeholder="user name" />
					Show Password
				</label>
			</form>
		</article>
	);
};

export default LoginPage;
