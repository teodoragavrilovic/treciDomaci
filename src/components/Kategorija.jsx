import React from 'react'

export default function Kategorija(props) {
    return (
        <div className='row mt-2 border text-center'>
            <div className='col-6'>
                <h3>{props.kategorija.naziv}</h3>
            </div>
            <div className='col-3'>
                <h3>{props.kategorija.min}</h3>
            </div>
            <div className='col-3'>
                <h3>{props.kategorija.max}</h3>
            </div>
        </div>
    )
}
