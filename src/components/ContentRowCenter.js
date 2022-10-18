import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last Product in Data Base -->*/}

            {/*<!-- Category in DB -->*/}
            <CategoriesInDb />            

        </div>
    )
}

export default ContentRowCenter;