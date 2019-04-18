<?php
    include("../inc/dbconn.php");

    $page=$_GET["page"];
    $start=$page*5;
    $sql="select * from shop limit $start,5";

    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>