<?php
  $dbhost="localhost";
  $dbuser="khccwdsr_admin";
  $dbpass="Granlo.52";
  $dbname="khccwdsr_jdalyandsons";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  