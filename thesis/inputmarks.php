<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];
$cat1 = $data['cat1'];
$cat2 = $data['cat2'];
$cat3 =$data['cat3'];
$cat4 =$data['cat4'];
$cat5=$data['cat5'];

$query="UPDATE `mid_supervisor_marks` SET `Regularity_of_works`=$cat1,`Degree_of_Completeness_of_thesis`=$cat2,`Understanding_of_thesiswork_and_relatedtheory`=$cat3,`StudentEffort_and_performance`=$cat4,`Organization_of_study`=$cat5 WHERE id=$id";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
