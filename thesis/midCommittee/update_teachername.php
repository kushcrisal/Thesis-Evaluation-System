<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$name=$data['teachername'];
$id=$data['id'];



$query="INSERT INTO `mid_committee_marks` (`Teacherid`,`id`) VALUES((SELECT Teacherid FROM teacher_table WHERE teachername='$name'),$id )";


if(mysqli_query($conn,$query) )
{

  echo "done";
}
else {
echo "failed";
}


 ?>
