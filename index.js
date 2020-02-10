import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSwitchOn: false
    };
  }
  clickHandle = () => {
    this.setState({
      isSwitchOn: !this.state.isSwitchOn   
    })
  }  
  render() {
    return (
      <>
      <header>
        <p>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'} width='100px' className='App-logo' />        
        </p>
        <h2 style={{margin: 0}}>{this.props.title} </h2>
      </header>      

      <div className={ this.state.isSwitchOn ? 'bg bg-on' : 'bg bg-off' }>

        <button className ={this.state.isSwitchOn ? 'switch-on' : 'switch-off'}
        onClick ={ this.clickHandle }>
        { this.state.isSwitchOn ? 'Button ON' : 'Button OFF' }
        </button>

      </div>

      </>
    );
  }
}

render(<App title='Toggle Class' />, document.getElementById('root'));
