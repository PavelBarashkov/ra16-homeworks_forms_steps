import { IForm } from '../From/Form'
import { Item } from '../item/Item'
interface IListProps{
    list: IForm[]
    handlBntdelet: (e: IForm) => void
}

export const List = ({list, handlBntdelet}: IListProps) => {
  return (
    <div className='list'>
        {list.map(item => (
            <Item 
                key={item.id }
                item={item} 
                handlBntdelet={handlBntdelet}
            />
        ))}
    </div>
  )
}
