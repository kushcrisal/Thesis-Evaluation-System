<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];





$query="SELECT * FROM mid_external_marks NATURAL JOIN externalteachertable where id='$id'";
$studentinfo=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $studentinfo[$count]['teacher']=$row['ext_Name'];
    $studentinfo[$count]['cat1']=$row['Quality_of_Presentation'];
  $studentinfo[$count]['cat2']=$row['Problem_Formulation_identification_conceptualization'];
  $studentinfo[$count]['cat3']=$row['Methodology_Approach'];
  $studentinfo[$count]['cat4']=$row['Literature_review'];
  $studentinfo[$count]['cat5']=$row['Understanding_of_thesis_work_and_related_theory'];
$studentinfo[$count]['cat6']=$row['Answering_to_questions'];
$studentinfo[$count]['cat7']=$row['Completeness_of_thesis_work'];
$studentinfo[$count]['cat8']=$row['Planning_of_organization_of_thesis_work'];
    $studentinfo[$count]['total']=$row['total'];

    $count++;
  }
  echo json_encode($studentinfo);
}
else {

  http_response_code(404);
}





 ?>
