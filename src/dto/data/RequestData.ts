import RequestStatusType from "../../enum/RequestStatusType";
import RequestType from "../../enum/RequestType";

interface RequestData {
    id: number;
    massageId: string;
    correlationId: string;
    serviceId: string;
    routeId: string;
    sessionId: string;
    senderId: string;
    password: string;
    code: string;
    status: RequestStatusType;
    type: RequestType;  
    createdAt: Date;
    updatedAt: Date;
}

export default RequestData;