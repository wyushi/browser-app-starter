import React from "react";

type TextInputProp = {
    text: string;
    onInputTextChange: (value: string) => void,
    submitButtonClick: () => void
};

type PostInputType = (props: TextInputProp) => React.ReactElement<TextInputProp>;

const TextInput: PostInputType = ({
    text = "",
    onInputTextChange,
    submitButtonClick
}) => (
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