import React from 'react';
import {HeaderWrapper} from 'components/Block'
import {InputSearcher} from './../Input'
import {IconSearch} from './../Icons'

const HeaderLeft =()=>{

    return <HeaderWrapper>
        <InputSearcher/>
        <IconSearch/>
    </HeaderWrapper>
};

export default React.memo(HeaderLeft)