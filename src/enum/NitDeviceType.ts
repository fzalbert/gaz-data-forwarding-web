import { DefaultOptionType } from "antd/es/select";

export const PREPARE_AND_STORE_NAME = "Подготовка/хранение";
export const RECEIVE_AND_TRANSIT_NAME = "Прием/сдача";

enum NitDeviceType {
    NONE,
    PREPARE_AND_STORE,
    RECEIVE_AND_TRANSIT
}

export const NitDeviceTypeOptions: DefaultOptionType[] = [
 
    {
        label: PREPARE_AND_STORE_NAME,
        value: NitDeviceType.PREPARE_AND_STORE
    },
    {
        label: RECEIVE_AND_TRANSIT_NAME,
        value: NitDeviceType.RECEIVE_AND_TRANSIT
    }
]

export default NitDeviceType;