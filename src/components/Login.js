import React, {useState} from "react";
import { FirebaseApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, singInWithEmailAndPassword} from "firebase/auth";
import { async } from "@firebase/util";


const {auth} = getAuth(FirebaseApp);

const Login = () =>{
    const [register, setRegister] = useState(false);
    const handlerSubmit = async(e) =>{
        e.preventDefault()
        const correo = e.target.email.value ;
        const contraseña = e.target.password.value;
        if(register){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await singInWithEmailAndPassword(auth, correo, contraseña)
        }
    }
   
    return(
    <div className="registroUsuario">
        <h2>{register ? "registrate": "iniciar sesion" }</h2>
        <form onSubmit={handlerSubmit}>
            <div>
                <label>Direccion de mail</label>
                <input type="mail" placeholder="ingresar mail" id="email"/>
            </div>

            <div>
                <label>contraseña </label>
                <input type="password" placeholder="contraseña" id="password"/>
            </div>

            <button>
                {register ? "registrate" : "iniciar sesion"}
            </button>
        
            <div>
                <button onClick={()=> setRegister(!register)} >
                    {register ? "ya tenes cuenta ? inicia sesion" : "no tienes cuenta? entonces registrate"}
                </button>
            </div>

        </form>
    </div>
    )
};


export default Login;