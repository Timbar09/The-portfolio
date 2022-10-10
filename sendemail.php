<?php

  if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = 'steelmontsho@gmail.com';
    $subject = 'Visitor Enquiry';
    $headers = 'From: '.$name.'<'.$emailFrom.'>\r\n';

    $text = 'From: '.$name'\r\n'.$message;

    mail($emailTo, $subject, $text, $headers);

  }

?>