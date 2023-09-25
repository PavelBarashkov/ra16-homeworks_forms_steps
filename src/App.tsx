import { useState } from 'react';
import './App.css';
import { Form, IForm } from './comonents/From/Form';
import { List } from './comonents/list/List';

function App() {
    const [list, setList] = useState<IForm[]>([]);

    function handlerForm(form: IForm): void {
        const existingItem: IForm | undefined = list.find((item: IForm): boolean => item.date === form.date);
        const distance = typeof form.distance === 'string' ? parseFloat(form.distance) : form.distance;
        if (existingItem) {
            existingItem.distance += distance;
            setList(prevList => [...prevList]);
        } else {
            setList(prevList => [...prevList, { date: form.date, distance, id: form.id }]);
        }
    }

    function handlBntdelet(e: IForm): void {
        const filterList = list.filter((item: IForm): boolean => item.id !== e.id);
        setList(filterList);
    }
    
    function usaDate(str: string): string {
        const result = str.split('.')
        const data = `${result[1]}.${result[0]}.${result[2]}`
        return data
    }
    
    const sortedList = [...list].sort((a, b) => {
        const dateA = new Date(usaDate(a.date));
        const dateB = new Date(usaDate(b.date));
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <>
            <Form handlerForm={handlerForm} />
            <List 
                list={sortedList} 
                handlBntdelet={handlBntdelet}
            />
        </>
    );
}

export default App;
