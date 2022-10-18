import React from 'react';

function DetailUser(props) {
    return(
        <>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                        <h5><strong style={{color: 'black'}}>Nombre:</strong> {props.name}</h5>
                        <h5><strong style={{color: 'black'}}>Categoria:</strong> {props.categories.name}</h5>
                        <h5><strong style={{color: 'black'}}>Marca:</strong> {props.brands.name}</h5>
                        <h5><strong style={{color: 'black'}}>Precio:</strong> ${props.price}</h5>
                </div>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 11 +'rem', position: 'absolute', top: 0, left: 500 + 'px'}} src={props.images} alt=" Last Product "/>
                        </div>
            </div>
        </>
    )
}

export default DetailUser;