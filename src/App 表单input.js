import React, { Component } from 'react';

class App extends Component {
  state = {
    val: "",
    loves: ["篮球", "跳舞", "画画", "其他"],
    chooseLoves: []
  }
  render() {
    const checkboxs = this.state.loves.map(it => (<label key={it}>
      <input
        type="checkbox"
        checked={this.state.chooseLoves.includes(it)}
        onChange={(e) => {
          if (e.target.checked) {
            this.setState({
              chooseLoves: [...this.state.chooseLoves, it]
            })
          } else {
            this.setState({
              chooseLoves: this.state.chooseLoves.filter(item => item !== it)
            })
          }
        }}
      />
      {it}
    </label>))

    
    return (
      <div>
        {/* input框 */}
        {/* <input type="text" value={this.state.val} onChange={(e) => {
          this.setState({
            val: e.target.value
          })
        }} />
        <button onClick={() => {
          console.log(this.state.val)
        }}>获取文本框的值</button> */}


        {/* 多选框 */}
        {checkboxs}
        <button onClick={()=>{
          console.log(this.state.chooseLoves)
        }}>获取兴趣爱好</button>



      </div>
    );
  }
}

export default App;
