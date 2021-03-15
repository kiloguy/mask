<?php

$counties = [];
$client = new MongoDB\Driver\Manager("mongodb://127.0.0.1:27017");
foreach($client->executeQuery("mask.area", new MongoDB\Driver\Query([])) as $doc){
	array_push($counties, $doc->county);
}
echo json_encode($counties);

?>
