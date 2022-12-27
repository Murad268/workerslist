<?php
   require_once('server.php');
   $workers=$db->prepare("SELECT * FROM workerslist WHERE id = ?");
   $workers->execute([$_GET['id']]);
   $workerList = $worker=$workers->fetch(PDO::FETCH_ASSOC);
   if($workerList["liked"] == 0) {
      $workers=$db->prepare("UPDATE workerslist SET liked=? 
      WHERE id = ?");
      $workers->execute([1, $_GET['id']]);
   } else {
      $workers=$db->prepare("UPDATE workerslist SET liked=? 
      WHERE id = ?");
      $workers->execute([0, $_GET['id']]);
   }
 
  
   $workers=$db->prepare("SELECT * FROM workerslist");
   $workers->execute();
   $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($workerList);

  

 
?>