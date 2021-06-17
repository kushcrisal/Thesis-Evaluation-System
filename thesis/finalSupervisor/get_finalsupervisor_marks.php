<?php
$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$id=$data['id'];





$query="SELECT *,teacher_table.teachername FROM final_supervisor_marks,teacher_table where final_supervisor_marks.final_Sup_marksid='$id' AND final_supervisor_marks.Teacherid=teacher_table.Teacherid";
$studentinfo=array();

if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $studentinfo[$count]['teacher']=$row['teachername'];
    $studentinfo[$count]['cat1']=$row['Regularity_of_works'];
  $studentinfo[$count]['cat2']=$row['Understanding_of_thesiswork_and_relatedtheory'];
  $studentinfo[$count]['cat3']=$row['StudentEffort_and_performance'];
  $studentinfo[$count]['cat4']=$row['Organization_of_study'];
  $studentinfo[$count]['cat5']=$row['TimelyCompletion_of_ThesisWork'];
      $studentinfo[$count]['total']=$row['total'];

    $count++;
  }
  echo json_encode($studentinfo);
}
else {

  http_response_code(404);
}





 ?>
