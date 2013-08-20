<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<h1>Here is your information!<h2> 

    <?php
	echo "<p>Name:" . $_REQUEST["name"] . "</p>";
	echo "<p>Age:" . $_REQUEST["age"] . "</p>";
	echo "<p>Gender:" . $_REQUEST["gender"] . "</p>";
	echo "<p>Bio:" . $_REQUEST["bio"] . "</p>";
	echo "<p>Major:" . $_REQUEST["major"] . "</p>";
	echo "<p>Works:" . $_REQUEST["works"] . "</p>";
	echo "<p>Today is ".date("F j, Y at g a")."</p>";
	?>
    
</body>
</html>