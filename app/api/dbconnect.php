<?php
  $dbhost="mysql.hostinger.co.uk";
  $dbuser="u927063273_jdaly";
  $dbpass="Granlo.52";
  $dbname="u927063273_jdaly";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  