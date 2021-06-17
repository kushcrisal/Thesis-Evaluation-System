<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];
$cat1 = $data['cat1'];
$cat2 = $data['cat2'];
$cat3 =$data['cat3'];
$cat4 =$data['cat4'];
$cat5=$data['cat5'];
$cat6=$data['cat6'];
$cat7=$data['cat7'];
$cat8=$data['cat8'];
$total=$data['total'];

$query="UPDATE `mid_external_marks` SET `Quality_of_Presentation`=$cat1 ,`Problem_Formulation_identification_conceptualization`=$cat2,`Methodology_Approach`=$cat3 ,`Literature_review`=$cat4,`Understanding_of_thesis_work_and_related_theory`=$cat5,`Answering_to_questions`=$cat6 ,`Completeness_of_thesis_work`=$cat7,`Planning_of_organization_of_thesis_work`=$cat8,`total`=$total WHERE id=$id";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
