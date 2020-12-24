import Cart from "../view/Cart";
import List from "../view/List";
import Detail from "../view/Detail"

export const Routes=[
    {
        path:'/list',
        component:List,
        isShow:true,
        exact:true,
        title:'产品列表',
        icon:'HomeFilled'
        
    },
    {
        path:'/cart',
        component:Cart,
        isShow:true,
        title:'购物车',
        icon:'HeartFilled'
    },
    {
        path:'/list/detail/:id',
        component:Detail,
        isShow:false
    }
]