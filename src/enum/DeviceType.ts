import { DefaultOptionType } from "antd/es/select";

export const RVS_NAME = "РВС";
export const COUNTER_NAME = "Счетчик";

enum DeviceType {
    RVS,
    COUNTER
}

export const DeviceTypeOptions: DefaultOptionType[] = [
    {
        label: RVS_NAME,
        value: DeviceType.RVS
    },
    {
        label: COUNTER_NAME,
        value: DeviceType.COUNTER
    }
]

export default DeviceType;