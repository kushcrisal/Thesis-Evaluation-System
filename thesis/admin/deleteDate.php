<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id =$data['dateid'];



$query="DELETE FROM `date` WHERE `Dateid`=$id";
if(mysqli_query($conn,$query))
{
  echo "succesful";
}
else {
echo "failure";
}
?>
