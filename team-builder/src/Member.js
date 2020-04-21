import React, {useState} from 'react'

function Member ({details}) {
    const [edit, setEdit] = useState(false);
    const [style, setStyle] = useState({});

    if (!details) {
        return <h3>Fetching Team Member Data</h3>
    }
    return (
        <div className='team-container'>
      <h2 contentEditable={edit} style={style}>{details.name}</h2>
      <p contentEditable={edit} style={style}>Email: {details.email}</p>
      <p contentEditable={edit} style={style}>Role: {details.role}</p>
      <button className='edit-button' onClick={() => {
          setEdit(true)
          setStyle({ border: '2px solid #8DCEFF'})
      }}>EDIT</button>
      <button className='edit-button' onClick={() => {
          setEdit(false)
          setStyle({})
      }}>SAVE</button>
    </div>
    )
}

export default Member