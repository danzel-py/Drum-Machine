import React from 'react';
import './App.css';

function App() {
  return (
    <div className="outer">
      <div className="middle unselectable">
        <div id="drum-machine" className="inner">
          <Drum />
        </div>
      </div>
    </div>
  );
}

export default App;

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Keyboard friendly',
      padsInfo: [
        {
          number: 1,
          key: 'Q',
        },
        {
          number: 2,
          key: 'W'
        },
        {
          number: 3,
          key: 'E'
        },
        {
          number: 4,
          key: 'A'
        },
        {
          number: 5,
          key: 'S'
        },
        {
          number: 6,
          key: 'D'
        },
        {
          number: 7,
          key: 'Z'
        },
        {
          number: 8,
          key: 'X'
        },
        {
          number: 9,
          key: 'C'
        }
      ]
    }
    this.handleEnter = this.handleEnter.bind(this)
  }


  handleEnter(key) {
    this.setState(() => ({ display: `${key}` }))
    document.getElementById(key).load()
    document.getElementById(key).play()

  }

  render() {
    return (
      <div id='containerBig'>
        <DrumPads info={this.state.padsInfo} passFunction={this.handleEnter} />
        <Display toDisp={this.state.display} />
        <div id='title'>
          Drum Machine
        </div>
      </div>
    )
  }
}

class DrumPads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.soundNumber = this.soundNumber.bind(this)
    this.srcNumber = this.srcNumber.bind(this)
  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleEnter(test) {
    this.setState(() => ({ display: test }))
    document.getElementById(test).load()
    document.getElementById(test).play()
  }

  handleKeyPress(event) {
    switch (event.keyCode) {
      case 81:
        document.getElementById("sound1").click()
        break;
      case 87:
        document.getElementById("sound2").click()
        break;
      case 69:
        document.getElementById("sound3").click()
        break;
      case 65:
        document.getElementById("sound4").click()
        break;
      case 83:
        document.getElementById("sound5").click()
        break;
      case 68:
        document.getElementById("sound6").click()
        break;
      case 90:
        document.getElementById("sound7").click()
        break;
      case 88:
        document.getElementById("sound8").click()
        break;
      case 67:
        document.getElementById("sound9").click()
        break
      default:
        break;
    }
  }

  click = (a) => {
    this.props.passFunction(a)
  }

  soundNumber(number) {
    return `sound${number}`
  }

  srcNumber(number) {
    return `/Sound/${number}.wav`
  }

  render() {
    return (
      <div id="drumpadcontainer">
        {this.props.info.map((eachpad) => (
          <div className='drum-pad' id={this.soundNumber(eachpad.number)} onClick={() => this.click(eachpad.key)}>
            <audio src={this.srcNumber(eachpad.number)} className='clip' id={eachpad.key}></audio>
            {eachpad.key}
          </div>
        ))}
      </div>
    )
  }
}

function Display(props) {
  return (
    <div id="display">
      {props.toDisp === 'Keyboard friendly' ? <div class='placeholder'>Audio doesn't play because the test forbids using iframe </div>: props.toDisp}
    </div>
  )
}