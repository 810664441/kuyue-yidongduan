<?php
    include("../inc/dbconn.php");

    $type=$_GET["type"];
    $page=$_GET["page"];
    $order=$_GET["order"];
    $start=$page*6+1;
    if($order){
        $sql="select * from shop where type='$type' order by price asc limit $start,6";
    }else{
        $sql="select * from shop where type='$type' order by price desc limit $start,6";

    }
    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>