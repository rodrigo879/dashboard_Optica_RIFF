import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
function ContentRowData(){
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState();

    useEffect(() => {
        fetch('http://localhost:3030/api/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data)
        })
        .catch(() => console.log('Error'))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setBrands(data.countByBrand.length);
        })
        .catch(() => console.log('Error'))
    }, [])

    /* <!-- Products in DB --> */

    let productsInDB = {
        title: 'Products in Data Base',
        color: 'danger', 
        quantity: products.count,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Users in DB --> */

    let usersInDB = {
        title:' Users in Data Base', 
        color:'warning', 
        quantity: users.count,
        icon:'fa-user-check'
    }

    /* <!-- Brands Quantity --> */

    let brandsInDB = {
        title:'Brands Quantity' ,
        color:'success',
        quantity: brands,
        icon:'fa-award'
    }

    let cartProps = [productsInDB, usersInDB, brandsInDB];

    return (    
        <div className="row">
            {cartProps.map( (data, i) => {
                return <SmallCard {...data} key={i}/>            
            })}
        </div>
    )
}

export default ContentRowData;