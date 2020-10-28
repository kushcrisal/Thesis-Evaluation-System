<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$date=2074;
$month='Ashwin';



$query="SELECT * FROM `studentinfo` where `Dateid`=((SELECT Dateid from `date` where Year=$date AND Month='$month'))" ;




if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $students[$count]['firstname']=$row['Firstname'];
    $students[$count]['lastname']=$row['Lastname'];
  $students[$count]['roll']=$row['Roll'];
  $students[$count]['thesis']=$row['Thesis'];
    $count++;
  }
  echo json_encode($students);
}
else {

  http_response_code(404);
}

 ?>
