import React, { useState, useEffect } from 'react';
import '../styles/EmergencyRequestForm.css';

const EmergencyRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        emergencyType: '',
        location: '',
        latitude: '',
        longitude: ''
    });

    const [loadingLocation, setLoadingLocation] = useState(false);

    useEffect(() => {
        if ('geolocation' in navigator) {
            setLoadingLocation(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData((prev) => ({
                        ...prev,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        location: `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`
                    }));
                    setLoadingLocation(false);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setLoadingLocation(false);
                }
            );
        } else {
            console.warn('Geolocation not available');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate Phone Number (must be a valid phone number format)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
    
        // Check if all required fields are filled
        if (!formData.name || !formData.phone || !formData.emergencyType) {
            alert('Please fill in all required fields.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3001/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Show success alert before redirecting
                alert('Ambulance requested successfully! You will be redirected to tracking...');
                window.location.href = '/tracking';  // Redirect to the tracking page
            } else {
                alert('Failed to submit request.');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Error submitting request.');
        }
    };
    

    return (
        <div className="App">
            <h2>Emergency Request 🚑</h2>
            <div className="form-container">
                {/* Left side: Google Maps */}
                {formData.latitude && formData.longitude && (
                    <div className="map-container">
                        <iframe
                            title="Emergency Request Map" 
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '10px' }}
                            src={`https://www.google.com/maps?q=${formData.latitude},${formData.longitude}&hl=es;z=14&output=embed`}
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {/* Right side: Form */}
                <div className="form-wrapper">
                    {loadingLocation && <p>Detecting location...</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone*"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="emergencyType"
                            value={formData.emergencyType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Emergency Type</option>
                            <option value="Accident">Accident</option>
                            <option value="Heart Attack">Heart Attack</option>
                            <option value="Fire">Fire</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location (auto)"
                            value={formData.location}
                            readOnly
                        />
                        <button type="submit">Request Ambulance</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmergencyRequestForm;
