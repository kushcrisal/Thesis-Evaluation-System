<<?php

$conn=mysqli_connect("localhost","root","","thesis");
$id=18;
$weight=0;

$query="SELECT `mid_committee`,`total` FROM `marksdensity` WHERE id=1";
$query1="SELECT AVG(total) as mark FROM `mid_committee_marks` where id=$id";
if($result=mysqli_query($conn,$query)   )
{
  $row=mysqli_fetch_assoc($result);
  $actual=$row['mid_committee'];
  $total=$row['total'];
  $weight=$actual/$total;

  echo($weight);





}
else {
echo "failed";
}
if( $result1=mysqli_query($conn,$query1)  )
{

  $row1=mysqli_fetch_assoc($result1);
  $mark=$row1['mark'];
  echo ($mark);




}
else {
echo "failed";
}







 ?>
