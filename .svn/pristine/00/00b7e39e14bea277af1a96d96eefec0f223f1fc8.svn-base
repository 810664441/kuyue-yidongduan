<?php
    include("../inc/dbconn.php");
    $id=$_GET["id"];
    $sql="select * from shop where id='$id'";

    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>