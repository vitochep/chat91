import styled from 'styled-components'
import {BlockHalf} from 'components/Block'

const BlockRight = styled(BlockHalf)`
padding: 30px 0;
${({theme}) => `
      	background-color: ${theme.colors.backgroundRight};
   `}
`;

export default BlockRight;