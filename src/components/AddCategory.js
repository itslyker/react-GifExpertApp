import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {

        setInputValue(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log("Submit Hecho!!")
        if(inputValue.length > 2) {

          setCategories(category => [inputValue, ...category]);
          setInputValue('');

         }


    }
    
    return(

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            placeholder='Escriba el personaje que quieres buscar'
            onChange={handleInputChange}
            />
        </form>

    );

}


AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}