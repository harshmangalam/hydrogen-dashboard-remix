interface Browser {
    ua: string;
    name: string;
    layout: string;
    version: string;
    description: string;
}

interface OsInterface {
    family: string;
    version?: any;
    architecture: number;
}


interface DeviceInterface {
    id: string;
    createdAt: Date;
    browser: Browser;
    os: OsInterface;
    location: Location;
    lastSeen: Date;
    isActive: boolean;
    isCurrent: boolean;
    userId: string;
    token: string;
    user: Author;
}
