<?php
/**
 * Returns the list of log messages.
 */
require 'database.php';

$log_messages = [];
$sql = "SELECT id, timestamp, message FROM log_message ORDER BY timestamp DESC LIMIT 10";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $log_messages[$i]['id']    = $row['id'];
    $log_messages[$i]['timestamp'] = $row['timestamp'];
    $log_messages[$i]['message'] = $row['message'];
    $i++;
  }

  echo json_encode($log_messages);
}
else
{
  http_response_code(404);
}
?>