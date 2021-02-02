import React,{useState} from 'react'

function Login() {

//HOOK QUE INICIA SESIÓN 

const [administradores, iniciarSesion] = useState({
    usuario : "",
    password : ""
});

//cambios del formulario para actualizar el hook 
//en un array guardamos los valores que tiene la variable, luego con ...recorremos todo los valores que tiene la variable y separarlos.
// con e target tomalos el valor del input 
//las propiedades name del formulario deben de llamarse igual que en usestate

const cambiaForm = (e)=>{

    iniciarSesion({

        ...administradores,
        [e.target.name]:e.target.value,
        

    })
    
}

//////////// EJECUTAMOS EL SUBMIT 
const login = (e)=>{
    e.preventDefault();
    console.log(administradores);
}

    
    return (
        <div className="login-page" style={{minHeight:"512.391px"}}>
            <div className="login-box">
                <div className="login-logo">
                    <b>CMS</b>

                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">
                            Llena los campos para iniciar sesión
                        </p>

                        <form onChange={cambiaForm} onSubmit={login}>
                            <div className="input-group mb-3">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="usuario"
                                name="usuario"

                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>

                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
     </div>
    )
}

export default Login
