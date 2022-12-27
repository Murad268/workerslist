<?php
      require_once('server.php');
      $workers=$db->prepare("SELECT * FROM workerslist WHERE name LIKE ?");
      $workers->execute(["%".$_POST["search"]."%"]);




      $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
       
      echo json_encode($workerList);
?>