<?php
/**
 * Returns the list of temperature records.
 */
require 'database.php';

$temp_records = [];
$sql = "SELECT id, timestamp, value FROM temperature";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $temp_records[$i]['id']    = $row['id'];
    $temp_records[$i]['timestamp'] = $row['timestamp'];
    $temp_records[$i]['value'] = $row['value'];
    $i++;
  }

  echo json_encode($temp_records);
}
else
{
  http_response_code(404);
}
?>
