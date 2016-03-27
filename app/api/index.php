<?php
require 'vendor/autoload.php';
$app = new \Slim\Slim();

$app->get('/example', 'getExample');
$app->run();

function getExample() {
  $sql = "select * FROM exampleTable";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($wines);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}

function getConnection() {
  $dbhost="";
  $dbuser="root";
  $dbpass="";
  $dbname="";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
