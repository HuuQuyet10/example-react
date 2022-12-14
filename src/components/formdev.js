import React, { useEffect } from 'react';
import { emitter } from './emitter';

const Formdev = () => {
    useEffect(() => {
        emitter.on("test", (data) => {
            fireCha(data);
        }, [])
    }, []);

    const fireCha = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h4>form con</h4>
            <div>
                <button
                    onClick={() => {
                        fireCha();
                    }}
                >onclick Cha</button>
            </div>
        </div>
    );
}

export default Formdev;
