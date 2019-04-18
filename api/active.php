<?php
    include("../inc/dbconn.php");
    $type = $_POST['type'];
    $page = $_POST["page"];
    $start = $page * 6;
    $sql = "select * from active where item='$type' limit $start,6";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }
    }
    echo json_encode($data);