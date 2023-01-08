import styled from 'styled-components'
import { ball624, barUp1, barUp2, barUp3, barUp4, barUp5 } from './animation'

export const Loader = styled.div`
    position: relative;
    width: 200px;
    height: 200px;

  .loader__bar {
    position: absolute;
    bottom: 50px;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 120px;
    background: rgb(0, 0, 0);
    transform-origin: center bottom;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  }

  .loader__bar:nth-child(1) {
    left: 45px;
    transform: scale(1, 0.2);
    -webkit-animation: ${barUp1} 4s infinite;
    animation: ${barUp1} 4s infinite;
  }

  .loader__bar:nth-child(2) {
    left: 65px;
    transform: scale(1, 0.4);
    -webkit-animation: ${barUp2} 4s infinite;
    animation: ${barUp2} 4s infinite;
  }

  .loader__bar:nth-child(3) {
    left: 85px;
    transform: scale(1, 0.6);
    -webkit-animation: ${barUp3} 4s infinite;
    animation: ${barUp3} 4s infinite;
  }

  .loader__bar:nth-child(4) {
    left: 105px;
    transform: scale(1, 0.8);
    -webkit-animation: ${barUp4} 4s infinite;
    animation: ${barUp4} 4s infinite;
  }

  .loader__bar:nth-child(5) {
    left: 125px;
    transform: scale(1, 1);
    -webkit-animation: ${barUp5} 4s infinite;
    animation: ${barUp5} 4s infinite;
  }

  .loader__ball {
    position: absolute;
    bottom: 75px;
    left: 45px;
    width: 12px;
    height: 12px;
    background: rgb(44, 143, 255);
    border-radius: 50%;
    -webkit-animation: ${ball624} 4s infinite;
    animation: 4s ${ball624} infinite;
  }
`
