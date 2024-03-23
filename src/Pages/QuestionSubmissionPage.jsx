// QuestionSubmissionPage.jsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import './QuestionSubmissionPage.css'; // Import CSS file for styling

function QuestionSubmissionPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Send email using EmailJS
            await emailjs.sendForm('service_qkcib49', 'template_v05x8c5', e.target, 'pmKwDPTWlkTi9OcD2');
            setSuccessMessage('Question submitted successfully');
            setName('');
            setEmail('');
            setQuestion('');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to submit question. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="question-submission-container">
            {<h1 className="rainbow-text">  ChromaCraft  </h1>}
                <h1>Submit Your Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Your Question</label>
                        <textarea id="question" name="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                    </div>
                    <button type="submit" className="submit-button" disabled={submitting}>Submit</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <Footer />
        </div>
    );
}

export default QuestionSubmissionPage;
