<?php
/**
 * Returns the list of brightness records.
 */
require 'database.php';

$brig_records = [];
$sql = "SELECT id, timestamp, value FROM humidity";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $brig_records[$i]['id']    = $row['id'];
    $brig_records[$i]['timestamp'] = $row['timestamp'];
    $brig_records[$i]['value'] = $row['value'];
    $i++;
  }

  echo json_encode($brig_records);
}
else
{
  http_response_code(404);
}
?>
