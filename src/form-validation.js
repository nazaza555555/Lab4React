import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormValidation() {
const {register, handleSubmit, formState: {errors}} = useForm()

const onSubmitForm = (event) => {
//...
}
const err = { fontSize: 'smaller', color: 'red' }

return (
<div className="mt-3 mb-5 mx-auto p-3 rounded" 
    style={{ width: '400px', background: '#cee'}}
    >
<form onSubmit= {handleSubmit (onSubmitForm)}>
     <div className="form-group mb-3">
<label htmlFor="name">ชื่อสินค้า *</label>
<input type="text" id="name" name="name" maxlength="50" 
className="form-control form-control-sm"
{...register('name', {required: true, maxLength:30})}
/>       
{errors.name && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
</div>
<div className="form-group mb-3">
<label htmlFor="price">ราคาสินค้า *</label>
<input type="number" id="price" name= "price" step="any" 
    className="form-control form-control-sm"
{   ...register('price',
{validate: value => parseFloat(value) > 0})
}
/>
{errors.price && <div style={err}>กำหนดราคาสินค้า...</div>}
</div>
<div className="form-group mb-3">
<label htmlFor="detail">รายละเอียดสินค้า *</label>
<textarea id="detail" name="detail" rows="2"
className="form-control form-control-sm" 
{...register('detail',
{ required: true, minLength: 1, maxLength: 200})
}
>
</textarea>
{errors.detail && <div style={err}>ต้องกําหนด...</div>}
</div>
<div className="text-center mt-4">
<button className="btn btn-sm btn-primary px-4">OK
</button>
</div>
</form>
</div>
)
}