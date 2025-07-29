
import React, { useState } from 'react';
import { CONTACT_DETAILS } from '../constants';
import type { ContactInfo } from '../types';
import { SendIcon, CheckCircleIcon } from './Icons';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // In a real app, you would handle form submission here.
    // Simulating network request
    setTimeout(() => {
        console.log('Form submitted:', formState);
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset form status after 5 seconds
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-neutral-800/40 border border-neutral-700 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <p className="text-neutral-400 mb-8">Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as possible!</p>
          <div className="space-y-4">
            {CONTACT_DETAILS.map((info: ContactInfo) => (
              <a href={info.href} key={info.label} className="flex items-center p-3 rounded-lg hover:bg-neutral-700/60 transition-colors">
                <info.icon className="w-6 h-6 text-neutral-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">{info.label}</p>
                  <p className="text-sm text-neutral-400">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-neutral-800/40 border border-neutral-700 p-8 rounded-lg backdrop-blur-sm">
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-neutral-300 mt-2">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
            ) : (
            <>
                <h3 className="text-2xl font-bold text-white mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Your Name</label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required className="w-full bg-neutral-700/50 border border-neutral-600 rounded-md px-3 py-2 text-white focus:ring-neutral-500 focus:border-neutral-500 transition"/>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Your Email</label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required className="w-full bg-neutral-700/50 border border-neutral-600 rounded-md px-3 py-2 text-white focus:ring-neutral-500 focus:border-neutral-500 transition"/>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
                    <textarea id="message" name="message" value={formState.message} onChange={handleInputChange} rows={4} required className="w-full bg-neutral-700/50 border border-neutral-600 rounded-md px-3 py-2 text-white focus:ring-neutral-500 focus:border-neutral-500 transition"></textarea>
                    </div>
                    <button type="submit" disabled={status === 'submitting'} className="w-full justify-center font-bold px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-black bg-white focus:outline-none focus:ring-4 focus:ring-neutral-400 disabled:bg-neutral-400 disabled:cursor-wait">
                        {status === 'submitting' ? 'Sending...' : <>Send Message <SendIcon /></>}
                    </button>
                </form>
            </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;