<?php

$conn=mysqli_connect("localhost","root","","thesis");
$data = json_decode(file_get_contents("php://input"), true);
$firstname = $data['firstname'];
$lastname = $data['lastname'];
$roll =$data['roll'];
$thesis =$data['thesis'];
$date=$data['date'];
$month=$data['month'];


$query1="INSERT INTO `studentinfo` (Firstname,Lastname,Roll,Thesis,Dateid) VALUES('$firstname','$lastname','$roll','$thesis',(SELECT Dateid from `date` where Year=$date AND Month='$month'))";


if(mysqli_query($conn,$query1) )
{

  echo "succesfully added";
}
else {
echo "failed";
}

?>
