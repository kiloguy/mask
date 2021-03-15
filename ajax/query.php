<?php

$docs = [];
$update_times = 0;
$client = new MongoDB\Driver\Manager("mongodb://127.0.0.1:27017");
foreach($client->executeQuery("mask.info", new MongoDB\Driver\Query([])) as $doc){
	$update_times = $doc->update_times;
}
foreach($client->executeQuery("mask.pharmacy", new MongoDB\Driver\Query(["address" => new MongoDB\BSON\Regex("^" . $_POST["county"] . $_POST["area"], "")])) as $doc){
	array_push($docs, $doc);
}
echo json_encode($docs);

?>
