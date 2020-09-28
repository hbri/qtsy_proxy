import React, {useState} from 'react';

/* instead of passing inital value in useState, you can
have it generated and returned by a function, then pass
that function into useState, like so

function initalValue() {
  return 10;
};
then you would call useState(() => initalValue())
*/

const Test = () => {
  // or if not destructured up top, React.useState()
  const [count, setCount] = useState(10)
  // the above useState function will return an array
  // so you would put var myArray = useState(...)
  // however, it is most often destructured like above
    // the first value in array is thevalue of the state
    // the second is a function that lets you update that value, in this case 'count'
  // this is how we are storing state for this counter

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
    </div>
  )
  // can also use a function in setCount like so:
  // setCount(curCount => curCount + 1) where the func
  // references whatever is given as the param in state, in this case count, so that curCount + 1 is the same as count + 1 outside of the function
};

// ALTERNATE USE CASE WITH OBJECT AND TWO PARAMS
// use case below is showing how to only update ONE of the state variables, in this
// case that is updating count while NOT impacting the other one, count2
const Test = () => {

  const [{count, count2}, setCount] = useState({count: 10, count2: 20});

  return (
    <div>
      <button onClick={() => setCount(curState => ({...curState, count: curState.count + 1}))}>
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  )

};
// using this format with the two states, you need to keep the states you had before, like when count2 was set to 20, otherwise they get wiped. that is what is being done with the ... function
// the ... is equivalent to using:
// count2: curState.count2


// ALTERNATE VERSION OF ABOVE WITH STATE VARs BROKEN UP
// just like above, this is to update  count without impacting count2
const Test = () => {

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  )

};

// to update BOTH of them, pass both functions into onClick:
// onClick={() => {
//   setCount(c => c + 1);
//   setCount2(c => c + 1);
// }}

export default Test;