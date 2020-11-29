<?php

include 'db_connect.php';

echo "<pre>";
    print_r($_POST);
echo "</pre>";

if(isset($_POST['customer_email']) && $_POST['customer_email'] != ''){

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){

        $customerName = trim($_POST['customer_name']);
        $customerEmail = trim($_POST['customer_email']);
        $customerMessage = trim($_POST['customer_message']);

        $to = "liacuantongeorge@gmail.com";
        $body = "";

        $body .= "From: ".$customerName. "\r\n";
        $body .= "Email: ".$customerEmail. "\r\n";
        $body .= "Message: ".$customerMessage. "\r\n";

        mail($to,$body);

    }
}

?>