import './style.css'

export const TodosEmpty = () => {
  return (
    <div className='TodosEmpty'>
      <h2 className='TodosEmpty-primary_text'>
        You haven't created any Todo yet
      </h2>
      <p className='TodosEmpty-secondary_text'>Create your first Todo :)</p>
    </div>
  )
}
