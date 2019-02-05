## ちゃんと差分レンダリングする

## style には CSS in JS を実現するライブラリ eomtion を使用
- npm install --save emotion
- import { css } from 'emotion';

{this.state.numbers.map((number, index) => { return <li key={index}>{number.num}</li> })}