import React from 'react'

export default function FormSearch() { 
    const styles = ['bold', 'italic', 'underline']
    const sizes = ['small', 'medium', 'large', 'larger'] 
    let checkedStyles = []
    let checkedSize = ''
    const switchReq = React.useRef ( )
    const textKw = React.useRef ()
    const btOk = React.useRef()
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()

    const onBlurPassword = () => {
    let pswd = textPswd.current.value
    if (pswd !== '' && !pswd.match(/^[0-9a-zA-Z]+$/)) {
    textPswd.current.value = ''
    alert('ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
    }
}
    const onBlurPassword2 = () => {
    if (textPswd2.current.value !== textPswd.current.value) {
    textPswd2.current.value = ''
    alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน' )
    }
}

const onChangeKw = () => {
if (textKw.current.value.trim() !== '') { 
    btOk.current.disabled = false
} else {
    btOk.current.disabled = true

}
}

    


    const onChangeCheck = (event) => { 
        let checked = event.target.checked
        let value = event.target.value
        let idx = checkedStyles.indexOf(value)
        if (checked && idx === -1) {
            checkedStyles.push(value) 
        } else {
            checkedStyles.splice(idx, 1)
        }
    }

    const onChangeRadio = (event) => { 
        
        checkedSize = event.target.value
    }

    const onclickButton = () =>  {
        if (switchReq.current.checked) {
        if (checkedStyles.length === 0) {
            alert('Please select style')
return
        }
    }
    let msg = 'selected style(s): ' + checkedStyles.join(', ')
    alert (msg)
}
return (
    
    
    <div className="mt-4 mx-auto p-3 rounded"
        style={{ width: '450px', background: '#cee'}}
        >
            <div style={{margin:'30px'}}>
    <form>
    <input type="text" name="kw" placeholder="ค้นหา" 
        ref={textKw} onInput={onChangeKw}
        />&nbsp;
        <button ref={btOk} disabled>ตกลง</button>
    </form>
    </div>
    <div className="mt-3 mx-auto p-3" style={{background: '#cfc'}}>
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
<div className="form-group mb-4">
<label htmlFor="sel1">Select</label>
<select id="sel1" name="sel1" className="form-select">
<option value="1">Item 1</option> 
<option value="2">Item 2</option>
<option value="3">Item 3</option>
</select>
</div>
<div className="form-group mb-3">
<label htmlFor="login">School</label>
<input type="text" id="login" name="login"
    className="form-control"
/>
</div>

</form>
</div>
<form>
<div className="mt-4 mx-auto p-3 rounded"
    style={{ width:'400px', background: '#cee' }}>
    <form>
    <div className="form-group mb-2">

    <label htmlFor="login">ชื่อผู้ใช้ (Login)</label> 
    <input type="text" id="login" maxlength="20"
     className="form-control form-control-sm"
/>
</div>
<div className="form-group mb-2">
<label htmlFor="pswd">รหัสผ่าน</label>
<input type="password" id="pswd" maxLength="10" 
    className="form-control form-control-sm"
    ref={textPswd} onBlur={onBlurPassword} 
/>
</div>
<div className="form-group. mb-2">
<label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
 <input type="password" id="pswd2"
 className="form-control form-control-sm"
 ref={textPswd2} onBlur={onBlurPassword2}
/>
</div>
<div className="form-group mb-4">
<label htmlFor="memo">บันทึกช่วยจำ</label>
<textarea id="memo" name="memo" rows="2"
className="form-control form-control-sm">
</textarea>
</div>
<div className="text-center">
<button className="btn btn-sm btn-primary px-4">OK
</button>
</div>
</form> 
</div>
</form>
            <form>
                
                <span>font style:</span>&nbsp; &nbsp;
                {
                    styles.map((st, i ) => {
                        return (
                            
                            <div className="from-check-innline">
                                <input type="checkbox" id={'check'+i} value={st}
                                    className= "from-check-input"
                                    onChange={onChangeCheck}  
                                    />
                                    <label htmlFor={'check'+i}
                                    className="from-check-label">{st}
                                    </label>
                            </div>
                        )
                    })
}
<br/>
    <span>font size:</span>&nbsp;&nbsp;
{
    sizes.map((sz,i) => {
        return (
            <div className="form-check from-check-inline">
                <input type="radio" id={'radio'+i}
                name="fontSize" value={sz}
                className="from-check-input"
                onChange={onChangeCheck}
          
/>
<label htmlFor={'radio'+i}
    className="form-check-label"> {sz}
</label>
</div>
)

})
} 
    
    
<div className="form-check form-switch mt-3"> 
<input type="checkbox" id="sw" value="require" 
    className="form-check-input" ref={switchReq}
/>
<label htmlFor="sw" className="form-check-label">require 
</label>
</div>
<div className="text-center mt-4">
    <button type="button" onclick={onclickButton}
        className="btn btn-sm btn-primary px-4">OK
    </button>
    </div>
    </form>
    
</div>

        )
        
}




