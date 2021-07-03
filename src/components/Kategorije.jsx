import React from 'react'
import Navigacija from './Navigacija'
import kategorije from '../kategorije.json'
import Kategorija from './Kategorija'
export default function Kategorije() {
    return (
        <>
            <Navigacija />
            <div className='container'>
                <Kategorija kategorija={{
                    naziv: "Naziv kategorije",
                    min: "Min index",
                    max: "Max index"
                }} />
                {
                    kategorije.map(element => {
                        return (
                            <Kategorija kategorija={element} />
                        )
                    })
                }
            </div>
        </>
    )
}
