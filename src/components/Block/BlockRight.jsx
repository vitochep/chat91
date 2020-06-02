import styled from 'styled-components'
import {BlockHalf} from 'components/Block'

const BlockRight = styled(BlockHalf)`

${({theme}) => `
      	background-color: ${theme.colors.backgroundRight};
   `}
`;

export default BlockRight;