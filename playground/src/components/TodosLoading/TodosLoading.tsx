import { BsCircle } from 'react-icons/bs'
import './style.css'

export const TodosLoading = () => {
  return (
    <div className='TodosLoading'>
      <ul className='TodosLoading-list'>
        <li className='TodosLoading-list_item'>
          <BsCircle className='TodosLoading-list_item-icon' />
          <span className='TodosLoading-list_item-text'>Charging...</span>
          <BsCircle className='TodosLoading-list_item-icon' />
        </li>
        <li className='TodosLoading-list_item'>
          <BsCircle className='TodosLoading-list_item-icon' />
          <span className='TodosLoading-list_item-text'>Charging...</span>
          <BsCircle className='TodosLoading-list_item-icon' />
        </li>
        <li className='TodosLoading-list_item'>
          <BsCircle className='TodosLoading-list_item-icon' />
          <span className='TodosLoading-list_item-text'>Charging...</span>
          <BsCircle className='TodosLoading-list_item-icon' />
        </li>
        <li className='TodosLoading-list_item'>
          <BsCircle className='TodosLoading-list_item-icon' />
          <span className='TodosLoading-list_item-text'>Charging...</span>
          <BsCircle className='TodosLoading-list_item-icon' />
        </li>
      </ul>
    </div>
  )
}
