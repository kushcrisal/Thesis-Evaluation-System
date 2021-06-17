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
$cat9=$data['cat9'];
$cat10=$data['cat10'];
$total=$data['total'];

$query="UPDATE `final_external_marks` SET `Standard_of_technicallanguage_expression_format`=$cat1 ,`ProblemFormulation_researchIden_formulation_Research_topic`=$cat2,`Selection_of_researchMethodology`=$cat3,`Quality_of_dataProcess_resultInterpretation`=$cat4,`Matching_Finding_with_objectives`=$cat5,`LogicReasoning_Conclusions_interpretation`=$cat6,`Quality_of_abstract`=$cat7,`Originality_of_research`=$cat8,`Scope_of_research`=$cat9,`Answer_to_examinerQuestion`=$cat10,`total`=$total WHERE id=$id";


if(mysqli_query($conn,$query) )
{

  echo "succesfully added";
}
else {
echo "failed";
}



 ?>
