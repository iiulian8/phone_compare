<?php
include_once 'customer.php';
if(isset(trim($_POST['save'])))
{	 
	 $name = trim($_POST['customer_name']);
	 $email = trim($_POST['customer_email']);
	 $tel = trim($_POST['customer_tel']);
	 $sql = "INSERT INTO Customer (customer_name, customer_email, customer_tel)
	 VALUES ('$customer_name','$customer_email','$customer_tel')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>