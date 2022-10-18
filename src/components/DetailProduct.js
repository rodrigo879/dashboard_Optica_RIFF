import React, { useEffect, useState } from 'react';

function DetailProduct(){
    const [lastProduct, setLastProduct] = useState([]);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    useEffect(() => {
      fetch('http://localhost:3030/api/products/lastProduct')
      .then((response) => response.json())
      .then((data) => {
        setLastProduct(data.data[0])
        setBrand(data.data[0].brands.name);
        setCategory(data.data[0].categories.name);
      })
      .catch(() => console.log('Error'))
    }, [])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Detail Last Product in Data Base</h5>
                </div>
                <div className="card-body">
                    <h3><strong style={{color: 'black'}}>NOMBRE:</strong> {lastProduct.name}</h3>
                    <h3 style={{textTransform: 'uppercase'}}><strong style={{color: 'black'}}>CATEGORIA:</strong> {category}</h3>
                    <h3><strong style={{color: 'black'}}>MARCA:</strong> {brand}</h3>
                    <h3><strong style={{color: 'black'}}>PRECIO:</strong> ${lastProduct.price}</h3>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 35 +'rem'}} src={lastProduct.images} alt=" Last Product "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;