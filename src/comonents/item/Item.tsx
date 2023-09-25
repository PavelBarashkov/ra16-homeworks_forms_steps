import { IForm } from '../From/Form'

interface IItemProps {
    item: IForm
    handlBntdelet: (el: IForm) => void
}

export const Item = ({item, handlBntdelet}: IItemProps) => {
  return (
    <div className='container_Item'>
        <div>{item.date}</div>
        <div>{item.distance}</div>
        <div><button onClick={() => handlBntdelet(item)}>Удалить</button></div>

    </div>
  )
}
