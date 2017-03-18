import * as React from 'react';

class App extends React.Component<any,any> {
  render() {

    return (
      <div>
        <div style={{position:'absolute'}}>
          <h1 style={{
            textAlign:'center',
            paddingLeft:"10%",
            paddingRight:"50%",
            paddingTop:"3em"
          }}>
            Gambit Queen is Now Available on Kindle!
          </h1>
          <h3 style={{
            textAlign:'center',
            paddingLeft:"10%",
            paddingRight:"50%"
          }}>A young drug dealer with genetic gifts that she herself doesn't fully understand is coerced into attending a top-secret school for incubating covert operatives. She finds herself part of a deadly geo-political game of chess played by the school's headmaster. Before the world is consumed by a Third World War, she must transcend the game, becoming a chess player in her own right, not just a queen upon a global chessboard.</h3>
          <p style={{
            textAlign:'center',
            paddingLeft:"10%",
            paddingRight:"50%" 
          }}>"I loved every minute of it!" -Mrs. S</p>
          <button style={{
            marginLeft:"23%",
            marginRight:"50%",
            outline: 0,
            background:'none', 
            border:'2px solid #F7CA18',
            padding: '10px 35px',
            fontSize:15,
            color:'#F7CA18',
            cursor:'pointer',
            borderRadius:50,
            transition: 'all 0.3s ease'
          }}>Buy for Kindle</button>
        </div>
        <img src="/assets/GambitQueenLandingPage.png" style={{
          width:"100%",
          margin: "auto"
        }} />
      </div>
    );
  };
};

export default App;
