import { Rule } from "antd/es/form";

export const deviceFormRules: {
    name: Rule[],
    nitId: Rule[],
    nitProductTypeId: Rule[],
    nitPipelineId: Rule[],
    type: Rule[],
    nitType: Rule[],
    nitOperationType: Rule[]
} = {
    name: [
        {
            type: 'string',
            min: 3,
            message: "Длина заголовка должна быть не менее 3 символов"
        },
        {
            type: 'string',
            max: 255,
            message: "Длина заголовка должна быть не более 255 символов"
        }
    ],
    nitId: [
        {
            required: true,
            message: "Необходимо указать идентификатор объекта в АО 'НИТ'."
        }
    ],
    nitProductTypeId: [
        {
            required: true,
            message: "Необходимо указать идентификатор типа продукта в АО 'НИТ'."
        }
    ],
    type: [
        {
            required: true,
            message: "Необходимо указать тип устройства."
        }
    ],
    nitType: [
        {
            required: true,
            message: "Необходимо указать тип прибора учета в АО 'НИТ'."
        }
    ],
    nitOperationType: [
        {
            required: true,
            message: "Необходимо указать идентификатор типа операции в АО 'НИТ'."
        }
    ],
    nitPipelineId: [
        {
            required: true,
            message: "Необходимо указать идентификатор магистрального нефтепровода в АО 'НИТ'."
        }
    ]
}