<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$letter=$data['letter'];




$query="SELECT * from studentinfo where Firstname like '$letter%' or Lastname like '$letter%' ";


$students=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $students[$count]['firstname']=$row['Firstname'];
    $students[$count]['lastname']=$row['Lastname'];
  $students[$count]['roll']=$row['Roll'];
  $students[$count]['thesis']=$row['Thesis'];
  $students[$count]['id']=$row['id'];

    $count++;
  }
  echo json_encode($students);
}
else {

  http_response_code(404);
}






 ?>
