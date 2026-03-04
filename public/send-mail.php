<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request payload.',
    ]);
    exit;
}

$recipient = 'spiritualescapeadventure@gmail.com';

$fullName = trim((string) ($payload['fullName'] ?? ''));
$firstName = trim((string) ($payload['firstName'] ?? ''));
$secondName = trim((string) ($payload['secondName'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

if ($firstName === '' || $phone === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please complete all required fields.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.',
    ]);
    exit;
}

$safeFullName = preg_replace("/[\r\n]+/", ' ', $fullName !== '' ? $fullName : trim($firstName . ' ' . $secondName));
$safeEmail = preg_replace("/[\r\n]+/", '', $email);

$subject = sprintf('Contact Request from %s', $safeFullName !== '' ? $safeFullName : 'Website Visitor');

$bodyLines = [
    'New contact request received from the website.',
    '',
    sprintf('Full Name: %s', $safeFullName),
    sprintf('First Name: %s', $firstName),
    sprintf('Second Name: %s', $secondName),
    sprintf('Phone: %s', $phone),
    sprintf('Email: %s', $safeEmail),
    '',
    'Message:',
    $message,
];

$body = implode(PHP_EOL, $bodyLines);

$headers = [
    sprintf('From: SEA Travel Website <no-reply@%s>', $_SERVER['SERVER_NAME'] ?? 'localhost'),
    sprintf('Reply-To: %s', $safeEmail),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'The server could not send your message.',
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Your message has been sent successfully.',
]);
