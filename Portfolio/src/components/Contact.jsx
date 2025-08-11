import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    // Example using Formspree
    try {
      const res = await fetch("https://formspree.io/f/mvgqlpop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kameshmaharajan2002@gmail.com',
      href: 'mailto:kameshmaharajan2002@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'http://www.linkedin.com/in/kamesh-jayabalan-90b757250',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kamesh2002/',
      color: 'hover:text-gray-800',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kameshmaharajan2002@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-sky-600" />
                <a href={item.href} className="text-gray-700 hover:underline">
                  <strong>{item.label}:</strong> {item.value}
                </a>
              </div>
            ))}

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Links</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-600 text-white font-medium py-3 rounded-lg hover:bg-sky-700 transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
