import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  function sushiMe(){
    return props.sushis.map(sushi =>  <Sushi sushi={sushi} deduct={props.deduct} eaten={props.eaten} />)
    
  }
  return (
    <Fragment>
      <div className="belt">
        {
         sushiMe()
        }
        <MoreButton moreHandler={props.moreHandler} />
      </div>
    </Fragment>
  )
}

export default SushiContainer