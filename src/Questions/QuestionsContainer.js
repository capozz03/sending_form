import React, { useEffect, useState, useCallback }  from 'react';
import Questions from './Questions';
import s from './Questions.module.css';
import { useSelector} from 'react-redux';

const QuestionsContainer = () => {

    const [value, setValue] = useState("");

    const questionsList = useSelector(state => state.questionsList);

    return (
        <form>
            {questionsList.questions.map(list => <Questions question={list.question} id={list.id} setValue={setValue} value={value}/>)}
            
            <div className={s.app__button}>
                <button type="submit">Отправить</button>
            </div>
            
        </form>
)

}    

export default QuestionsContainer
