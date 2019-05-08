<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Hello ${name}!</title>
<link href="/css/main.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>

<body>
<h1> select the application</h1>
<br>
<form method="POST" action="postForm">
<input type="checkbox" name="appSelect">
<label>MAR</label>
<input type="checkbox" name="appSelect">
<label>Trend</label>
<input type="checkbox" name="appSelect">
<label>POC</label>
	  File Name: <input type="checkbox" name="file_name">
		<br />
		<input type="submit" value="Submit" />
	</form>
</body>
</html>