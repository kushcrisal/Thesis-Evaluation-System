<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$name=$data['teachername'];
$id=$data['id'];

if(empty($name))
{
  echo "no name";
}
else
{

$query="INSERT INTO `mid_supervisor_marks` (`mid_Sup_marksid`,`Teacherid`,`id`) VALUES($id,(SELECT Teacherid FROM teacher_table WHERE teachername='$name'),$id ) ON DUPLICATE KEY  UPDATE `Teacherid`= (SELECT Teacherid FROM teacher_table WHERE teachername='$name')";


if(mysqli_query($conn,$query) )
{

  echo "done";
}
else {
echo "failed";
}
}


 ?>
