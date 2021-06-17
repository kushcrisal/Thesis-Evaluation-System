<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=1;



$query1="SELECT * FROM `marksdensity` WHERE `id`=$id";


$marks= array();

if($result=mysqli_query($conn,$query1) )
{
    $count =0;

  $row=mysqli_fetch_assoc($result);

  $marks[$count]['cat1']=$row['mid_supervisor'];
  $marks[$count]['cat2']=$row['mid_external'];
  $marks[$count]['cat3']=$row['mid_committee'];
  $marks[$count]['cat4']=$row['final_supervisor'];
  $marks[$count]['cat5']=$row['final_external'];
  $marks[$count]['cat6']=$row['final_committee'];
  $marks[$count]['total']=$row['total'];

  echo json_encode($marks);


}
else {
echo "failed";
}

?>
