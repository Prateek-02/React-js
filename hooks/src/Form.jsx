import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`Name: ${name}, Age: ${age}`); 
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
