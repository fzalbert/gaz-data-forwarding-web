import React, {  } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Button, Form, Input, Select } from 'antd';
import { DeviceTypeOptions } from '../../enum/DeviceType';
import { deviceFormRules } from './rules/DeviceFormRules';
import { NitDeviceTypeOptions } from '../../enum/NitDeviceType';
import { NitOperationTypeOptions } from '../../enum/NitOperationType';

const DeviceForm: React.FC<{ deviceId?: number }> = (props: { deviceId?: number }) => {

    const actionUrl = "/Device/create";

    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) { 
            console.log('Failed:', errorInfo);
        }

        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer "${localStorage.getItem('tokenData') ?? "empty_token"}"`
            }
        }

        const request = props.deviceId ?
            axios.put(actionUrl, values, config) : axios.post(actionUrl, values, config);

        request.then(response => {
            console.log("Response ", response)
            alert("Status is " + response.status)
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        }).finally(() => {
            alert("FINISHED");
        })
        form.validateFields();
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Form
                form={form}
                name="basic"
                className="login-form"
                style={{
                    width: "100%",
                    padding: 20,
                    height:"100%",
                    backgroundColor: 'white'
                }}
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
            >

                <label>Укажите название прибора учета.</label>
                <Form.Item
                    name="name"
                    rules={deviceFormRules.name}
                >
                    <Input type={'text'} placeholder="Название" />
                </Form.Item>

                <label>Укажите идентификатор объекта в АО "НИТ".</label>
                <Form.Item
                    name="nitId"
                    rules={deviceFormRules.nitId}
                >
                    <Input type={'text'} placeholder="Идентификатор объекта" />
                </Form.Item>

                <label>Укажите идентификатор типа продукта в АО "НИТ".</label>
                <Form.Item
                    name="nitProductTypeId"
                    rules={deviceFormRules.nitProductTypeId}
                >
                    <Input type={'text'} placeholder="Идентификатор типа продукта" />
                </Form.Item>

                <label>Укажите идентификатор магистрального нефтепровода в АО "НИТ".</label>
                <Form.Item
                    name="nitPipelineId"
                    rules={deviceFormRules.nitPipelineId}
                >
                    <Input type={'text'} placeholder="Идентификатор магистрального нефтепровода" />
                </Form.Item>
                
                <label>Выберите тип прибора учета.</label>
                <Form.Item
                    name="type"
                    rules={deviceFormRules.type}
                >
                    <Select options={DeviceTypeOptions} placeholder="Тип прибора учета." />
                </Form.Item>

                <label>Выберите тип прибора учета в АО "НИТ".</label>
                <Form.Item
                    name="nitType"
                    rules={deviceFormRules.nitType}
                >
                    <Select options={NitDeviceTypeOptions} placeholder="Тип прибора учета ." />
                </Form.Item>

                <label>Выберите идентификатор типа операции в АО "НИТ".</label>
                <Form.Item
                    name="nitOperationType"
                    rules={deviceFormRules.nitOperationType}
                >
                    <Select options={NitOperationTypeOptions} placeholder="Идентификатор типа операции." />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default DeviceForm;