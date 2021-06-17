<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];





$query="SELECT * FROM final_external_marks NATURAL JOIN externalteachertable where id='$id'";
$studentinfo=array();


if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $studentinfo[$count]['teacher']=$row['ext_Name'];
    $studentinfo[$count]['cat1']=$row['Standard_of_technicallanguage_expression_format'];
  $studentinfo[$count]['cat2']=$row['ProblemFormulation_researchIden_formulation_Research_topic'];
  $studentinfo[$count]['cat3']=$row['Selection_of_researchMethodology'];
  $studentinfo[$count]['cat4']=$row['Quality_of_dataProcess_resultInterpretation'];
  $studentinfo[$count]['cat5']=$row['Matching_Finding_with_objectives'];
 $studentinfo[$count]['cat6']=$row['LogicReasoning_Conclusions_interpretation'];
 $studentinfo[$count]['cat7']=$row['Quality_of_abstract'];
$studentinfo[$count]['cat8']=$row['Originality_of_research'];
$studentinfo[$count]['cat9']=$row['Scope_of_research'];
$studentinfo[$count]['cat10']=$row['Answer_to_examinerQuestion'];
    $studentinfo[$count]['total']=$row['total'];

    $count++;
  }
  echo json_encode($studentinfo);
}
else {

  http_response_code(404);
}





 ?>
