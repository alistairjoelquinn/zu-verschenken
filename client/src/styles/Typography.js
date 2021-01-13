import { createGlobalStyle } from 'styled-components';

import font from './fonts/Roboto-Regular.ttf';
import fontMedium from './fonts/Roboto-Medium.ttf';
import fontBold from './fonts/Roboto-Bold.ttf';
import oswald from './fonts/Oswald-VariableFont_wght.ttf';
import quicksand from './fonts/Quicksand-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${font});
  }
  @font-face {
    font-family: RobotoMedium;
    src: url(${fontMedium});
  }
  @font-face {
    font-family: RobotoBold;
    src: url(${fontBold});
  }
  @font-face {
    font-family: Oswald;
    src: url(${oswald});
  }
  @font-face {
    font-family: Quicksand;
    src: url(${quicksand});
  }
  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
