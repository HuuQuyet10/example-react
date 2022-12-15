import React from 'react';

const ComponentCon = (props) => {

    const truyenDataConSangCha = () => {
        const hsd = "hello quyet"
        props.checkDataCon(hsd)
    }

    return (
        <div>
            <h1>Component Con</h1>
            <button onClick={() => truyenDataConSangCha()}>truyền data ngay ?</button>
        </div>
    );
}

export default ComponentCon;
