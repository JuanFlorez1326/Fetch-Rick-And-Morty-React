import './Fetch.css'
import React, { useState, useEffect } from 'react'
import { CardUI } from '../../UI/CardUI/Card'
import { SelectUI } from '../../UI/SelectUI/Select'
import imgRickAndMorty from '../../../Images/1.jpg'


export const Fetch = () =>
{

    const URL = 'https://rickandmortyapi.com/api/character'
    const [datas, setDatas] = useState([])
    const [card, setCard] = useState()
    const [notCard, setNotCard] = useState()
    const [data, setData] = useState(
        {
            name:"Rick And Morty", image:imgRickAndMorty
        })

    const Api = (id) =>
    {
        fetch(`${URL}/${id}`)
            .then(response => response.json())
            .then(response => 
            { 
                if(id != "")
                {
                    setData(response)
                }
                else
                {
                    setDatas(response.results)   
                }
            })
    }

    useEffect( () => 
    {
        Api('')
    },[])

    const option = (element) => 
    {
        setNotCard(1)
        if(element.target.value === 'allOptions')
        {
            setCard(1)
            Api("")
        }
        else if(element.target.value === ''){
            
        }
        else
        {
            Api(element.target.value)
            setCard(0)  
        }           
    }

    return (
        <main className="divFetch">
            <nav>        
                <SelectUI choose={datas} event={option} nameCard="Select Card" />
            </nav>  
            <section className="divSection">
                {
                    notCard && (                
                        card ?          
                            datas.map(item => (
                                <CardUI key={item.id} data={item}/>
                            ))
                            :
                            <CardUI key={data.id} data={data}/>              
                    )
                }
            </section>
        </main>
    )
}