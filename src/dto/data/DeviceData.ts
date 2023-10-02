import DeviceType from "../../enum/DeviceType";

interface DeviceData {
    id: number;
    nitId: number;
    name: string;
    type: DeviceType;
    createdAt: Date;
    updatedAt: Date;
}

export default DeviceData;