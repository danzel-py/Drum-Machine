import React from 'react';
import './App.css';
import sound1 from './Sound/1.wav'
import sound2 from './Sound/2.wav'
import sound3 from './Sound/3.wav'
import sound4 from './Sound/4.wav'
import sound5 from './Sound/5.wav'
import sound6 from './Sound/6.wav'
import sound7 from './Sound/7.wav'
import sound8 from './Sound/8.wav'
import sound9 from './Sound/9.wav'

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <DrumPads/>
      </div>
    </div>
  );
}

export default App;

class DrumPads extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.clickPad = this.clickPad.bind(this)
  }

  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyPress)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyPress)
  }

  handleEnter(test){
    this.setState(()=>({display:test}))
    document.getElementById(test).load()
    document.getElementById(test).play()
  }

  handleKeyPress(event){
    switch(event.keyCode){
      case 81:
        this.btnQ.click()
        break;
      case 87:
        this.btnW.click()
        break;
      case 69:
        this.btnE.click()
        break;
      case 65:
        this.btnA.click()
        break;  
      case 83:
        this.btnS.click()
        break; 
      case 68:
        this.btnD.click()
        break;
      case 90:
        this.btnZ.click()
        break;
      case 88:
        this.btnX.click()
        break;
      case 67:
        this.btnC.click()
        break
      default:
        break;
    }
  }

  clickPad(e){
    e.click()
  }

  render(){
    return(
      <div id='containerBig'>
        
        <div id='drumpadcontainer'>
          <div className='drumpadrows'>
            <div className='drum-pad' id='sound1' onClick={() => this.handleEnter('Q')} ref={node => (this.btnQ = node)}>
              <audio src={sound1} className='clip' id='Q'></audio>Q</div>
            <div className='drum-pad' id='sound2' onClick={() => this.handleEnter('W')} ref={node => (this.btnW = node)}>
              <audio src={sound2} className='clip' id='W'></audio>W</div>
            <div className='drum-pad' id='sound3' onClick={() => this.handleEnter('E')} ref={node => (this.btnE = node)}>
              <audio src={sound3} className='clip' id='E'></audio>E</div>
          </div>
          <div className='drumpadrows'>
            <div className='drum-pad' id='sound4' onClick={() => this.handleEnter('A')} ref={node => (this.btnA = node)}>
              <audio src={sound4} className='clip' id='A'></audio>A</div>
            <div className='drum-pad' id='sound5' onClick={() => this.handleEnter('S')} ref={node => (this.btnS = node)}>
              <audio src={sound5} className='clip' id='S'></audio>S</div>
            <div className='drum-pad' id='sound6' onClick={() => this.handleEnter('D')} ref={node => (this.btnD = node)}>
              <audio src={sound6} className='clip' id='D'></audio>D</div>
          </div>
          <div className='drumpadrows'>
            <div className='drum-pad' id='sound7' onClick={() => this.handleEnter('Z')} ref={node => (this.btnZ = node)}>
              <audio src={sound7} className='clip' id='Z'></audio>Z</div>
            <div className='drum-pad' id='sound8' onClick={() => this.handleEnter('X')} ref={node => (this.btnX = node)}>
              <audio src={sound8} className='clip' id='X'></audio>X</div>
            <div className='drum-pad' id='sound9' onClick={() => this.handleEnter('C')} ref={node => (this.btnC = node)}>
              <audio src={sound9} className='clip' id='C'></audio>C</div>
          </div>
        </div>

        <div id='display'>{this.state.display}</div>
      </div>
    )
  }
}