<?php
require __DIR__ . '/../vendor/autoload.php';

// Debug: nyers adat mentése
$raw = file_get_contents("php://input");
file_put_contents(__DIR__ . '/contact-raw.txt', $raw);

// Load config from .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Címzett és tárgy
$to = $_ENV['EMAIL_TO'];
$subject = "Kapcsolatfelvétel a Nexora.com-on";

// Mezők definiálása
$fields = ['name', 'email', 'phone', 'message', 'gdpr'];

// JSON dekódolás
$input = json_decode($raw, true);
file_put_contents(__DIR__ . '/contact-decoded.txt', print_r($input, true));

// Adatok begyűjtése és tisztítása
$data = [];
foreach ($fields as $field) {
  $data[$field] = htmlspecialchars(trim($input[$field] ?? ''));
}

// Validáció
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || empty($data['name']) || empty($data['message'])) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Hibás adatok']);
  exit;
}

// Email tartalom összeállítása
$body = "Kapcsolatfelvételi üzenet érkezett a Nexora.com-on:\n\n";
foreach ($data as $key => $value) {
  $body .= ucfirst($key) . ": " . $value . "\n";
}

// Email küldés
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->isSMTP();
$mail->Host = $_ENV['SMTP_HOST'];
$mail->SMTPAuth = true;
$mail->Username = $_ENV['SMTP_USER'];
$mail->Password = $_ENV['SMTP_PASS'];
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom($_ENV['EMAIL_FROM'], 'Nexora Kapcsolat');
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = $body;

if (!$mail->send()) {
  file_put_contents(__DIR__ . '/contact-error.txt', $mail->ErrorInfo);
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
  exit;
}

http_response_code(200);
echo json_encode(['status' => 'success', 'message' => 'Üzenet elküldve']);
