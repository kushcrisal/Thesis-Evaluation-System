<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$link_roll =345;


$query="SELECT * FROM `final_s` WHERE `roll`='$link_roll' " ;



if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {

    $students['regularity']=$row['regularity'];
      $students['understanding']=$row['understanding'];
        $students['effort']=$row['effort'];
        $students['organization']=$row['organization'];
            $students['timely']=$row['timely'];

    $count++;
  }
  echo json_encode($students);
}
else {

  http_response_code(404);
}

 ?>
