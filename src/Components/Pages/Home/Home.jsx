import './Home.css'
import { Fragment } from 'react'
import {HeaderUI} from '../../UI/HeaderUI/Header'
import {FooterUI} from '../../UI/FooterUI/Footer'
import { Fetch } from '../../Layouts/Fetch/Fetch'


export const Home = () =>
{
    return (
        <Fragment>
            <div>                      
                <div className="divHeader">
                    <HeaderUI/>               
                </div>

                <div className="divCards">
                    <Fetch/>
                </div>

                <div className="divFooter">
                    <FooterUI/>
                </div>
            </div>
        </Fragment>
    )
}