import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const AuthForm = (props: { setAutheticated: (v: boolean) => void }) => {

    const actionUrl = "/User/auth";
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        axios.post(actionUrl, {
            login: values.email,
            password: values.password
        }).then(response => {
            console.log("Response ", response)
            if (response.status === 200) {
                localStorage.setItem('tokenData', response.data.token.token)
                console.log('Data from local storage ', localStorage.getItem('tokenData'))
                props.setAutheticated(true);
            }
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        })
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Form
                name="normal_login"
                style={{
                    width: 300,
                    height: 400,
                    padding: 20,
                    backgroundColor: 'white'
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Введите Ваш email!' }]}
                >
                    <Input type='username' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Адрес электронной почты" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите Ваш пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="#">
                        Забыли пароль?
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Авторизоваться
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default AuthForm;