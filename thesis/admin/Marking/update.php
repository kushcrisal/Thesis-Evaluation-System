<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);

$cat1 = $data['cat1'];
$cat2 = $data['cat2'];
$cat3 =$data['cat3'];
$cat4 =$data['cat4'];
$cat5=$data['cat5'];
$cat6=$data['cat6'];
$total=$data['total'];
echo $total;

$query="UPDATE `marksdensity` SET `mid_supervisor` =$cat1, `mid_external` =$cat2, `mid_committee` = $cat3, `final_supervisor` =$cat4, `final_external` =$cat5, `final_committee` =$cat6, `total` = $total  where `id` = 1;";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
