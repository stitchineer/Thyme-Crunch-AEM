import axios from "axios";
import React, {useState, useEffect } from "react";
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const HamburgerIng = ()=> {

   

    const [hamburgerIng, setHamburgerIng] = useState([]);

    const fetchHamburgerIng = ()=>{
        var recipe = "hamburger";
        const username = sessionStorage.getItem('username');
        axios.get(`http://3.14.3.79:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setHamburgerIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchHamburgerIng();
    }, [] );

    return hamburgerIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}