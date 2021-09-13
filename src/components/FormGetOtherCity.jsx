import React, { useState } from 'react'

export const FormGetOtherCity = (props) => {

    const [city, setcity] = useState("")

    const handleValidationForm = e => {
        e.preventDefault();
        props.setResearchCity(city);
    }

    return (
        <>
            <div>
                <label htmlFor="city">Sélectionnez une ville</label>
                <input type="text" id="city" name="city" placeholder="Paris" onChange={(e) => setcity(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleValidationForm}>Valider</button>
            </div>
        </>
    )
}