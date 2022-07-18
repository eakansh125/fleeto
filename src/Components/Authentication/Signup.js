import { Link } from "react-router-dom";
import './Login.css'

function Signup() {
  return (
    <body>
        <main className="main-view">
            <div className="main-view-container">

            <div className="componento-container">
                <div className="login-container">
                    <form className="flex-column align-center">
                        <h2>Sign up</h2>
                        <label className="flex-row width-xl font-bold" for="fullname">Full Name</label>
                        <input className="input-outlined margin-tb" type="text" placeholder="Eakansh Srivastava" />
                        <label className="flex-row width-xl font-bold" for="username">User Name</label>
                        <input className="input-outlined margin-tb" type="text" placeholder="eakansh" />
                        <label className="flex-row width-xl font-bold" for="email">Email ID</label>
                        <input className="input-outlined margin-tb" type="text" placeholder="eakansh.srivas125@gmail.com" />
                        <label className="flex-row width-xl font-bold" for="password">Password</label>
                        <input className="input-outlined margin-tb" type="password" placeholder="**********" />
                        <label className="flex-row width-xl font-bold" for="password">Confirm Password</label>
                        <input className="input-outlined margin-tb" type="password" placeholder="**********" />
                        <div className="login-container-remember flex-row align-center justify-bw width-xl margin-tb">
                            <div>
                                <input type="checkbox" value="remember" />
                                <label className="font-bold" for="remember">I accept the terms and conditions</label>
                            </div>
                            
                        </div>
                        <button className="btn-small width-xl">Create new account</button>
                        <Link className="btn-text margin-tb" to='/login'>Already have an account</Link>

                    </form>  
                </div>
            </div>
        </div>
    </main>
    </body>
  );
}

export default Signup;