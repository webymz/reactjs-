import React,{ Component} from 'react'; 

class Form extends Component {
    constructor(props) {        //返回创建此对象的构造函数
        super(props);           //调用父对象的构造函数
        this.initialState = {
            name: '',
            job: ''
        };
 
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        console.log({name, value})
     
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 
        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}
                />
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} 
                />
            </form>
        );
    }
}

export default Form;