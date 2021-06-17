<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$query="SELECT ext_Name,	ext_Id from externalteachertable" ;


$teacher=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $teacher[$count]['name']=$row['ext_Name'];
    $teacher[$count]['Teacherid']=$row['ext_Id'];

    $count++;
  }
  echo json_encode($teacher);
}
else {

  http_response_code(404);
}




 ?>
