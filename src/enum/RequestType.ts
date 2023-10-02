
import { DefaultOptionType } from "antd/es/select";

export const MINUTELY_NAME = "Ежеминутный";
export const DAILY_NAME = "Ежедневный";

enum RequestType {
    MINUTELY,
    DAILY
}

export const RequestTypeOptions: DefaultOptionType[] = [
    {
        label: MINUTELY_NAME,
        value: RequestType.MINUTELY
    },
    {
        label: DAILY_NAME,
        value: RequestType.DAILY
    }
]

export default RequestType;