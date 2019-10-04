import React, { Component } from 'react';
 
class Form extends Component {
    constructor(props) { //生命周期，dom挂载前   构造函数
        super(props);
 
        this.initialState = {//定义提交对象格式
            name: '',
            job: ''
        };
 
        this.state = this.initialState;//初始化当前作用域的state
    };
    handleChange = event => { //通过 react 的 onchange 时间绑定， 类似于vue 的 v-modle?
        const {name, value} = event.target;
        // console.log('coming');
        // console.log(event);//event 对象
        // console.log(event.target); // dom 
        // console.log(name); // dom name属性
        // console.log(value);//dom  value 属性
        this.setState({//修改 state  的字段值
            [name] : value
        });
    };
    submitForm = () => {// 提交表单数据
        this.props.handleSubmit(this.state);  // 调用传递过来的 添加方法
        this.setState(this.initialState); // 初始化表单状态
    }
    render() {
        const { name, job } = this.state; //我的理解为解构出对象的字段 然后做了绑定
        /* 这里通过 value 绑定值 然后 onchange 实现动态修改 值 从而事项了 类似于vue 的 v-model 双向绑定？ */
        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}/>
                    <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
                    </form>
             
        );
    }
}
export default Form;