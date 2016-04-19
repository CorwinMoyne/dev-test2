<?php
require 'vendor/autoload.php';
$app = new \Slim\Slim();

require_once('routes/headstones.php');

$app->run();

