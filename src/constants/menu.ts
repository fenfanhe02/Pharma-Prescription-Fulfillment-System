interface MenuItem {
    title: string;
    disabled?: boolean;
    children?: MenuItem[];
    path?: string;
}

const menu:Array<MenuItem> = [
    {
        title: '📦 Manage Drugs',
        path: '/drugs'
    },
    {
        title: '🏥 Manage Pharmacies',
        path: '/pharmacies'
    },
    {
        title: '💊 Manage Prescriptions and Fulfillment',
        path: '/prescriptions'
    },
    {
        title: '📑 View Audit Logs',
        path: '/logs'
    }
];

export { 
    menu
};
export type { MenuItem };