// import React, {useState, useEffect} from 'react';
// import {Text} from 'react-native';

// const TimerComponent = ({minutes, seconds, onTimeout, isOtpEntered}: any) => {
//   const [remainingTime, setRemainingTime] = useState(minutes * 60 + seconds);
//   useEffect(() => {
//     let interval: any = null;
//     if (remainingTime > 0 && !isOtpEntered) {
//       interval = setInterval(() => {
//         setRemainingTime((remainingTime: any) => remainingTime - 1);
//       }, 1000);
//     } else {
//       onTimeout();
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [remainingTime, onTimeout, isOtpEntered]);

//   const displayMinutes = Math.floor(remainingTime / 60)
//     .toString()
//     .padStart(2, '0');
//   const displaySeconds = (remainingTime % 60).toString().padStart(2, '0');

//   return (
//     <Text
//       style={{
//         fontSize: 34,
//         fontWeight: '700',
//       }}>{`${displayMinutes}:${displaySeconds}`}</Text>
//   );
// };

// export default TimerComponent;

const returnTimerValue = (time: any) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  return `${minutes}${':'}${
    seconds <= 9 && seconds >= 0 ? `0${seconds}` : seconds
  }`;
};

export default returnTimerValue;
