<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id =$data['id'];
$id=18;


$query="DELETE FROM `mid_committee_marks` WHERE `mid_com_marksid`=$id";
if(mysqli_query($conn,$query))
{
  echo "succesful";
}
else {
echo "failure";
}
?>
