import React, { Component } from 'react';
import { Provider } from "./formContext";
import PropTypes from "prop-types"
import FormInput from "./FormInput"
import FormButton from "./FormButton"

class Form extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
    }

    state = {
        formData: {}, // 表单数据对象
        // 修改formData中的数据
        changeFormData: (name, val) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>

        );
    }
}

Form.Input = FormInput
Form.Button = FormButton

export default Form;