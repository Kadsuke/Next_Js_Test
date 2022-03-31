import React, { Component } from 'react';
import rock from '../images/icon-rock.svg';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';


class Display extends Component {

  render() {
    const userChoice = this.props.userChoice;
    const computerChoice = this.props.computerChoice;

    const userImage = <img className='img-responsive' src={userChoice === 0 ? rock : userChoice === 1 ? paper : userChoice === 2 ? scissors : undefined} alt='object played'/>;

    const computerImage = <img className='img-responsive computer' src={computerChoice === 0 ? rock : computerChoice === 1 ? paper : computerChoice === 2 ? scissors : undefined} alt='object played'/>;

    return (
      <div className='columns'>
        <div className='column col-2 col-mx-auto text-center'>
          <h1 id='user'>YOU</h1>
          <h2>{this.props.userResult}</h2>
          {userChoice !== -1 &&
            userImage
          }
        </div>

        <div className='column col-2 col-mx-auto text-center'>
          <h1 id='computer' className='computer'>COMPUTER</h1>
          <h2 className='computer'>{this.props.computerResult}</h2>
          {computerChoice !== -1 &&
            computerImage
          }
        </div>
      </div>
    );
  }

}

export default Display;
