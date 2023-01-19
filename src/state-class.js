import React from 'react'

export default class Cart extends React.Component {
    state = { numItems: 0 }

onClickAddCart = () => {
let n = this.state.numItems
n++
this.setState({ numItems: n })
}

onClickDeleteCart = () => {
if (this.state.numItems > 0) {
this.setState({ numItems: this.state.numItems - 1 })
    }
}
render() {
return (
<div style={{margin: 'auto', marginTop: 20 , textAlign : 'center'}}>
<div>จำนวนสินค้าในรถเข็น: {this.state.numItems}</div><br/>
<button onClick={this.onClickAddCart}>เพิ่มสินค้าในรถเข็น
</button>
<button onClick={this.onClickDeleteCart}>ลบสินค้าในรถเข็น
</button>
</div>
)
}
}