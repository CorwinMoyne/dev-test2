<?php
  $dbhost="www.db4free.net";
  $dbuser="jdalyandsons";
  $dbpass="Granlo.52";
  $dbname="jdalyandsons";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  