<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['identity'];






$query1="SELECT (mid_supervisor+mid_external+mid_committee+final_supervisor)as internal,(final_external+final_committee) as final from `finalmarks` where id='$id'";
$marks= array();

if($result=mysqli_query($conn,$query1) )
{
    $count =0;

  $row=mysqli_fetch_assoc($result);

  $marks[$count]['internal']=$row['internal'];
  $marks[$count]['final']=$row['final'];

  echo json_encode($marks);


}
else {
echo "failed";
}

?>
