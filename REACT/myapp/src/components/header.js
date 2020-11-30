import React, { Component } from 'react';
import '../css/styles.css'
 

class Header extends Component {

    inputChangeHandler(event){
        //console.log(event.target.value)
        console.log('Hey!')
    }

    render(){ 
   

    return(<header>
            <div className='logo' onClick={() => console.log('I Was CLICKED!')}>Logo</div>
            <input 
            type='text' 
            onChange={(e) => {this.inputChangeHandler(e)}} />
          </header>)
    }
}

export default Header;