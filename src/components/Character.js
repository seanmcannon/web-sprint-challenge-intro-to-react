import React from 'react';
import styled from 'styled-components';
import cuid from 'cuid'


const StyledDiv = styled.div`
background-color: ${pr => pr.theme.white};
color: ${pr => pr.theme.black};
padding: ${pr => pr.theme.paddings};
margin: ${pr => pr.theme.margins};
border: ${pr => pr.borders};
opacity: 35%;
width: 90%;

h2 {
color: ${pr => pr.theme.gold};
}




`

 const Character = ({ characters }) => {
    console.log(characters);
        return (
             <>
            {characters.map((characters, index) => (
                <StyledDiv key={cuid()}>
                <h2>{characters.name}</h2>
                    
                    <p>Height: {characters.height}</p>
                    <p>Weight: {characters.mass}</p>
                    <p>Hair Color: {characters.hair_color}</p>
                    <p>Skin Color: {characters.skin_color}</p>
                    <p>Eye Color: {characters.eye_color}</p>
                    <p>Birth Year: {characters.birth_year}</p>
                    <p>Gender: {characters.gender}</p>
                    
                </StyledDiv>
                ))}
            </>
    );
    }

    export default Character






// "name": "Darth Vader", 
//             "height": "202", 
//             "mass": "136", 
//             "hair_color": "none", 
//             "skin_color": "white", 
//             "eye_color": "yellow", 
//             "birth_year": "41.9BBY", 
//             "gender": "male", 
//             "homeworld": "http://swapi.dev/api/planets/1/", 
//             "films": [
//                 "http://swapi.dev/api/films/1/", 
//                 "http://swapi.dev/api/films/2/", 
//                 "http://swapi.dev/api/films/3/", 
//                 "http://swapi.dev/api/films/6/"