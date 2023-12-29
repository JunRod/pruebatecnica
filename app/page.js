'use client'

import {useEffect, useState} from "react";
import {generatorOBJ} from "@app/utils";

export default function Home() {
    const [intervalID, setIntervalID] = useState(null);
    const [counter, setCounter] = useState(0);
    const [startFetch, setStartFetch] = useState(false)
    const [correlativeCurrent, setCorrelativeCurrent] = useState()
    const [dataResult, setDataResult] = useState([])

    useEffect(() => {
        if (localStorage.getItem('counter')) {
            const counter = JSON.parse(localStorage.getItem('counter')) + 1;
            setCounter(counter);
            setCorrelativeCurrent(counter)
        } else {
            localStorage.setItem('counter', JSON.stringify(1));
            setCounter(1);
            setCorrelativeCurrent(1)
        }
    }, []);

    useEffect(() => {
        async function send() {
            if (!startFetch) return null
            const objFormatted = generatorOBJ(counter);
            try {
                const resp = await fetch(`https://back.apisunat.com/personas/v1/sendBill`, {
                    next: {revalidate: 2000},
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(objFormatted)

                })
                const data = await resp.json();
                setDataResult([...dataResult, {status: data?.status}])

            } catch (error) {
                console.error('Error:', error);
            }

        }

        send()
    }, [counter, startFetch]);

    function handleClick() {
        setStartFetch(true)

        const id = setInterval(() => {
            setCounter((prevCounter) => {
                const newCounter = prevCounter + 1;
                localStorage.setItem('counter', JSON.stringify(newCounter));
                return newCounter;
            });
        }, 5000);
        setIntervalID(id);
    }

    useEffect(() => {
        if (counter === (correlativeCurrent + 9)) {
            clearInterval(intervalID);
        }
    }, [counter, intervalID]);

    return (
        <center className='flex flex-col gap-2'>
            <button className='bg-amber-400 border-2 h-[200px] w-[200px]' onClick={handleClick}>Comenzar a enviar</button>
            {
                JSON.stringify(dataResult)
            }
        </center>
    )

}
