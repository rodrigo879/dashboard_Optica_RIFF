import React, { useEffect, useState } from "react";
import Categories from './Categories';
import Users from './Users';


function GenresInDb() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3030/api/products')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data.countByCategory)
      console.log(data.countByCategory);
    })
    .catch(() => console.log('Error'))
  }, [])
  useEffect(() => {
    fetch('http://localhost:3030/api/users')
    .then((response) => response.json())
    .then((data) => {
        setUsers(data.data)
    })
    .catch(() => console.log('Error'))
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row"> 

              {products.map( (data, i) => {
                return <Categories {...data} key={i}/>            
              })}

          </div>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Users in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row"> 
            {users.map( (data, i) => {
              return <Users {...data} key={i}/>            
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
