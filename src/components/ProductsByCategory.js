import React, { useEffect, useState } from 'react';
import Product from './Product';

function Categories(props){
    let params = props.match.params.id
    const [pagina, setPagina] = useState(0);

    const handlerPageSum = () => {
        setPagina(pagina + 1)
    }

    const handlerPageRest = () => {
        setPagina(pagina - 1);
    }

    const [products, setProducts] = useState([]);
    const [countProduct, setCountProduct] = useState(0);
    const [countForPage, setCountForPage] = useState(0);
    const [categoria, setCategoria] = useState("");


    const URL = `http://localhost:3030/api/products/productsByCategory/${params}?pagina=${pagina}`
    useEffect(() => {
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data)
        setCountProduct(data.count);
        setCountForPage(data.countForPage)
        setCategoria(data.data[0].categories.name)
        console.log(data);
      })
      .catch(() => console.log('Error'))
    }, [pagina]);

    let finalPage = Math.ceil((countProduct / countForPage) - 1);
    return (
        <> 
            <div className="col-lg-8 mb-4" style={{marginLeft: 9 + 'vw'}}>
                <div className="card shadow mb-4">
                    <div className="card-header py-3" style={{textAlign: 'center'}}>
                        <h5 className="m-0 font-weight-bold text-gray-800">Products of Category {categoria.toUpperCase()} {`(Total de productos: ${countProduct})`} </h5>
                    </div>
                    <div className="col-lg-12 mb-4">
                        {products.map( (data, i) => {
                            return <Product {...data} key={i}/>            
                        })}
                    </div>
                </div>           
                {
                    pagina === 0 &&
                    <div>
                        <button onClick={handlerPageSum} style={{position:'absolute', top: 49 + '%', right: -8 + '%'}}>Forward</button>
                    </div>
                }
                {
                    pagina > 0 && pagina < finalPage &&
                    <div>
                        <button onClick={handlerPageRest} style={{position:'absolute', top: 49 + '%', left: -8 + '%'}}>Back</button>
                        <button onClick={handlerPageSum} style={{position:'absolute', top: 49 + '%', right: -8 + '%'}}>Forward</button>
                    </div>
                }
                {
                    pagina === finalPage &&
                    <div>
                        <button onClick={handlerPageRest} style={{position:'absolute', top: 49 + '%', left: -8 + '%'}}>Back</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Categories;