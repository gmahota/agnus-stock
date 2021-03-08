import React, {useReducer} from 'react'

const Checkboxes = ({items}) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'toggle':
        return state.map(item => {
          if (item.title === action.title) item['checked'] = !action.checked
          return item
        })
      default:
        throw new Error()
    }
  }

  const handleSubmit = () => {
    let selected = state.filter(item => item.checked)
    console.log(JSON.stringify(selected, null, 2))
  }

  const [state, dispatch] = useReducer(reducer, items)

  return (
    <>
      <div className="flex flex-col w-full">
        {state.map((item, i) => (
          <div className="flex flex-row items-center justify-start p-1" key={i}>
            <label className="flex items-center justify-start space-x-2">
              <input
                name={i}
                type="checkbox"
                checked={item.checked}
                onChange={e => dispatch({type: 'toggle', ...item})}
                className="form-checkbox text-blue-500 h-4 w-4"
              />
              <span>{item.title}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-start">
        <button
          className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600"
          onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  )
}

export default Checkboxes
