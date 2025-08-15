interface MenuItem {
    title: string;
    disabled?: boolean;
    children?: MenuItem[];
    path?: string;
}

const menu:Array<MenuItem> = [
    {
        title: '首页',
        path: '/main/home'
    },
    {
        title: '重大危险源管理',
        path: '/main/item-one'
    },
    {
        title: '企业化学品信息',
        path: '/main/item-two'
    },
    {
        title: '生产装置信息',
        path: '/main/item-three'
    },
    {
        title: '报警管理',
        path: '/main/item-four'
    },
    {
        title: '管理用户',
        path: '/main/user'
    }
];

export { 
    menu
};
export type { MenuItem };