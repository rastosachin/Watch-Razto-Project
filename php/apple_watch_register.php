<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "apple_watch_users";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    if ($conn->query($sql)) {
        echo '<script>
                alert("Registration successful!");
                window.location.href = "../login-index.html";
              </script>';
    } else {
        echo '<script>
                alert("Error: Registration failed. Please try again.");
                window.location.href = "index.html";
              </script>';
    }

    $conn->close();
    exit();
}
?>