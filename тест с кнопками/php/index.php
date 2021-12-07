<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

include ("config.php");
include ("connect.php");

class quiz
{
    public $id = [];
    public $right_answ = [];
}

$question_n = 1;

$quiz1 = new quiz();
if ($question_n==1){
    $sql = "SELECT * FROM `variabl_answer`";
}

if ($result = $mysqli->query($sql)) { 
    while($row = $result->fetch_assoc() ){
        array_push($quiz1->id, $row['question_n']);
        array_push($quiz1->right_answ, $row['r_answ']);
    }
    }
$sql = 'SELECT COUNT(*) FROM variabl_answer' ;
if ($result = $mysqli->query($sql)) { 
    while($row = $result->fetch_row() ){
        $quiz1->total_n = $row[0];
    }
}
$obj = json_encode($quiz1);
echo(json_encode($quiz1));
$pageURL = @$_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
if ( $_SERVER['SERVER_PORT'] != '80' )
    $pageURL .= $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . $_SERVER['REQUEST_URI'];
else
    $pageURL .= $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
return $pageURL;
?>