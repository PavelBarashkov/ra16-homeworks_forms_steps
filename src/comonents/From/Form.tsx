import { useState } from "react"
import classes from './form.module.css'
export interface IForm {
    date: string
    distance: number
    id: number
}

interface iFromProps {
    handlerForm: (el: IForm) => void
}

export const Form = ({handlerForm}: iFromProps) => {

    const [form, setForm] = useState<IForm>({
        date: '',
        distance: 0,
        id: 0
    })

    function handlerInput({ target }: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.id = form.id + 1
        handlerForm(form);
    }
  return (
    <form className={classes.form}>
        <div className={classes.container_input}>
            <label htmlFor="date">{`Дата (ДД.ММ.ГГ)`}</label>
            <input 
                id="date"
                name="date"
                type="text" 
                value={form.date}
                onChange={handlerInput}
            />
        </div>
        <div className={classes.container_input}>
            <label htmlFor="distance">{`Пройдено км`}</label>
            <input 
                id="distance"
                name="distance"
                type="text" 
                value={form.distance}
                onChange={handlerInput}
            />
        </div>

        <button onClick={handleSubmit} className={classes.form_btn} type="submit">ок</button>

    </form>
  )
}
