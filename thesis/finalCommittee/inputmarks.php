<?php


$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];
$teacherid=$data['teacherid'];
$cat1 = $data['cat1'];
$cat2 = $data['cat2'];
$cat3 =$data['cat3'];
$cat4 =$data['cat4'];
$cat5=$data['cat5'];
$cat6=$data['cat6'];
$cat7=$data['cat7'];
$cat8=$data['cat8'];
$cat9=$data['cat9'];
$cat10=$data['cat10'];
$total=$data['total'];



$query="UPDATE `final_committee_marks` SET `Quality_of_presentation`=$cat1,`ProblemFormulation_identification_conceptualization`=$cat2,`Methodology_Approach`=$cat3,`Literature_review`=$cat4,`Understanding_of_thesiswork_and_relatedtheory`=$cat5,`AnsweringQuestions`=$cat6,`Completeness_of_thesis_work`=$cat7,`Planning_of_organization_of_thesiswork`=$cat8,`Originality_of_research_Scholars_contribution`=$cat9,`Conclusions_Suggestions_Recommendation`=$cat10,`total`=$total WHERE id=$id and teacherid=$teacherid";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
