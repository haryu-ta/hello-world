import React, { Component } from 'react';

class Listbox extends Component {
    render(){
        const element = React.createElement('h2',{className:'listbox'},'abc');
        return(
            <div>
                <h1 className='listbox'>{this.props.name}!!</h1>
                {element}
            </div>
        );
    }
}
export default Listbox;
