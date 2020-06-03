import styled from 'styled-components'
import {BlockHalf} from 'components/Block'

const BlockLeft = styled(BlockHalf)`
padding: 0 30px;
${({theme}) => `
      	background-color: ${theme.colors.backgroundLeft};
   `}
`;

export default BlockLeft;