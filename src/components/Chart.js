import React, { useEffect, useState } from "react";
import ChartRow from './ChartRow';

function Chart (){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3030/api/products/moreDiscount')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.data);
        })
        .catch(() => console.log('Error'))
    }, [])
    let tableRowsData = [];
    products.forEach(element => {
        let product = {
                name: element.name,
                nameBrand: element.brands.name,
                nameCategory: element.categories.name,
                price: `$ ${element.price}`,
                discount: `${element.discount}%`,
                images: <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-6" style={{width: 10 +'rem'}} src={element.images} alt="product"/>
                        </div>
        }
        tableRowsData.push(product);
    });
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Best Discount Products in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Categoria</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Descuento</th>
                                <th style={{textAlign: 'center'}}>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Chart;