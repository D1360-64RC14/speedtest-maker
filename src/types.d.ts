export type SpeedtestResult = {
    type: "result";
    timestamp: string;
    ping: {
        jitter: number;
        latency: number;
    };
    download: {
        bandwidth: number;
        bytes: number;
        elapsed: number;
    };
    upload: {
        bandwidth: number;
        bytes: number;
        elapsed: number;
    };
    packetLoss: number;
    isp: string;
    interface: {
        internalIp: string;
        name: string;
        macAddr: string;
        isVpn: boolean;
        externalIp: string;
    };
    server: {
        id: number;
        host: string;
        port: number;
        name: string;
        location: string;
        country: string;
        ip: number;
    };
    result: {
        id: string;
        url: string;
        persisted: boolean;
    };
};
