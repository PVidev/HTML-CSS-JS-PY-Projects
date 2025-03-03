✉️ Email Sender Bot

This Python script automates sending emails using the SMTP protocol. It reads email addresses from a text file and sends a message to each recipient.

🚀 Features

✅ SMTP Setup – Configures the SMTP server for secure email sending.

✅ send_email Function – Sends an email with a subject and message.

✅ File Reading – Loads email addresses from a text file (emails.txt).

✅ Loop Through Email List – Sends the email to each recipient.

📌 Prerequisites

To use this script, you need:

📧 A Gmail account (or another email provider supporting SMTP)

🔑 An App Password (if using Gmail, generate one in your Google Account security settings)

🐍 Python installed on your machine

📥 Installation

1️⃣ Clone this repository or download the script.
2️⃣ Install required dependencies (if needed):

pip install smtplib email ssl

3️⃣ Create a file named emails.txt and add email addresses (one per line).

⚡ Usage

1️⃣ Open the script and replace the sender's email and app password:

EMAIL_SENDER = "your_email@gmail.com"
EMAIL_PASSWORD = "your_app_password"

2️⃣ Run the script:

python email_sender.py

3️⃣ The script will send an email to each address listed in emails.txt.

🔔 Notes

🔹 Ensure that your email provider allows SMTP connections.

🔹 Gmail users must enable "Less secure apps" or generate an App Password.

🔹 Always be cautious with your credentials – never hardcode them in public repositories.

📜 License

This project is open-source and available under the MIT License.

💡 Feel free to modify and enhance the script as needed! 🚀
