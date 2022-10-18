import React from 'react';
import {Link} from 'react-router-dom';

function Users(props){
    return (
        <>            
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <Link className='btn btn-secondary' to={`/DetailUser/${props.id}`}>
                        <div className="card-body">
                            {props.fullName}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Users;