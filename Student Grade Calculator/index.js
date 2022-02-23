<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div class="box">
        <div id="side1">
            <strong><h1>Student Grade Calculator</h1></strong>
        </div>
        <div id="side2">
            <form action="backend.php">
                <div class="fill-marks">
                    <input type="text" placeholder="Subject-1" id="s1">
                </div>
                <div class="fill-marks">
                    <input type="text" placeholder="Subject-2" id="s2">
                </div>
                <div class="fill-marks">
                    <input type="text" placeholder="Subject-3" id="s3">
                </div>
                <div class="fill-marks">
                    <input type="text" placeholder="Subject-4" id="s4">
                </div>
                <div class="fill-marks">
                    <input type="text" placeholder="Subject-5" id="s5">
                </div>
                <div class="fill-marks">
                    <input type="button" name="" value="Result" class="fill-marks" id="btn" onclick="calcy()">
                </div>

            </form>
        </div>
        <div class="fill-marks-showData">
            <p id="showData"></p>
        </div>
    </div>
</body>
<script src="index.js"></script>

</html>
