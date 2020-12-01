import React, { Component } from 'react';
import '../css/styles.css'
 

class Header extends Component {
  state = {
        active:false,
        keywords:''
        }


    inputChangeHandler = (event) => {
        const value = event.target.value === '' ? 'active' : 'non-active'
        
        this.setState({
            active:'active',
            keywords: event.target.value
        })
    }

        render(){ 

         /*    const style = {
                background : 'red'
              }        
            if(this.state.keywords !== ''){
                style.background = 'blue'
            } */

    return(
    <header className={this.state.active}>
        <div className='logo' onClick={() => console.log('I Was CLICKED!')}>
            Logo
        </div>
        <input type='text' onChange={this.inputChangeHandler} />
    
    </header>)
    }
}

export default Header;