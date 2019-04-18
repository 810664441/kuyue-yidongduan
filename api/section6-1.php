<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','ingping');
if($mysqli->connect_errno){
    die();
}
$type=$_POST["type"];
$type1=$_POST["type1"];
$type2=$_POST["type2"];
$type3=$_POST["type3"];
$sql = "select * from section5one where type='$type'";
$sql1 = "select * from section5one where type='$type1'";
$sql2 = "select * from section5one where type='$type2'";
$sql3 = "select * from section5one where type='$type3'";
$result = $mysqli->query($sql);
$result1 = $mysqli->query($sql1);
$result2 = $mysqli->query($sql2);
$result3 = $mysqli->query($sql3);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $list1[]=$row;
    }
    $data[1]=$list1;
}
if($result1->num_rows>0){
    while($row1=mysqli_fetch_assoc($result1)){
        $list2[]=$row1;
    }
    $data[2]=$list2;
}
if($result2->num_rows>0){
    while($row2=mysqli_fetch_assoc($result2)){
        $list3[]=$row2;
    }
    $data[3]=$list3;
}
if($result3->num_rows>0){
    while($row3=mysqli_fetch_assoc($result3)){
        $list4[]=$row3;
    }
    $data[4]=$list4;
}
echo json_encode($data);
// echo(111111)
?>