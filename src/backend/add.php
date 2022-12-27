<?php
      require_once('server.php');
      $workers=$db->prepare("INSERT INTO workerslist (name, surname, salary) VALUES (?,?,?)");
      $workers->execute([$_POST["name"], $_POST["surname"], $_POST["salary"]]);



      $workers=$db->prepare("SELECT * FROM workerslist");
      $workers->execute();
      $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
      $workers=$db->prepare("SELECT * FROM workerslist");
      $workers->execute();
      $workerList = $worker=$workers->fetchAll(PDO::FETCH_ASSOC);
       
      echo json_encode($workerList);
?>