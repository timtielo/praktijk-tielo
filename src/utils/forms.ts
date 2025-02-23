import { FormEvent } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  form: string;
  submittedAt: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch('https://hook.eu2.make.com/wsi09tnwl4cib8xie1ybhuids69nhdv4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        form: 'contact',
        submittedAt: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}