import React from "react";

type TextInputProp = {
    text?: string;
    onInputTextChange?: (value: string) => void,
    submitButtonClick?: () => void
};

const TextInput = ({
    text = "",
    onInputTextChange = (_) => {},
    submitButtonClick = () => {}
}: TextInputProp): React.ReactElement<TextInputProp> => (
    <div>
        <input
            value={text}
            onChange={e => onInputTextChange(e.target.value)}
        />
        <button
            onClick={_ => submitButtonClick()}
        > -&gt; </button>
    </div>
);

export default TextInput;