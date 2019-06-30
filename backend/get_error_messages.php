<?php
/**
 * Returns the list of error messages.
 */
require 'database.php';

$error_messages = [];
$sql = "SELECT id, timestamp, message FROM error_message ORDER BY timestamp DESC LIMIT 10";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $error_messages[$i]['id']    = $row['id'];
    $error_messages[$i]['timestamp'] = $row['timestamp'];
    $error_messages[$i]['message'] = $row['message'];
    $i++;
  }

  echo json_encode($error_messages);
}
else
{
  http_response_code(404);
}
?>