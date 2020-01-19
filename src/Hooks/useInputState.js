import { useState } from 'react';

export const useInputState = () => {
    const [inputValue, setInputValue] = useState('');

    return {
        inputValue,
        onInputChange: evt => setInputValue(evt.target.value),
        resetInputValue: () => setInputValue('')
    }
}

export default useInputState;
