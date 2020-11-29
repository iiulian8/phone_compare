<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
/* Attempt to connect to MySQL database */
$link = mysqli_connect("localhost", "root", "", "PhoneCompare");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>