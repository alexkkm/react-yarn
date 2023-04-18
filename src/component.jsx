import { Component } from "react";

export default class ComponentPage extends Component{
    render(){
        return(
            <div>
                <SetStateExample />
                <ComponentDidMountExample />
                <UsingStateToDefineProps />
            </div>
            
        );
    }
    
}

// Class Component not using state to define props
class NotUsingStateToDefineProps extends Component{
  render(){
      const a=this.props.name
      return(
      <div>
          <p>Not Using State:</p>
          <p>this name is only define when the class is called: {a}</p>
          <p>or you can directly use this.props.name:{this.props.name}</p>
      </div>
      );
  }
}

// Class Component using state to define props
class UsingStateToDefineProps extends Component{
  constructor(props){
      super(props)
      this.state={
          //Define the content of the inital state, which is variables and their default values
          name: "a"
      }
  }
  // self defined method
  changeName=()=>{
    this.setState({name: "b"});
  }
  
  render(){
      return(
          <div>
              <p>Using State:</p>
              <p>this name is define under the state of the class: {this.state.name}</p>
              <button onClick={this.changeName}>Change to b</button>
          </div>
      );
  }
}


// setState: 修改或更新 State 物件內的值
class SetStateExample extends Component{
    constructor(props){
      super(props);
      this.state = {
        count: 1,
      }
    }
    
      plusOne = () => {
        this.setState({
          count: this.state.count + 1,
        })
        console.log(this.state.count) // 1
    
        this.setState({
          count: this.state.count + 1,
        })
        console.log(this.state.count) // 1
    
        this.setState({
          count: this.state.count + 1,
        })
        console.log(this.state.count) // 1

        // 結果: 由于后面的数据会覆盖前面的更改，所以最终只加了一次

        // 对同一个值进行多次 setState， setState 的批量更新策略会对其进行覆盖，取最后一次的执行结果
        // 如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。
      }

      minusOne=()=>{
        this.setState({
            count: this.state.count - 1,
          })
      }

      plusThree=()=>{
        this.setState({
            count:this.state.count+1,
        })
        console.log(this.state.count) // 1

        this.setState({
          count:this.state.count+1,
        })
        console.log(this.state.count) // 1

        setTimeout(() => {
            this.setState({
              count: this.state.count + 2,  // 在 setTimeout 里面的首先拿到新的 count 值 1，
                                            // 再一次 setState，然后能实时拿到 count 的值为 3。
            })  
            console.log(this.state.count) // 3
          })
      }

      render() {
        return (
          <div className="setStateExample">
            <h2>SetState Example</h2>
            <button onClick={this.plusOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.plusThree}>+3</button>
            <div>{this.state.count}</div>
          </div>
        )
      }
}

// componentDidMount(): run a function after the component mounted in DOM tree
class ComponentDidMountExample extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritesite: "runoob"};
    }
    componentDidMount() {   // componentDidMount() 方法在组件挂载后（插入 DOM 树中）立即调用。
      setTimeout(() => {
        this.setState({favoritesite: "google"})
      }, 1000)  // setTimeout(function that would like to call after SOME milesecond delay, SOME)
    }
    render() {
      return (
        <div className="ComponentDidMountExample">
            <h2>ComponentDidMount Example</h2>
            <p>My favorite Site is {this.state.favoritesite}</p>
        </div>
        
      );
    }
}