<?php
    include("../inc/dbconn.php");

    $type=$_GET["type"];
    $sql="select * from shop where type='$type'";


    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>