<?php
require 'vendor/autoload.php';
$app = new \Slim\Slim();

$app->get('/headstones', 'getHeadstones');
$app->get('/carousel', 'getCarouselImages');
$app->get('/headstone', 'getHeadstoneById');
$app->run();

function getHeadstoneById() {
  $id=$_POST['id'];
  $sql = "select * FROM headstone where id = $id";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($result);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}

function getHeadstones() {
  $sql = "select * FROM headstone";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($result);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}

function getCarouselImages() {
  $sql = "SELECT * FROM carousel_image";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($result);
  } catch(PDOException $e) {
    
  }
}

function getConnection() {
  $dbhost="www.db4free.net";
  $dbuser="jdalyandsons";
  $dbpass="Granlo.52";
  $dbname="jdalyandsons";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
