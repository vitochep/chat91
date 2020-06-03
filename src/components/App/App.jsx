import React from 'react';
import './../../app.scss';
import {PrimaryMain} from 'components/Block'
import {BlockLeft} from 'components/Block'
import {BlockRight} from 'components/Block'
import {HeaderLeft} from 'components/Block'

const App = () => {

    return <React.Fragment>
        <PrimaryMain>
            <BlockLeft>
                <HeaderLeft/>
            </BlockLeft>
            <BlockRight>

            </BlockRight>
        </PrimaryMain>
    </React.Fragment>;
};

export default React.memo(App);
