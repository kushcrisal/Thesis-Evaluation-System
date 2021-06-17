<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$name=$data['teachername'];
$id=$data['id'];


if(empty($name))
{
  echo"no name";
}
else{

$query="INSERT INTO `final_external_marks` (`final_Ext_marksid`,`ext_Id`,`id`) VALUES($id,(SELECT ext_Id FROM externalteachertable WHERE ext_Name='$name'),$id) ON DUPLICATE KEY  UPDATE `ext_Id`= (SELECT ext_Id FROM externalteachertable WHERE ext_Name='$name')";


if(mysqli_query($conn,$query) )
{

  echo "done";
}
else {
echo "failed";
}
}

 ?>
