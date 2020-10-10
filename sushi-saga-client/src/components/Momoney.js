import React from 'react'

function Momoney(props){
    return(
        <form onSubmit={props.addMoney}>
            <input type="number" name="cash" placeholder="Amount to add"/>
            <input type="submit" value="Mo' Money Mo' Sushi"/>
        </form>
    )
}


export default Momoney