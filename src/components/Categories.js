import React from 'react';
import {Link} from 'react-router-dom';

function Categories(props){
    return (
        <>            
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <Link className='btn btn-secondary' to={`/productsByCategory/${props.id}`}>
                        <div className="card-body" style={{ textTransform: 'uppercase'}}>
                            {props.name}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Categories;