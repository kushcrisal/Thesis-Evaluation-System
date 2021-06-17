<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];
echo $id;


$query1="INSERT INTO `finalmarks` (`id`, `mid_supervisor`, `mid_external`, `mid_committee`, `final_supervisor`, `final_external`, `final_committee`) VALUES ('$id', '0', '0', '0', '0', '0', '0');";


if(mysqli_query($conn,$query1) )
{

  echo "succesfully added";
}
else {
echo "failed";
}

?>
