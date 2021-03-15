$(document).ready(function(){
	$.post("ajax/load_counties.php",
		{},
		function(data, status){
			var counties = JSON.parse(data);
			for(i in counties){
				$("#county-sel").append("<option value=\"" + counties[i] + "\">" + counties[i] + "</option>");
			}
			$.post("ajax/load_areas.php",
				{
					county: $("#county-sel").val()
				},
				function(data, status){
					var areas = JSON.parse(data);
					for(i in areas){
						$("#area-sel").append("<option value=\"" + areas[i] + "\">" + areas[i] + "</option>");
					}
				}
			);
		}
	);

	$("#county-sel").change(function(){
		$("#area-sel").empty();
		$.post("ajax/load_areas.php",
			{
				county: $(this).val()
			},
			function(data, status){
				var areas = JSON.parse(data);
				for(i in areas){
					$("#area-sel").append("<option value=\"" + areas[i] + "\">" + areas[i] + "</option>");
				}
			}
		);
	});

	$("#query-btn").click(function(){
		$("#result-div").fadeOut("fast");
		$("#hint").fadeOut("fast");
		setTimeout(function(){
			$("#result-div").empty();
			$.post("ajax/query.php",
				{
					county: $("#county-sel").val(),
					area: $("#area-sel").val()
				},
				function(data, status){
					$("#result-div").empty();
					var pharmacies = JSON.parse(data);
					var curTime = new Date();
					for(i in pharmacies){
						var tag = $("<div class=\"result-row\"></div>");
						tag.append("<div class=\"result-name\">" + pharmacies[i].name + "</div>");
						tag.append("<div class=\"result-phone\">" + pharmacies[i].phone + "</div>");
						tag.append("<div class=\"result-address\">" + pharmacies[i].address + "</div>");
						tag.append("<a class=\"map-link\" href=\"https://www.google.com/maps/search/?api=1&query=" + pharmacies[i].address + "\"><span class=\"material-icons\">room</span></a>");
						tag.append("<div class=\"result-adult\">成人: " + pharmacies[i].adult + "</div>");
						tag.append("<div class=\"result-child\">兒童: " + pharmacies[i].child + "</div>");
						var date = pharmacies[i].source_time.split(" ")[0];
						var time = pharmacies[i].source_time.split(" ")[1];
						var ymd = date.split("/");
						var hms = time.split(":");
						var sourceTime = new Date(parseInt(ymd[0], 10), parseInt(ymd[1], 10) - 1, parseInt(ymd[2], 10), parseInt(hms[0], 10), parseInt(hms[1], 10), parseInt(hms[2], 10));
						var diffsecs = (curTime - sourceTime) / 1000;
						var diffhpart = Math.floor(diffsecs / 3600);
						var diffmpart = Math.floor((diffsecs - (diffhpart * 3600)) / 60);
						var diffspart = diffsecs - (diffhpart * 3600) - (diffmpart * 60);
						var diffStr = "";
						if(diffhpart == 0 && diffmpart == 0)
							diffStr = "幾秒鐘前";
						else if(diffhpart == 0)
							diffStr = "" + diffmpart + "分鐘前";
						else
							diffStr = "" + diffhpart + "小時" + diffmpart + "分鐘前";
						tag.append("<div class=\"result-time\">來源資料時間: " + diffStr + "</div>");
						tag.append("<div class=\"clear-both\"></div>")
						$("#result-div").append(tag);
					}
					$("#result-div").fadeIn("fast");
					$("#hint").fadeIn("fast");
				}
			);
		}, 500);
	});
});
