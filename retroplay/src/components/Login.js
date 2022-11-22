import React, { useContext, useState } from "react";
import './login.css';
import { Link} from 'react-router-dom';
import  App  from './App';
import logo from "./img/logo.png";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        if(email && password){
        }
    }

return(

<body id="corpo">
        <div className="container">
            <nav>
                <div className="logo" >
                    <a href="login.html" title="Login"><img title="Login" src={logo}/></a>
                </div>
            </nav>
            
            <div className="group-form">
            <form>
                    <h1>Entrar</h1>
                    <div className="form-g">
                        <div>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email ou Número de telefone" required></input>
                        </div>
                        <div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                        </div>
                        <Link to ="/index">
                        <button onClick={handleLogin}>Entrar</button>
                        </Link>
                    </div>
                    </form>
                <div className="box-description">
                    <nav>
                    <p>Novo para RetroPlay?<Link to ="/Subscribe"><span> Increva-se agora</span></Link>.</p>
                    </nav>
                </div>
            </div>
        </div>
</body>
);

}