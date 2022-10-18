import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function LastProductInDb(){
    const [lastProduct, setLastProduct] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3030/api/products/lastProduct')
      .then((response) => response.json())
      .then((data) => {
        setLastProduct(data.data[0])
      })
      .catch(() => console.log('Error'))
    }, [])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={lastProduct.images} alt="Last Product in DB"/>
                    </div>
                    <h5 style={{textAlign: 'center'}} className="img-fluid px-3 px-sm-4 mt-3 mb-4">{lastProduct.name}</h5>
                    <Link className="btn btn-danger" to="/DetailProduct">
                        <span>View Product Detail</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
