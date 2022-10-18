import React, { useEffect, useState } from 'react';

function DetailUser(props) {
    let id = Number(props.match.params.id) || 0;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/api/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.data)
        })
        .catch(() => console.log('Error'))
      }, [])
    let userFind = users.find(oneUser => oneUser.id === id);
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Detail of Users in Data Base</h5>
                </div>
                {
                    userFind && 
                        <div className="card-body">
                            <h3><strong style={{color: 'black'}}>Nombre: {userFind.fullName} </strong></h3>
                            <h3><strong style={{color: 'black'}}>User: {userFind.user}</strong></h3>
                            <h3><strong style={{color: 'black'}}>Email: {userFind.email}</strong></h3>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem', maxHeight: 18 + 'rem'}} src={userFind.image} alt="Imagen Usuario"/>
                            </div>
                        </div>
                }
                {
                    !userFind &&
                        <h4 style={{textAlign: 'center'}}><strong> No se encontro el usuario </strong></h4>
                }
            </div>
        </div>
    )
}

export default DetailUser;