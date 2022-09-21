import React from "react";
import { useState } from "react";

export const ColumnFilter =(filter, setFilter) =>{
    
    return(
    <span>
            Search: {''}
            <input  value={filter || ''} onChange={(e)=> setFilter(e.target.value)}/>
    </span>
    )
}