export const nameChange = (text) => {
    console.log(text)
    return {
        type: 'NAME_CHANGE',
        payload: text
    };

};