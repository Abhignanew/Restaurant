
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firname = $_POST["firname"];
    $lasname= $_POST["lasname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $address = $_POST["address"];
    $phoneNumber = $_POST["phoneNumber"];

    // Perform validation (you can add more validation as needed)
    if (empty($firname) || empty($lasname) || empty($email) || empty($password) || empty($address) || empty($phoneNumber)) {
        echo "All fields are required.";
    } else {
        // Database connection
$conn=new mysqli('localhost','root','','restaurantdb');
if ($conn->connect_error) {
    die('Connection Failed:'. $conn->connect_error);
}
else{
    $stmt = $conn->prepare("INSERT INTO resto_users (firname, lasname, email, password, address, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi",$firname,$lasname,$email,$password,$address,$phoneNumber);

$stmt->execute();
header("Location: http://localhost/resto/Restaurant/menu1.html"); 
        
$stmt->close();
$conn->close();
}
        
    }
}
?>
