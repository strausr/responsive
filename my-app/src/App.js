import React, { Component } from 'react';
import { Image }  from 'cloudinary-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
        </div>
        <div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
          <div className={'res'} >
            <Image
              cloudName="rcstraus"
              publicId="time"
              crop="scale"
              width="auto"
              responsive
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
