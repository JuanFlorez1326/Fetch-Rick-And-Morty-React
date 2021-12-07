import React from "react";
import './Card.css'

export const CardUI = ({data}) =>
{
    const {image,name} = data
    return(
        <>
            <main className="divCardMain">
                <div className="divCard">
                    <h1 className="titleCard">{name}</h1>
                    <img className="imgCard" src={image} alt={name}/>
                </div>
            </main>
        </>
    )
}