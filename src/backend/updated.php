<?php
    require_once('server.php');
    $workers=$db->prepare("UPDATE workerslist SET name=?, surname=?, salary=? 
    WHERE id = ?");
    $workers->execute([$_POST["name"], $_POST["surname"], $_POST["salary"], $_GET["id"]]);
    $workers=$db->prepare("SELECT * FROM workerslist");
    $workers->execute();
    $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($workerList);
?>