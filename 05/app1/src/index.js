import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function calcWinner(squares){
  let winnerStates = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];
  for(let i=0;i<winnerStates.length;i++){
      let [a,b,c]=winnerStates[i];
      if(squares[a]&&squares[a]==squares[b]&&squares[b]==squares[c]){
          return squares[a]
      }
  }
  return null
}
function Square(props){
  return(
      <button className='square' onClick={props.onClick}>{props.value}</button>
  )
}
class Board extends React.Component{
  
  render(){
      let squares=[]
      let squaresRows=[[],[],[]];
      let status = "Next Player :"+(this.props.isNextX?'X':'O');
      let winner = calcWinner(this.props.squares)
      if(winner){
          status = <span style={{color:'red'}}>{'Winner: ' + winner}</span>
      }
      this.props.squares.forEach((v,i)=>{
          squaresRows[parseInt(i/3)].push(<Square onClick={()=>this.props.handleClick(i)} key={i} value={v} />)
      })
      squaresRows.forEach((v,i)=>{
          squares.push(<div key={i}>{v}</div>)
      })
      
      return(
          <div>
              <div>{status}</div>    
              <div>
                  {squares}  
              </div>
          </div>
      )
  }
}
class Game extends React.Component{
  constructor(props){
      super(props);
      this.state={
          
          isNextX:true,
          stepNumber:0,
          historyBoards:[
              {squares:Array(9).fill(null)}
          ]

      }
  }
  handleClick(i){
      let historyBoards = this.state.historyBoards.slice(0,this.state.stepNumber+1);
      let squares = historyBoards[historyBoards.length-1].squares.slice()
      if(squares[i] || calcWinner(squares)){
          return
      }
      squares[i]=this.state.isNextX?'X':'O';
      historyBoards.push({squares:squares})
      this.setState({
          historyBoards,
          isNextX:!this.state.isNextX,
          stepNumber:historyBoards.length -1,
      })
  }
  jumpTo(i){
      this.setState({
          stepNumber:i,
          isNextX:i%2==0
      })
  }
  render(){
      let historyBoards = this.state.historyBoards.slice();
      let squares = historyBoards[this.state.stepNumber].squares;
      return(
          <div className='game'>
              <div className='gameBoard'>
              <Board squares={squares} isNextX={this.state.isNextX} handleClick={(i)=>{this.handleClick(i)}}/>
              </div>
              <div className='gameInf'>
                  <h4>History Step:</h4>
                  <ol style={{cursor: 'pointer'}}>
                      {
                          this.state.historyBoards.map((v,i)=>{
                              return <li key={i} onClick={()=>this.jumpTo(i)}>step of {i}</li>
                          })
                      }    
                  </ol>
              </div>
              
          </div>
      )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
