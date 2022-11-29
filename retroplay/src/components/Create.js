import React, { useContext, useState } from "react";
import './login.css';
import { Link} from 'react-router-dom';
import logo from "./img/logo.png";

export default () => {
    const [values, setValues] = useState('');
    const handleSubscribe = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));

    }

    const hadleclicked = () => {
        console.log(values);
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
                    <h1>Cadastrar</h1>
                    <div className="form-g">
                        <div>
                            <input type="text" name="email" onChange={handleSubscribe} placeholder="Email" required></input>
                        </div>
                        <div>
                            <input type="text" name="telefone" onChange={handleSubscribe} placeholder="Número de telefone" required></input>
                        </div>
                        <div>
                            <input type="password" name="senha" onChange={handleSubscribe} placeholder="Senha" required />
                        </div>
                        <div>
                            <input type="password" name="senha_confirm" onChange={handleSubscribe} placeholder="confirmar a senha" required />
                        </div>
                        <Link to ="/">
                        <button onClick={() => hadleclicked()}>Cadastrar</button>
                        </Link>
                    </div>
                    </form>
                <div className="box-description">
                    <nav>
                    <p>Já possui cadastro?<Link to ="/"><span> clique Aqui</span></Link>.</p>
                    </nav>
                </div>
            </div>
        </div>
</body>
);

}