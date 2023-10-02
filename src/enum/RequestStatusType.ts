import { DefaultOptionType } from "antd/es/select";
export const NEW_NAME = "Новый";
export const DELIVERED_NAME = "Доставленный";
export const ERROR_NAME = "Ошибка";

enum RequestStatusType {
    NEW,
    DELIVERED,
    ERROR
}

export const RequestStatusTypeOptions: DefaultOptionType[] = [
    {
        label: NEW_NAME,
        value: RequestStatusType.NEW
    },
    {
        label: DELIVERED_NAME,
        value: RequestStatusType.DELIVERED
    },
    {
        label: ERROR_NAME,
        value: RequestStatusType.ERROR
    }

]

export default RequestStatusType;