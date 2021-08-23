import styled from 'styled-components';

import {
    theme,
    getMargin,
} from '../../config';

const CardText = styled.p `
  margin-top: ${(props) => getMargin(props, 'cardText', 'top')};
  margin-bottom: ${(props) => getMargin(props, 'cardText', 'bottom')};
  &:last-child {
    margin-bottom: ${(props) => getMargin(props, 'cardText', 'lastChildBottom')};
  };
`;

CardText.defaultProps = {
    theme,
};

export { CardText };