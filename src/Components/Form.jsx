import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [total, setTotal] = useState(0);

    const handleInputChange = (event) => {
        const numericInput = event.target.value;
        setInputValue(numericInput);
    };

    const handleAddClick = () => {
        const numberToAdd = parseInt(inputValue, 10);
        if (!isNaN(numberToAdd)) {
            setTotal(total + numberToAdd);
            setInputValue('');
        }
    };

    return (
        <div className="ml-5 flex flex-col container p-10 bg-zinc-700 rounded gap-3">
            <label htmlFor='valor' className='font-bold text-2xl'>Valor</label>
            <input
                type="number"
                id='valor'
                value={inputValue}
                onChange={handleInputChange}
                className="bg-zinc-900 rounded p-2"
                placeholder="Insira um valor"
            />
            <button className='bg-lime-900' onClick={handleAddClick}>Somar</button>
            <button className='bg-red-900' onClick={() => setTotal(0)}>Limpar</button>
            {!!total && <h2 className='text-2xl	'>Valor total: {total}</h2>}
        </div>
    )
}

export default Form