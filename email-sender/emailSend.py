import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# SMTP server settings
SMTP_SERVER = "smtp.gmail.com"  # Gmail SMTP server
SMTP_PORT = 465  # SSL port for secure connection
EMAIL_SENDER = "your_email@gmail.com"  # Sender's email address
EMAIL_PASSWORD = "your_app_password"  # App password (generated in Google account)

# Function to send an email
def send_email(receiver_email, subject, message):
    try:
        # Create the email message
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = receiver_email
        msg["Subject"] = subject

        # Attach the email body
        msg.attach(MIMEText(message, "plain"))

        # Connect to the SMTP server and send the email
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, context=context) as server:
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_SENDER, receiver_email, msg.as_string())
        print(f"Email sent to {receiver_email}")

    except Exception as e:
        print(f"Error sending email: {e}")

# Read email addresses from a file
with open("emails.txt", "r") as file:
    email_list = [line.strip() for line in file]

# Email subject and message
subject = "Test Email"
message = "This is an automated email sent using a Python bot."

# Send emails to all addresses in the list
for email in email_list:
    send_email(email, subject, message)
