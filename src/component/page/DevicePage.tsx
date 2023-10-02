import { Tabs } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeviceData from '../../dto/data/DeviceData';
import TagData from '../../dto/data/TagData';
import { TagsList } from '../list/TagsList';
import { TagValuesList } from '../list/TagValuesList';

const DevicePage = () => {

    const [size] = useState<SizeType>('middle');
    const [data, setData] = useState<DeviceData>();
    const { deviceId } = useParams();

    const deviceUrl = `/Device/get_by_id?id=${deviceId}`;

    const getDevice = () => {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tokenData')}`
            }
        }
        const request = axios.get(deviceUrl, config);

        request.then(response => {
            console.log("Response ", response)
            const device = response.data as DeviceData;
            setData(device);
        }).catch(error => {
            console.log("Response ", error)
            alert("ERROR " + error);
        })
    }

    useEffect(() => getDevice(), [])

    const defaultPageSize = 100;

    const [page, setPage] = useState<TagData[]>([]);

    const listUrl = `/Tag/get_tags?deviceId=${deviceId}`;

    const getTags = () => {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('tokenData')}`
            }
        }

        const request = axios.get(listUrl, config);
        request.then(response => {
            console.log("Response getTags", response)
            const lPage = response.data as TagData[];
            console.log("Response getTags page ", lPage)
            setPage(lPage);
        }).catch(error => {
            console.log("Response getTags", error)
        })
    }

    useEffect(() => getTags(), [])

    return (
        <div style={{ padding: 20 }}>
            <div style={{ height: 400, display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '35%' }}>
                    <h2>Название устройства: {data?.name}</h2>
                    <h2>Описание устройства: {data?.nitId}</h2>
                </div>
                <div style={{ width: '65%', marginLeft: 20 }}>
                    <TagsList items={page} />
                </div>
            </div>
            <Tabs
                defaultActiveKey="1"
                size={size}
                style={{ marginTop: 16, marginBottom: 16 }}
                items={page.map(i => {
                    return {
                        key: i.id.toString(),
                        label: i.name,
                        animated: true,
                        children: `Выбран тег ${i.name} #${i.id} с описанием: ${i.description}`
                    }
                })}
            />
            <TagValuesList />
        </div>
    )
}

export default DevicePage;