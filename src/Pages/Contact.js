import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration with your credentials
    const serviceID = 'service_k5zxwhr'; // Your service ID
    const templateID = 'template_gaj0ppc'; // Your template ID
    const publicKey = 'uzzWBFCynj8Q1XEJ-'; // Your public key

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset form fields
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setSubmitStatus({ 
          type: 'error', 
          message: 'Sorry, there was an error sending your message. You can contact us directly via email or phone.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-[#1c355e] mb-8">Contact Information</h2>
            
            {/* Email */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#1c355e] mb-2">Email</h3>
              <a 
                href="mailto:zurinestcontractorscliff@gmail.com" 
                className="text-[#1c355e] hover:text-[#8B6914] transition-colors"
              >
                zurinestcontractorscliff@gmail.com
              </a>
            </div>

            {/* Phone Number */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#1c355e] mb-2">Phone Number</h3>
              <a 
                href="tel:+263771879024" 
                className="text-[#1c355e] hover:text-[#8B6914] transition-colors"
              >
                +263 78 416 4005
              </a>
            </div>

            {/* Location */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-[#1c355e] mb-2">Location</h3>
              <p className="text-[#1c355e]">14 Bath Rd Belgravia</p>
              <p className="text-[#1c355e]">Harare</p>
              <p className="text-[#1c355e]">Zimbabwe</p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#e6f7ff] border-l-4 border-[#1c355e] p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-[#1c355e] mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#1c355e] font-medium">Monday - Friday:</span>
                  <span className="text-[#1c355e]">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1c355e] font-medium">Saturday:</span>
                  <span className="text-[#1c355e]">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1c355e] font-medium">Sunday:</span>
                  <span className="text-[#1c355e]">Available by appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#e6f7ff] p-8 rounded-lg border-l-4 border-[#1c355e]">
            <h2 className="text-3xl font-bold text-[#1c355e] mb-8">Send Us a Message</h2>
            
            {/* Status Messages */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#1c355e] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name Surname"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent text-[#1c355e] placeholder-gray-400"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1c355e] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent text-[#1c355e] placeholder-gray-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1c355e] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+263 78 416 4005"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent text-[#1c355e] placeholder-gray-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#1c355e] mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Kitchen Renovation"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent text-[#1c355e] placeholder-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1c355e] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent text-[#1c355e] placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 ${isSubmitting ? 'bg-gray-400' : 'bg-[#1c355e] hover:bg-[#142848]'} text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;