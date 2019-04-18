<?php
    include("../inc/dbconn.php");

    $type = $_POST["data"];
    
    $sql = "select * from htabdata where type = '$type' limit 0,10";

    $result = $mysqli->query( $sql );

    if( $result->num_rows ){
        while( $res = $result->fetch_assoc() ){
            $arr[] = $res;
        }
    }

    echo json_encode( $arr );