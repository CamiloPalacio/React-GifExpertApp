// import React, { useState , useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

import { useFecthGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFecthGifs(category);
    

    return (
        <>
            <h3 className="animate__animated animate__backInDown">{category}</h3>
            {loading && <p className="animate__animated animate__shakeX">Loading</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        )
}
