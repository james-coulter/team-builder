import React from 'react'

function TeamForm({values, onInputChange, onSubmit}) {
    return (
        <form className='team-form'>
            <h2>Add Team Members</h2>
            <h3>Input your team's information here</h3>
            <label>Name:&nbsp;
            <input type="text" value={values.name} onChange={onInputChange} name='name'/></label>
            <label>Email:&nbsp;
            <input type="text" value={values.email} onChange={onInputChange} name='email'/></label>
            <label>Role:&nbsp;
            <input type="text" value={values.role} onChange={onInputChange} name='role'/></label>
            <button className='submit' onClick={onSubmit}>SUBMIT</button>
        </form>
    )
}

export default TeamForm