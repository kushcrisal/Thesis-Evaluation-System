<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$query="SELECT `Dateid`,`Year`,`Month` from `date`" ;


$date=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $date[$count]['year']=$row['Year'];
    $date[$count]['month']=$row['Month'];
    $date[$count]['dateid']=$row['Dateid'];

    $count++;
  }
  echo json_encode($date);
}
else {

  http_response_code(404);
}




 ?>
