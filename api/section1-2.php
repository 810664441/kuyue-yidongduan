<?php
    include("../inc/dbconn.php");

    $type=$_GET["type"];
    $start=$type*6;
    if($type=="0"||$type=="1"){
        $sql="select * from shop limit $start,6";
    }else{
        $sql="select * from shop where type='$type' limit 6";
    }
    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>