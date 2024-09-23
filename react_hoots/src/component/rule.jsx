// always write it inside the component or function 
// compnet name must be pascalCase (first name should be  upper case )
// don't write hook inside the loops ,function ,nasted function ;

import React from 'react';
import { useState } from 'react'


const Rule = () => {
const [Name,setname]=useState('huzaifa')





    return (
        <div>
            <h1>{Name}</h1>
        </div>
    );
}

export default Rule;
