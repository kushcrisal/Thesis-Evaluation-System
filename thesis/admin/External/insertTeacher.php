<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];



$query1="INSERT INTO `externalteachertable`(`ext_Id`, `ext_Name`) VALUES ('','$name')";

if (empty($name)) {
    echo 'Please enter your username...';
} else{
  if(mysqli_query($conn,$query1))
  {

    echo "succesfully added";
  }
  else {
  echo "failed";
  }


}



?>
