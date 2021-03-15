<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title>口罩庫存</title>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="index.js"></script>

	<link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC:400,700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>口罩庫存<a href="/"><span>http://mask.thekilo.cc</span></a></h1>
	<div id="data-source">資料來源: <a href="https://data.nhi.gov.tw/Datasets/DatasetDetail.aspx?id=656">健康保險資料開放服務(健保特約機構口罩剩餘數量明細清單)</a></div>
	<div id="update-freq">每5分鐘更新!</div>
	<div id="form-wrapper">
		<select id="county-sel">
		</select>
		<select id="area-sel">
		</select>
		<button id="query-btn">查詢</button>
	</div>
	<div id="hint">下列藥局尚有庫存</div>
	
	<div id="result-div">
	</div>
</body>
</html>
