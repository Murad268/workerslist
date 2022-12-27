<?php
   require_once('server.php');
   $workers=$db->prepare("DELETE FROM workerslist
   WHERE id = ?");
   $workers->execute([$_GET["id"]]);
   $workers=$db->prepare("SELECT * FROM workerslist");
   $workers->execute();
   $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($workerList);

  

 
?>