import React from 'react'

export default function FormBootstrap() { 
    return (
<div className="mt-3 mx-auto p-3" style={{background: '#c25'}}>
<form>
<div className="form-group mb-3">
<label htmlFor="login">Email</label>
<input type="text" id="login" name="login"
    className="form-control"
/>
</div>
<div className="form-group mb-3">
<label htmlFor="pswd">Password</label>
<input type="password" id="pswd" name="pswd"
className="form-control"
/>
</div>
<div className="form-group mb-3">
<label htmlFor="Name">Nickname</label>
<input type="text" id="Name" name="Name"
className="form-control"
/>
</div>
<div className="form-group mb-3">
<label htmlFor="spc">Species</label>
<input type="text" id="spc" name="spc"
className="form-control"
/>
</div>
<div className="form-group mb-4">
<label htmlFor="sel1">Select</label>
<select id="sel1" name="sel1" className="form-select">
<option value="1">Item 1</option> 
<option value="2">Item 2</option>
<option value="3">Item 3</option>
</select>
</div>
<div align="center">
<button className="btn btn-primary">OK</button>
</div>
</form>
</div>
)
}
