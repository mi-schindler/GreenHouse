<?php
/**
 * Returns the list of humidity records.
 */
require 'database.php';

$hum_records = [];
$sql = "SELECT id, timestamp, value FROM humidity WHERE timestamp >= NOW() - INTERVAL 1 DAY";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $hum_records[$i]['id']    = $row['id'];
    $hum_records[$i]['timestamp'] = $row['timestamp'];
    $hum_records[$i]['value'] = $row['value'];
    $i++;
  }

  echo json_encode($hum_records);
}
else
{
  http_response_code(404);
}
?>
