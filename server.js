const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// Configure Zoho Mail transporter
require("dotenv").config();

const transporter = nodemailer.createTransport({
	host: "smtp.zoho.com",
	port: 465,
	secure: true, // use SSL
	auth: {
		user: "contact@thequantlabs.com",
		pass: process.env.ZOHO_MAIL_PASSWORD,
	},
});

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
	const { name, email, company, message, recipient, subject } = req.body;

	try {
		// Email content
		const mailOptions = {
			from: "contact@thequantlabs.com",
			to: recipient || "contact@thequantlabs.com",
			subject: subject || `New Contact Form Submission from ${name}`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		};

		// Send email
		await transporter.sendMail(mailOptions);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ success: false, error: error.message });
	}
});

// Serve React app for any other routes
app.get("*", (_req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
