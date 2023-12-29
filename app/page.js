'use client'

import {useEffect, useRef, useState} from "react";
import {generatorOBJ} from "@/app/utils";

export default function Home() {
    const [intervalID, setIntervalID] = useState(null);
    const [counter, setCounter] = useState(0);
    const componentMountent = useRef(false);

    useEffect(() => {
        if (localStorage.getItem('counter')) {
            setCounter(JSON.parse(localStorage.getItem('counter')) + 1);
            componentMountent.current = false;
        } else {
            localStorage.setItem('counter', JSON.stringify(1));
        }
    }, [counter]);

    useEffect(() => {
        async function send() {
            if (componentMountent.current) {
                const objFormatted = generatorOBJ(counter);
                try {
                    const resp = await fetch(`https://back.apisunat.com/personas/v1/sendBill`, {
                        next: {revalidate: 2000},
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(objFormatted)

                    })
                    const data = await resp.json();
                    console.log(data);

                } catch (error) {
                    console.error('Error:', error);
                }

            } else {
                componentMountent.current = true;
            }
        }


        send()
    }, [counter]);

    function handleClick() {
        const id = setInterval(() => {
            setCounter((prevCounter) => {
                const newCounter = prevCounter + 1;
                localStorage.setItem('counter', JSON.stringify(newCounter));
                return newCounter;
            });
        }, 1000);
        setIntervalID(id);
    }

    useEffect(() => {
        if (counter === (counter + 10)) {
            clearInterval(intervalID);
        }
    }, [counter, intervalID]);

    return (
        <div>
            <button onClick={handleClick}>Enviar</button>
        </div>
    )

}
