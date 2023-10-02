import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import RequestData from '../../dto/data/RequestData';
import Page from '../../dto/Page';
import RequestStatusType, { DELIVERED_NAME, ERROR_NAME, NEW_NAME } from '../../enum/RequestStatusType';
import RequestType, { DAILY_NAME, MINUTELY_NAME } from '../../enum/RequestType';

export const RequestsList = () => {
    const defaultPageSize = 100;

    const [page, setPage] = useState<Page<RequestData>>({
        number: 0,
        size: defaultPageSize,
        totalCount: 0,
        totalPages: 0,
        items: []
    });

    const listUrl = `/Request/get_by_page/?page=${page.number}&size=${defaultPageSize}`;

    const getRequests = () => {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tokenData')}`
            }
        }

        const request = axios.get(listUrl, config);

        request.then(response => {
            console.log("Response ", response)
            const lPage = response.data as Page<RequestData>;
            setPage(lPage);
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        })
    }

    useEffect(() => getRequests(), [])

    const columns: ColumnsType<RequestData> = [
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
            title: 'Идентификатор сообщения',
            dataIndex: 'massageId',
            key: 'massageId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.massageId.localeCompare(next.massageId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Идентификатор цепочки сообщений',
            dataIndex: 'correlationId',
            key: 'correlationId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.correlationId.localeCompare(next.correlationId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Идентификатор сервиса',
            dataIndex: 'serviceId',
            key: 'serviceId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.serviceId.localeCompare(next.serviceId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Идентификатор маршрута',
            dataIndex: 'routeId',
            key: 'routeId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.routeId.localeCompare(next.routeId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Идентификатор сессии ШЭП',
            dataIndex: 'sessionId',
            key: 'sessionId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.sessionId.localeCompare(next.sessionId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Идентификатор отправителя',
            dataIndex: 'senderId',
            key: 'senderId',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.senderId.localeCompare(next.senderId);
            },
            showSorterTooltip: true
        },
        {
            title: 'Пароль отправителя',
            dataIndex: 'password',
            key: 'password',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.password.localeCompare(next.password);
            },
            showSorterTooltip: true
        },
        {
            title: 'Пароль отправителя',
            dataIndex: 'code',
            key: 'code',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.code.localeCompare(next.code);
            },
            showSorterTooltip: true
        },
        {
            title: 'Код статуса',
            dataIndex: 'code',
            key: 'code',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.code.localeCompare(next.code);
            },
            showSorterTooltip: true
        },
        {
            title: 'Cтатус отправки в ШЭП',
            dataIndex: 'status',
            key: 'status',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.status - next.status;
            },
            showSorterTooltip: true,
            render: (status: RequestStatusType) => {
                switch (status) {
                    case RequestStatusType.NEW:
                        return NEW_NAME;
                    case RequestStatusType.DELIVERED:
                        return DELIVERED_NAME;
                    case RequestStatusType.ERROR:
                        return ERROR_NAME;
                    default:
                        return "Не определен";
                }
            }
        },
        {
            title: 'Тип отчета',
            dataIndex: 'type',
            key: 'type',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.type - next.type;
            },
            showSorterTooltip: true,
            render: (type: RequestType) => {
                switch (type) {
                    case RequestType.DAILY:
                        return DAILY_NAME;
                    case RequestType.MINUTELY:
                        return MINUTELY_NAME;
                    default:
                        return "Не определен";
                }
            }
        },
        {
            title: 'Дата формирования',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.createdAt.getTime() - next.createdAt.getTime();
            },
            showSorterTooltip: true,
            render: (date: Date) => date ? date.toString() : "-"
        },
        {
            title: 'Дата отправки/ошибки',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.updatedAt.getTime() - next.updatedAt.getTime();
            },
            showSorterTooltip: true,
            render: (date: Date) => date ? date.toString() : "-"
        },
    ];

    const onChange: TableProps<RequestData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table dataSource={page.items} columns={columns} onChange={onChange} scroll={{x: '100vw'}} />
    )
}