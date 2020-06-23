import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Wrapper = styled(Block)`
	${({width, height}) => `
		width: ${width};
		height: ${height};
	`}

	& form {
		& > input {
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
		position: absolute;
		width: inherit;
		height: inherit;
		overflow: hidden;
		z-index: 9;
		opacity: 0;
	}
`;

let Upload = ({children, action, autoSubmit, onChange, width, height, dialogId, updateAvatar}) => {
    const onChangeLocal = React.useCallback((e) => {
        e.preventDefault();

        if (autoSubmit) {
            e.currentTarget.parentNode.submit();
            updateAvatar();
        }
        return onChange(e);
    }, [
        autoSubmit,
        onChange,
        updateAvatar,
    ]);

    const formSubmit = (event) => {
        event.preventDefault()

        fetch(action, {
            method: 'POST',
            body: new FormData(event.target)
        }).then((resp) => {
            let data = resp.json();
            updateAvatar(data.avatar)
        })
    }

    return <Wrapper width={width} height={height}>
        <form encType="multipart/form-data" method="post" action={action}
              onSubmit={formSubmit}>
            <input
                type="file"
                name="avatar"
                onChange={onChangeLocal}/>
            <input name="dialogId" type="hidden" value={dialogId}/>
        </form>
        {children}
    </Wrapper>;
};

Upload = React.memo(Upload);
Upload.defaultProps = {
    autoSubmit: false,
    onChange: () => {
    },
};

export default Upload;
