
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST["uname"];
    $password = $_POST["pass"];

    // Perform validation (you can add more validation as needed)
    if (empty($email) || empty($password)) {
        echo "Email and password are required.";
    } else {
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'restaurantdb');
        if ($conn->connect_error) {
            die('Connection Failed:' . $conn->connect_error);
        } else {
            // Check user credentials
            $stmt = $conn->prepare("SELECT * FROM resto_users WHERE email = ? AND password = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows==1) {
                // User authenticated, redirect to menu1.html
                header("Location: http://localhost/resto/Restaurant/menu1.html");
            } else {
                echo "Invalid email or password.";
            }

            $stmt->close();
            $conn->close();
        }
    }
}
?>
