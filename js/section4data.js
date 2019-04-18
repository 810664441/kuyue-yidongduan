var headImgArr = [];
var navImgArr = [];
var dataArr = [];

var arr1 = [
    {
        imgName: "one-item1.jpg",
        info: "星臣(Starsun) DG220-P 41寸初学入门木吉他 圆角民谣吉他 (原木亮光色)",
        price: 568
    },
    {
        imgName: "one-item2.jpg",
        info: "芬达(Fender) CD-60 41寸云杉面板初学者民谣吉他 木吉他",
        price: 999
    },
    {
        imgName: "one-item3.jpg",
        info: "依班娜(Ibanez) V74ECE 民谣 电箱 亚光木吉他 (原木色)",
        price: 1188
    },
    {
        imgName: "one-item4.jpg",
        info: "雅马哈(YAMAHA) FG800M 41寸单板民谣木吉他 原木色哑光",
        price: 1699
    },
    {
        imgName: "one-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 1199
    },
    {
        imgName: "one-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 1549
    }
];

var arr2 = [
    {
        imgName: "two-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 1199
    },
    {
        imgName: "two-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 1499
    },
    {
        imgName: "two-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 1799
    },
    {
        imgName: "two-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 3788
    },
    {
        imgName: "two-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 3788
    },
    {
        imgName: "two-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 3888
    }
];

var arr3 = [
    {
        imgName: "three-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 1538
    },
    {
        imgName: "three-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 1388
    },
    {
        imgName: "three-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 2399
    },
    {
        imgName: "three-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 2059
    },
    {
        imgName: "three-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 2499
    },
    {
        imgName: "three-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 1288
    }
];

var arr4 = [
    {
        imgName: "four-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 3299
    },
    {
        imgName: "four-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 4149
    },
    {
        imgName: "four-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 3990
    },
    {
        imgName: "four-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 8399
    },
    {
        imgName: "four-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 6499
    },
    {
        imgName: "four-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 12999
    }
];

var arr5 = [
    {
        imgName: "five-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 3299
    },
    {
        imgName: "five-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 4149
    },
    {
        imgName: "five-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 3990
    },
    {
        imgName: "five-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 8399
    },
    {
        imgName: "five-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 6499
    },
    {
        imgName: "five-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 12999
    }
];

var arr6 = [
    {
        imgName: "six-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 158
    },
    {
        imgName: "six-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 168
    },
    {
        imgName: "six-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 380
    },
    {
        imgName: "six-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 278
    },
    {
        imgName: "six-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 439
    },
    {
        imgName: "six-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 749
    }
];

var arr7 = [
    {
        imgName: "seven-item1.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 439
    },
    {
        imgName: "seven-item2.jpg",
        info: "三益(Samick) GD-100RS 41寸云杉单板民谣吉他",
        price: 729
    },
    {
        imgName: "seven-item3.jpg",
        info: "三益(Samick) D-5 41寸云杉单板民谣吉他",
        price: 3499
    },
    {
        imgName: "seven-item4.jpg",
        info: "雅马哈(YAMAHA) A1R 41寸单板民谣电箱木吉他 原木色",
        price: 1888
    },
    {
        imgName: "seven-item5.jpg",
        info: "三益(Samick) GD-101S 进口41寸单板民谣吉他 (日落色)",
        price: 1999
    },
    {
        imgName: "seven-item6.jpg",
        info: "考特(CORT) Earth 100 earth系列的入门型号民谣吉他",
        price: 2388
    }
];


var arr = [arr1, arr2, arr3, arr4, arr5, arr6, arr7];

function createArr(){
    for(var i = 0; i < 7; i++ ){
        headImgArr[i] = "headImg" + ( i + 1 ) + ".jpg";
        navImgArr[i] = "navImg" + ( i + 1 ) + ".jpg";

        dataArr[i] = { 
            headImg: headImgArr[i],
            navImg: navImgArr[i],
            items: arr[i]
        };
    }    

    // return dataArr;
}

createArr();
