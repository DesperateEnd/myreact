import React,{Component} from 'react';
// import logo from './logo.svg';  原框架的 log
import Table from './Table';//引入table 组件
import Form from './form' //引入form 组件
import './App.css';


class App extends Component {
  state = {//声明一个数据对象
    characters : [] //table 渲染的列表数组
  };
handleSubmit = character => {//向 列表数组内添加新对象 ...为es6的展开运算符
  this.setState({characters: [...this.state.characters, character]});
};
removeCharacter = index => {//删除 列表数组内的一个 对象
  const { characters } = this.state;
  // filter 不会改变原来的数组，而是创建一个新数组，并且是在 JavaScript 中修改数组的首选方法。 这个特殊的方法是测试索引与数组中的所有索引，并返回除了传递的索引之外的所有索引元素。
  this.setState({
      characters: characters.filter((character, i) => { 
          return i !== index;
      })
  });
};
  render() {
  
      return (
        <div className="container">
        <Table
            characterData={this.state.characters}//传递列表数组
            removeCharacter={this.removeCharacter} //传递删除方法
        />
        <Form 
          handleSubmit={this.handleSubmit} //传递 增加方法
        /> 
    </div>
     
      );
  }
}

export default App;
