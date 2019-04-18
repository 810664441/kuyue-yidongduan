<?php
require('../inc/dbconn.php');
$user=$_GET['user'];
$sql="select * from shop where type='{$user}'";

$result=$mysqli->query($sql);
while($row=$result->fetch_assoc()){
    $data[]=$row;
} 

$data=array("res"=>$data);
echo json_encode($data);
// echo $data;

?>