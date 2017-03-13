import * as React from 'react';

class App extends React.Component<any,any> {
  render() {

    return (
      <div style={{width:"100%"}}>
        <img src="/assets/GambitQueenLandingPage.png" style={{
          position:'absolute'
        }} />
        <h1 style={{
          position:'absolute',
          marginTop:100,
          marginLeft:50
        }}>
          Buy Gambit Queen Now on Kindle!
        </h1>
      </div>
    );
  };
};

export default App;
