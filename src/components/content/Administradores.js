import React from 'react'

function Administradores() {
    return (
       
        <div className="content-wrapper" style={{minHeight:"49px"}}>

            <div className="content-header">

                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">

                        <h1 className="m-0 text-dark">Administradores</h1>

                        </div>
                    </div>

                </div>
            </div>

        <div className="content">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h5 className="m-0">Featured</h5>
                                </div>

                                <div className="card-body">
                                <h6 className="card-title">
                                    Titulo Especial
                                </h6>
                                <p className="card-text">
                                    Soporte tecnico de la empresa Honda, somos el mejor equipo en la actualidad
                                </p>
                                <a href="http://google.com" className="btn btn-primary">
                                    Ir a Google 
                                </a>
                                
                                </div>

                            </div>                   
                     </div>
                </div>
            
            </div>

            
        </div>

    </div>

    )
}

export default Administradores
