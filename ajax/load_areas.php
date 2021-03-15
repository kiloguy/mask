<?php

$areas = [];
$client = new MongoDB\Driver\Manager("mongodb://127.0.0.1:27017");
foreach($client->executeQuery("mask.area", new MongoDB\Driver\Query(["county" => $_POST["county"]])) as $doc){
	$areas = $doc->areas;
}
echo json_encode($areas);

?>
