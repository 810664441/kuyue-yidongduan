<?php
    include("../inc/dbconn.php");
    if($_GET["typename"]){
        $typename=$_GET["typename"];
        $sql="select * from sort where typename='$typename'";
    }else{
        $sql="select * from sort where typename='声卡'";
    }
    $result=$mysqli->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
    echo json_encode($data);

?>