<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id =$data['id'];



$query="DELETE FROM `externalteachertable` WHERE `ext_Id`=$id";
if(mysqli_query($conn,$query))
{
  echo "succesful";
}
else {
echo "failure";
}
?>