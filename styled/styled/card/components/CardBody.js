import styled from 'styled-components';


import {
    theme,
    getPadding,
    getMargin,
} from '../../config';

const CardBody = styled.div `
  flex: 1 1 auto;
  padding: ${(props) => getPadding(props, 'cardBody', 'default')};
  & > a {
    &:hover {
      text-decoration: none;
    };
    & + a {
      margin-left: ${(props) => getMargin(props, 'cardBody', 'leftA')};
    };
  };
`;

CardBody.defaultProps = {
    theme,
};

export { CardBody };