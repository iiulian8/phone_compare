<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include 'db_connect.php';

$name = trim($_POST['customer_name']);
$email = trim($_POST['customer_email']);
$phone = trim($_POST['customer_tel']);

$sql = "INSERT INTO Customer (customer_name, customer_email, customer_tel) VALUES ('$name', '$email', '$phone')";

if (mysqli_query($link, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
  }

$link -> close();

?>