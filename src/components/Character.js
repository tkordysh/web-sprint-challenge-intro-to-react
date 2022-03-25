// Write your Character component here
import React from "react";

const Character = (props) => {

    const { character } = props;

    return (
        <article>
            <h2>{character.name}</h2>
        </article>
    )

}


export default Character