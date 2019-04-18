<?php
    include("../inc/dbconn.php");
    $username = $_POST["name"];
    $pwd = $_POST["pwd"];
    $sql = "select * from user where name = '$username'";
    $result = $mysqli->query( $sql );
    if( $result->num_rows ){
        $res = $result->fetch_assoc();
        if( $pwd == $res["pass"] ){
            $arr = array("tag"=>0);
        }else{
            $arr = array("tag"=>2);
        }
    }else{
        $arr = array("tag"=>1);
    }
    echo json_encode( $arr );