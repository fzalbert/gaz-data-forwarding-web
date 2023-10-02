import DeviceType from "../../enum/DeviceType";
import NitDeviceType from "../../enum/NitDeviceType";
import NitOperationType from "../../enum/NitOperationType";

interface DeviceModel {
    name: string;
    nitId: string;
    nitProductTypeId: string;
    nitPipelineId: string;
    type: DeviceType;
    nitType: NitDeviceType;
    nitOperationType: NitOperationType;
}