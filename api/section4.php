<?php
    $arr = array(
        array("headImg"=>"张三", "age"=>10),
        array("name"=>"张三", "age"=>10),
        array("name"=>"张三", "age"=>10),
        array("name"=>"张三", "age"=>10)
    );

    echo json_encode( $arr );


    /* 
        [
            {
                headImg: "",
                navImg: "",
                items: [
                    {}
                ]
            },
            {

            }

        ]


    */