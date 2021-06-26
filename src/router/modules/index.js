

export default [{
    path: '/main',
    name: 'main',
    component: () => import('@/pages/main/index'),
    // children: (pre => [
    //     {
    //         path: '',
    //         name: `${pre}index`,
    //         component: () => import('@/pages/main/index'),
    //     },
    // ])('main-')
    },
    {
        path: '/draggable',
        name: 'draggable',
        component: () => import('@/pages/draggable/index'),

    }
]
