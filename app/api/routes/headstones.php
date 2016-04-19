<?php
$app->get('/headstones', function() {
    require_once(__DIR__.'../../dbconnect.php');
    $sql = "select * FROM headstone";
    $stmt = $dbh->query($sql); 
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($result);
});

