<?php

include 'db_connect.php';

$sql = "
SELECT phone_name, phone_model, phone_OS, phone_memory, phone_processor, 
phone_camera, phone_manufacturer, phone_price, phone_rating, supp_name
FROM phone, rating, supplier
WHERE phone.phone_ID = rating.phone_ID
AND supplier.supp_ID = rating.supp_ID";

$result = mysqli_query($link, $sql);
$resultCheck = mysqli_num_rows($result);
$result_arr = array();

if ($resultCheck > 0){
    while ($row = mysqli_fetch_assoc($result)){
        $result_arr[] = $row;    
    }
}

print json_encode($result_arr);
mysqli_close($link);


?>