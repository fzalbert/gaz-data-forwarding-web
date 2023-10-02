import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import DeviceData from '../../dto/data/DeviceData';
import Page from '../../dto/Page';
import DeviceType, { COUNTER_NAME, RVS_NAME } from '../../enum/DeviceType';


export const DevicesList = () => {

    const navigate = useNavigate();

    const defaultPageSize = 100;

    const [page, setPage] = useState<Page<DeviceData>>({
        number: 0,
        size: defaultPageSize,
        totalCount: 0,
        totalPages: 0,
        items: []
    });

    const listUrl = `/Device/get_by_page?page=${page.number}&size=${defaultPageSize}`;

    const getDevices = () => {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tokenData')}`
            }
        }

        const request = axios.get(listUrl, config);

        request.then(response => {
            console.log("Response ", response)
            const lPage = response.data as Page<DeviceData>;
            setPage(lPage);
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        })
    }

    useEffect(() => getDevices(), [])

    const columns: ColumnsType<DeviceData> = [
        {
            title: 'Номер',
            dataIndex: 'id',
            key: 'id',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.id - next.id;
            },
            showSorterTooltip: true
        },
        {
            title: 'Id в АО "НИТ"',
            dataIndex: 'nitId',
            key: 'nitId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.nitId - next.nitId;
            },
            showSorterTooltip: true
        },
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Тип устройства',
            dataIndex: 'type',
            key: 'type',
            render: (item) => item === DeviceType.RVS ? RVS_NAME : COUNTER_NAME
        },
        {
            title: 'Дата создания',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date: Date) => date.toString()
        },
        {
            title: 'Дата обновления',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            fixed: false,
            render: (date?: Date) => date?.toString()
        },
        {
            title: "Действия",
            dataIndex: 'id',
            render: (id?: number) => {
                return (
                    <button onClick={() => navigate(`/device/${id}`)}>
                        Детали
                    </button>
                )
            }
        }

    ];

    const onChange: TableProps<DeviceData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table dataSource={page.items} columns={columns} onChange={onChange} />
    )
}