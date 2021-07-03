import React, { useEffect, useState } from 'react'
import Navigacija from './Navigacija'

export default function Kalkulator(props) {
    const [tezina, setTezina] = useState(0);
    const [visina, setVisina] = useState(0);
    const [index, setIndex] = useState(0);
    const [kategorija, setKategorija] = useState('');


    useEffect(() => {
        for (let kat of props.podaci) {
            if (index > kat.min && index <= kat.max) {
                setKategorija(kat.naziv);
                return
            }
        }
    }, [index, props.podaci])

    return (
        <>
            <Navigacija />
            <div className='container justify-content-center'>
                <div className='row mt-2'>
                    <h1>Izracunajte vas BMI</h1>
                </div>
                <div className='row mt-2 '>
                    <div className='col-8'>
                        <form >
                            <label> Unesite tezinu u kg</label>
                            <input className='form-control' type="number" value={tezina} onChange={(e) => {
                                const value = e.target.value;

                                setTezina(value);
                            }} min={10} max={500} />
                            <label>Unesite visinu u cm</label>
                            <input className='form-control' type="number" value={visina} onChange={(e) => {
                                const value = e.target.value;
                                setVisina(value);
                            }} min={60} max={250} />
                            <button className='form-control btn btn-secondary my-2' onClick={(e) => {
                                e.preventDefault();
                                setIndex(tezina * 10000 / (visina * visina))
                            }}>Izracunaj</button>
                        </form>
                    </div>
                </div>
                {
                    index > 0 && <div className='row  mt-2'>
                        <h2>Vas BMI iznosi: {index.toFixed(2)}</h2>

                    </div>

                }
                {
                    kategorija && (
                        <div className='row mt-2'>
                            <h4>{kategorija}</h4>
                        </div>
                    )
                }
            </div>
        </>
    )
}
