import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import TagData from '../../dto/data/TagData';
import TagValueData from '../../dto/data/TagValueData';
import Page from '../../dto/Page';
import MeasureType, { DENSITY_NAME, TANK_NAME, VOLUME_NAME, MASS_NAME, TEMPERATURE_NAME } from '../../enum/MeasureType';


export const TagValuesList = () => {
    const defaultPageSize = 100;

    const [page, setPage] = useState<Page<TagValueData>>({
        number: 0,
        size: defaultPageSize,
        totalCount: 0,
        totalPages: 0,
        items: []
    });

    const listUrl = `/TagValues/get_by_page?page=${page.number}&size=${defaultPageSize}`;

    const getTagValues = () => {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tokenData')}`
            }
        }

        const request = axios.get(listUrl, config);

        request.then(response => {
            console.log("Response ", response)
            const lPage = response.data as Page<TagValueData>;
            setPage(lPage);
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        })
    }

    const measureName = (type: MeasureType) => {
        switch (type) {
            case MeasureType.DENSITY:
                return DENSITY_NAME;
            case MeasureType.MASS:
                return MASS_NAME;
            case MeasureType.TEMPERATURE:
                return TEMPERATURE_NAME;
            case MeasureType.TANK_LEVEL:
                return TANK_NAME;
            case MeasureType.VOLUME:
                return VOLUME_NAME;
            default:
                return "Не определен";
        }
    }

    useEffect(() => getTagValues(), [])

    const columns: ColumnsType<TagValueData> = [
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
            title: 'Тег',
            dataIndex: 'tag',
            key: 'tag',
            render: (tag: TagData) => {
                return (
                    <div>
                        <h3>Номер тега: {tag.id}</h3>
                        <h3>Название: {tag.name}</h3>
                        <h3>Описание: {tag.description}</h3>
                        <h3>Тип измерения: {measureName(tag.measureType)}</h3>
                    </div>
                )
            },
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.tag.id - next.tag.id;
            },
            showSorterTooltip: true
        },
        {
            title: 'Значение',
            dataIndex: 'value',
            key: 'value',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.value - next.value;
            },
            showSorterTooltip: true
        },
        {
            title: 'Дата замера',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sortDirections: ['ascend', 'descend'],
            defaultSortOrder: 'ascend',
            sorter: (prev, next) => {
                return prev.createdAt.getTime() - next.createdAt.getTime();
            },
            showSorterTooltip: true,
            render: (date: Date) => date.toString()
        }
    ];

    const onChange: TableProps<TagValueData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table columns={columns} dataSource={page.items} onChange={onChange}/>
    )
}