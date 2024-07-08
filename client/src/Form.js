
import React from 'react';

function Form() {
    const handleClick = () => {
        alert('Welcome');
    };

    return (
        <div><center>
            <p>This is Hema Latha, my roll number is 22761A5474. I am from Thammavaram, which is near Ongole.</p>
            <button type="button" onClick={handleClick}>Click me</button>
            </center>
        </div>
    );
}
export default Form;
