import React, { Component } from 'react';
import Form from "./index"

class Test extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(datas) => {
                    console.log(datas)
                }}>
                    <div>
                        账号：<Form.Input name="loginId" />
                    </div>
                    <div>
                        密码：<Form.Input name="loginPwd" type="password" />
                    </div>
                    <div>
                        <Form.Button>提交</Form.Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Test;