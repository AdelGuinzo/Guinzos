<?php
header('Content-Type: application/json');

// Retrieve form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Basic validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Prepare email
$to = 'info@example.com'; // Replace with your email address
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$email_subject = "Contact Form Submission: $subject";
$email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message.']);
}
?>
