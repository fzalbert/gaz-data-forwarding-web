import { DefaultOptionType } from "antd/es/select";

export const RECEIVE_FROM_MINING_NAME = "Прием от нефтедобывающих организации";
export const TRANSIT_TO_REFACTORING_NAME = "Сдача на нефтеперерабатывающие заводы";
export const TRANSIT_TO_TRANSPORT_NAME = "Сдача нефтетранспортные организации";
export const TRANSIT_TO_EXPORT_NAME = "Сдача на экспорт";
export const RECEIVE_FROM_TRANSPORT_NAME = "Прием от нефтетранспортных организации";
export const RECEIVE_FROM_TERMINAL_NAME = "Прием от нефтяных терминалов";

enum NitOperationType {
    NONE,
    RECEIVE_FROM_MINING,
    TRANSIT_TO_REFACTORING,
    TRANSIT_TO_TRANSPORT,
    TRANSIT_TO_EXPORT,
    RECEIVE_FROM_TRANSPORT,
    RECEIVE_FROM_TERMINAL
}

export const NitOperationTypeOptions: DefaultOptionType[] = [
 
    {
        label: RECEIVE_FROM_MINING_NAME,
        value: NitOperationType.RECEIVE_FROM_MINING
    },
    {
        label: TRANSIT_TO_REFACTORING_NAME,
        value: NitOperationType.TRANSIT_TO_REFACTORING
    },
    {
        label: TRANSIT_TO_TRANSPORT_NAME,
        value: NitOperationType.TRANSIT_TO_TRANSPORT
    },
    {
        label: TRANSIT_TO_EXPORT_NAME,
        value: NitOperationType.TRANSIT_TO_EXPORT
    },
    {
        label: RECEIVE_FROM_TRANSPORT_NAME,
        value: NitOperationType.RECEIVE_FROM_TRANSPORT
    },
    {
        label: RECEIVE_FROM_TERMINAL_NAME,
        value: NitOperationType.RECEIVE_FROM_TERMINAL
    }

]

export default NitOperationType;