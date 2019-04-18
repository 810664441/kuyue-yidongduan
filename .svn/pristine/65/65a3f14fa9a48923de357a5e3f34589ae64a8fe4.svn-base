<?php
require('../inc/dbconn.php');
$id=$_GET['id'];
$sql="select * from shop where Id='{$id}'";

$result=$mysqli->query($sql);
while($row=$result->fetch_assoc()){
    $data[]=$row;
} 

$data=array("res"=>$data);
echo json_encode($data);
// echo $data;

?>