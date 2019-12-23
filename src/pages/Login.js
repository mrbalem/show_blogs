/** @format */

import React from 'react';

const Login = () => {
	return (
		<div className='login-clean'>
			<form>
				<h2 className='sr-only'>Login Form</h2>
				<div style={{ textAlign: 'center', padding: '1em' }}>
					<h1>Brand</h1>
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						type='email'
						name='email'
						placeholder='Email'
					/>
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						type='password'
						name='password'
						placeholder='Password'
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-primary btn-block' type='submit'>
						Log In
					</button>
				</div>
				<div style={{ textAlign: 'center' }}>o</div>
				<div className='row'>
					<div className='col-md-6'>
						<button className='btn btn-primary btn-block' type='submit'>
							<i class='fab fa-facebook-square'></i>
						</button>
					</div>
					<div className='col-md-6'>
						<button className='btn btn-primary btn-block' type='submit'>
							<i class='fab fa-google'></i>
						</button>
					</div>

					<div className='col-md-6'>
						<button className='btn btn-primary btn-block' type='submit'>
							<i class='fab fa-github'></i>
						</button>
					</div>
				</div>
				<br></br>
				<a className='forgot' href='#'>
					Forgot your email or password?
				</a>
			</form>
		</div>
	);
};

export default Login;
