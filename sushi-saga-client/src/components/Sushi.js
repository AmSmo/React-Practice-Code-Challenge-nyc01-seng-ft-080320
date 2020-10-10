import React, { Fragment } from 'react'

class Sushi extends React.Component {
  
 

 
  
  clickHandler = () => {
    if(this.props.deduct(this.props.sushi)){
      
    }else{
      console.log("no money")
    }
  }
  render() {return (
    <div className="sushi">

      <div className="plate">
              
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.props.eaten.map(sushi => sushi.id).includes(this.props.sushi.id) ?
          null
          :
          
            <img src={this.props.sushi.img_url} width="100%" onClick={this.clickHandler}/>
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}
export default Sushi