import styled, { css } from 'styled-components';


import {
    theme,
    getColor,
    getPadding,
    getBorderRadius,
} from '../../config';

const borderRadius = (props) => {
    if (props.noRadius) {
        return css `
      border-radius: ${getBorderRadius(props, 'cardHeader', 'noRadius')};
    `;
    }

    return css `
    border-top-left-radius: ${getBorderRadius(props, 'cardHeader', 'topLeftRight')};
    border-top-right-radius: ${getBorderRadius(props, 'cardHeader', 'topLeftRight')};
  `;
};

const CardHeader = styled.div `
  padding: ${(props) => getPadding(props, 'cardHeader', 'default')};
  background-color: ${(props) => getColor(props, 'cardHeader', 'background')};
  border-bottom: 1px solid ${(props) => getColor(props, 'cardHeader', 'borderBottom')};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${(props) => borderRadius(props)}
`;

CardHeader.defaultProps = {
    theme,
};

export { CardHeader };