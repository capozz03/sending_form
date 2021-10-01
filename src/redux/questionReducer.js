import questionsList from './../data.json';

let initialState = {
    questions: questionsList.data,
    newTextAnswer: ''
};

const questionsReducer = (state = initialState) => {
    return state;
}

export default questionsReducer;