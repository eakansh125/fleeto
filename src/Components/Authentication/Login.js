import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (
    <body>
        <main className="main-view">
            <div className="main-view-container">

            <div className="componento-container">
                <div className="login-container">
                    <form className="flex-column align-center">
                        <h2>Login</h2>
                        <label className="flex-row width-xl" for="email">Email address</label>
                        <input className="input-outlined margin-tb" type="text" placeholder="eakansh.srivas125@gmail.com" />
                        <label className="flex-row width-xl" for="password">Password</label>
                        <input className="input-outlined margin-tb" type="password" placeholder="**********" />
                        <div className="login-container-remember flex-row align-center justify-bw width-xl margin-tb">
                            <div>
                                <input type="checkbox" value="remember" />
                                <label for="remember">Remember me</label>
                            </div>
                            <a className="text-dec-none font-primary-color" href="#top">Forgot your password</a>
                        </div>
                        <button className="btn-small width-xl">Login</button>
                        <Link className="btn-text margin-tb" to='/signup'>Create new account</Link>

                    </form>  
                </div>
            </div>
        </div>
    </main>
    </body>
  );
}

export default Login;