import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import TagData from '../../dto/data/TagData';
import MeasureType, { DENSITY_NAME, TANK_NAME, VOLUME_NAME, MASS_NAME, TEMPERATURE_NAME } from '../../enum/MeasureType';


export const TagsList = (props: {items: TagData[]}) => {
    

    const columns: ColumnsType<TagData> = [
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
            title: 'Название',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Тип измерения',
            dataIndex: 'measureType',
            key: 'measureType',
            render: (type: MeasureType) => {
                switch(type) {
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
        }   
    ];

    const onChange: TableProps<TagData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
            <Table dataSource={props.items} columns={columns} onChange={onChange} scroll={{ y: 350 }} />
    )
}