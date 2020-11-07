<?php
$conn=mysqli_connect("localhost","root","","thesis");

$query="UPDATE `mid_supervisor_marks` SET `Teacherid`=1,`id`=2 WHERE `id`=1
if (mysql(i)_affected_rows()=0) {
  INSERT INTO `mid_supervisor_marks`( `Teacherid`, `id`) VALUES (1,1);
}

"
if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}


 ?>
