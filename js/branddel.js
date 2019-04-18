var headArr = [];
var navArr = ["声卡","调音台","控制器","DI盒","麦克风","耳机","扩音器","功放","音响"];
var dataArr = [];
var arr1 = [
    {
        img: "brand1.gif",
        info: "富克斯特",
        type: "声卡"
    },
    {
        img: "brand2.gif",
        info: "客所思",
        type: "声卡"
    },
    {
        img: "brand3.gif",
        info: "艾肯",
        type: "声卡"
    },
    {
        img: "brand4.gif",
        info: "RME",
        type: "声卡"
    },
    {
        img: "brand5.gif",
        info: "创新",
        type: "声卡"
    },
    {
        img: "brand6.gif",
        info: "雅马哈",
        type: "声卡"
    },
    {
        img: "brand7.gif",
        info: "马头",
        type: "声卡"
    },
    {
        img: "brand8.gif",
        info: "罗兰",
        type: "声卡"
    },
    {
        img: "brand9.gif",
        info: "莱维特",
        type: "声卡"
    },
    {
        img: "brand10.gif",
        info: "德国坦克",
        type: "声卡"
    },
    {
        img: "brand11.gif",
        info: "IK",
        type: "声卡"
    },
    {
        img: "brand12.gif",
        info: "Universal audio",
        type: "声卡"
    },
    {
        img: "brand13.gif",
        info: "森然",
        type: "声卡"
    }
];
var arr2 = [
    {
        img: "brand14.gif",
        info: "美奇",
        type: "调音台"
    },
    {
        img: "brand15.gif",
        info: "声艺",
        type: "调音台"
    },
    {
        img: "brand16.gif",
        info: "雅马哈",
        type: "调音台"
    },
    {
        img: "brand17.gif",
        info: "百灵达",
        type: "调音台"
    },
    {
        img: "brand18.gif",
        info: "艾伦赫赛",
        type: "调音台"
    },
    {
        img: "brand19.gif",
        info: "得胜",
        type: "调音台"
    },
    {
        img: "brand20.gif",
        info: "天龙",
        type: "调音台"
    },
    {
        img: "brand21.gif",
        info: "博士",
        type: "调音台"
    },
    {
        img: "brand22.gif",
        info: "罗兰",
        type: "调音台"
    },
    {
        img: "brand23.gif",
        info: "先锋",
        type: "调音台"
    },
    {
        img: "brand24.gif",
        info: "爱维德",
        type: "调音台"
    }
];
var arr3 = [
    {
        img: "brand25.gif",
        info: "SPL",
        type: "控制器"
    },
    {
        img: "brand26.gif",
        info: "美奇",
        type: "控制器"
    },
    {
        img: "brand27.gif",
        info: "普瑞声纳",
        type: "控制器"
    },
    {
        img: "brand28.gif",
        info: "爱维德",
        type: "控制器"
    }
];
var arr4 = [
    {
        img: "brand29.gif",
        info: "EWI",
        type: "DI盒"
    },
    {
        img: "brand30.gif",
        info: "Rupert Neve",
        type: "DI盒"
    },
    {
        img: "brand31.gif",
        info: "HiroSys",
        type: "DI盒"
    }
];
var arr5 = [
    {
        img: "brand32.gif",
        info: "得胜",
        type: "麦克风"
    },
    {
        img: "brand33.gif",
        info: "舒尔",
        type: "麦克风"
    },
    {
        img: "brand34.gif",
        info: "森海塞尔",
        type: "麦克风"
    },
    {
        img: "brand35.gif",
        info: "铁三角",
        type: "麦克风"
    },
    {
        img: "brand36.gif",
        info: "Blue",
        type: "麦克风"
    },
    {
        img: "brand37.gif",
        info: "爱科技",
        type: "麦克风"
    },
    {
        img: "brand38.gif",
        info: "莱维特",
        type: "麦克风"
    },
    {
        img: "brand39.gif",
        info: "ISK",
        type: "麦克风"
    },
    {
        img: "brand40.gif",
        info: "DPA",
        type: "麦克风"
    },
    {
        img: "brand41.gif",
        info: "山逊",
        type: "麦克风"
    }
];
var arr6 = [
    {
        img: "brand42.gif",
        info: "爱科技",
        type: "耳机"
    },
    {
        img: "brand43.gif",
        info: "森海塞尔",
        type: "耳机"
    },
    {
        img: "brand44.gif",
        info: "舒尔",
        type: "耳机"
    },
    {
        img: "brand45.gif",
        info: "得胜",
        type: "耳机"
    },
    {
        img: "brand46.gif",
        info: "漫步者",
        type: "耳机"
    }
];
var arr7 = [
    {
        img: "brand47.gif",
        info: "得胜",
        type: "扩音器"
    },
    {
        img: "brand48.gif",
        info: "咪宝",
        type: "扩音器"
    }
];
var arr8 = [
    {
        img: "brand49.gif",
        info: "皇冠",
        type: "功放"
    },
    {
        img: "brand50.gif",
        info: "雅马哈",
        type: "功放"
    },
    {
        img: "brand51.gif",
        info: "得胜",
        type: "功放"
    },
    {
        img: "brand52.gif",
        info: "天龙",
        type: "功放"
    },
    {
        img: "brand53.gif",
        info: "惠威",
        type: "功放"
    }
];
var arr9 = [
    {
        img: "brand54.gif",
        info: "JBL",
        type: "音响"
    },
    {
        img: "brand55.gif",
        info: "罗兰",
        type: "音响"
    },
    {
        img: "brand56.gif",
        info: "亚当",
        type: "音响"
    },
    {
        img: "brand57.gif",
        info: "雅马哈",
        type: "音响"
    },
    {
        img: "brand58.gif",
        info: "真力",
        type: "音响"
    }
];
var arr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9];
function createArr(){
    for(var i = 0; i < 9; i++ ){
        headArr[i] = "lei" + ( i + 1 ) + ".png";
        dataArr[i] = { 
            headImg: headArr[i],
            nav : navArr[i],
            items: arr[i]
        };
    }    

    // return dataArr;
}

createArr();