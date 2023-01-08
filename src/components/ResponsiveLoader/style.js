import styled from 'styled-components'
import { dot1_, dot2_, dot3_ } from './animation'

export const Loader = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    width: 160px;
    height: 100px;
    margin-left: -80px;
    margin-top: -50px;
    border-radius: 5px;
    background: #1e3f57;
    animation: ${dot1_} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }

  .loader:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
    border-radius: 3px;
    background: #3c517d;
    animation-name: ${dot2_};
  }

  .loader:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 0 0 5px 5px;
    background: #6bb2cd;
    animation-name: ${dot3_};
}
`
