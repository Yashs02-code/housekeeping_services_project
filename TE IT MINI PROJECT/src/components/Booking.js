import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'cleaning',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/book', formData);
        alert('Booking request sent!');
    };

    return (
        <section className="booking-form">
            <h2>Book a Service</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" name="name" onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} required />
                <label>Phone Number:</label>
                <input type="tel" name="phone" onChange={handleChange} required />
                <label>Select Service:</label>
                <select name="service" onChange={handleChange}>
                    <option value="cleaning">Home Cleaning</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="specialized">Specialized Services</option>
                </select>
                <label>Preferred Date:</label>
                <input type="date" name="date" onChange={handleChange} required />
                <label>Additional Details:</label>
                <textarea name="message" onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Booking;
