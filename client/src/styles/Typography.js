import { createGlobalStyle } from 'styled-components';

import font from './fonts/Roboto-Regular.ttf';
import fontMedium from './fonts/Roboto-Medium.ttf';
import fontBold from './fonts/Roboto-Bold.ttf';

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
