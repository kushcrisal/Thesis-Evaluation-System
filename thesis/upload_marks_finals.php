<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$regularity=$data['regularity'];
        $understanding=$data['understanding'];
        $effort=$data['effort'];
        $organization=$data['organization'];
        $timely=$data['timely'];
$roll=$data['roll'];

$query="UPDATE `final_s`
SET regularity=$regularity,understanding=$understanding,effort=$effort,organization=$organization,timely=$timely
WHERE roll='$roll'";
if(mysqli_query($conn,$query))
{
  echo ("succesful");
}
else
{
  echo("faileure");
}



 ?>
