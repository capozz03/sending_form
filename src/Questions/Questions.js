import React, { useEffect, useState } from 'react';
import s from './Questions.module.css';

const Questions = (props) => {
    const [value, setValue] = useState("");

    const onInputChangeGlobal = (e) => {
        props.setValue(e.target.value);
        setValue(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem(props.question, JSON.stringify(value))
    })

    console.log(JSON.parse(localStorage.getItem(props.question)));

    return (
        <>
        <div className={s.section__title}>
            <label>
                {props.question}
            </label>
        </div>
            <div className={s.section__input}>
                <input name={props.question} type="text" placeholder="*Введите текст" onChange={onInputChangeGlobal}/>
            </div>
        </>
        )
    }


export default Questions;