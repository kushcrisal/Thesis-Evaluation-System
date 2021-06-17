<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$year = $data['year'];
$month= $data['month'];



$query1="INSERT INTO `date`(`Dateid`, `Year`, `Month`) VALUES ('','$year','$month')";

if (empty($year) OR empty($month)) {
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
