import React from 'react'

const Book = (props) => {
  return (
    <div>
        <div className="book_links_item">
              <img src={props.image}alt="" />
              <div className="text">
                <h2>{props.name}</h2>
                <span>{props.description}</span>
                      <button className='btn' onClick={ () => props.action(props.name)}>button</button>
              </div>
            </div>
    </div>
  )
}

export default Book