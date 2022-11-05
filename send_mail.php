<?php
  $errors = '';
  $myemail = 'benjamin@domiciledesigns.net';//<-----Put Your email here.

  $client_name = $_POST['client_name'];
  $client_email_address = $_POST['client_email'];
  $client_message = $_POST['client_message'];
  $select_service_check = $_POST['select_service_check'];
  $xserv_check = $_POST['xserv_check'];
  $extra_service_input = $_POST['extra_service_input'];

  if(empty($client_name) || empty($client_email_address) || empty($client_message)){
    $errors .= "\n Error: all fields are required";
  }
  if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $client_email_address)){
    $errors .= "\n Error: Invalid email address";
  }
  if(empty($errors)){
  	$to = $myemail;
  	$email_subject = "$client_name";
    if(!isset($select_service_check)){
      $email_body .= "
        Reply to: $client_email_address
        \nMessage:
        \t$client_message";
    } else {
      $email_body .= "
        Reply to: $client_email_address
        \nMessage:
        \t$client_message
        \nSelect Services:\n";
      for($y = 0 ; $y < count($extra_service_input); $y++){
        if(isset($extra_service_input)){
          $email_body .= "\t$xserv_check[$y]\n";
          $email_body .= "\t\t$extra_service_input[$y]\n";
        }else{
          break;
        }
      }
    }
  	mail($to,$email_subject,$email_body);
  	header('Location: thank_you');
  }
?>
<!--If error-->
<!DOCTYPE>
<html>
  <head>
  	<title>Error</title>
  </head>
  <body>
    Errors found:
    <?php
    echo nl2br($errors);
    ?>
  </br>
  </br>
  Click back arrow to return to form.
  </body>
</html>
