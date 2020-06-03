import React from 'react';
import {HeaderWrapper} from 'components/Block'
import {InputSearcher} from './../Input'

const HeaderLeft =()=>{

    return <HeaderWrapper>
        <InputSearcher/>
    </HeaderWrapper>
};

export default React.memo(HeaderLeft)