<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];
$cat1 = $data['cat1'];
$cat2 = $data['cat2'];
$cat3 =$data['cat3'];
$cat4 =$data['cat4'];
$cat5=$data['cat5'];

$query="UPDATE `final_supervisor_marks` SET `Regularity_of_works`=$cat1,`Understanding_of_thesiswork_and_relatedtheory`=$cat2,`StudentEffort_and_performance`=$cat3,`Organization_of_study`=$cat4,`TimelyCompletion_of_ThesisWork`=$cat5 WHERE id=$id";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
