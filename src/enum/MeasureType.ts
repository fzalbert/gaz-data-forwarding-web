import { DefaultOptionType } from "antd/es/select";

export const DENSITY_NAME = "Плотность, [ кг/м³ ]";
export const TANK_NAME = "Уровень, [ СМ ]";
export const TEMPERATURE_NAME = "Температура, [ °C ]";
export const VOLUME_NAME = "Обьем, [ м³ ]";
export const MASS_NAME = "Масса, [ Тонна ]";

enum MeasureType {
    DENSITY,
    TANK_LEVEL,
    TEMPERATURE,
    VOLUME,
    MASS
}

export const MeasureTypeOptions: DefaultOptionType[] = [
    {
        label: DENSITY_NAME,
        value: MeasureType.DENSITY
    },
    {
        label: TANK_NAME,
        value: MeasureType.TANK_LEVEL
    },
    {
        label: TEMPERATURE_NAME,
        value: MeasureType.TEMPERATURE
    },
    {
        label: VOLUME_NAME,
        value: MeasureType.VOLUME
    },
    {
        label: MASS_NAME,
        value: MeasureType.MASS
    }
]

export default MeasureType;