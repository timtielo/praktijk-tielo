export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  form: string;
  submittedAt: string;
}

interface FormError extends Error {
  code: string;
  details?: any;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function submitContactForm(formData: ContactFormData, retryCount = 0): Promise<boolean> {
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
      const error = new Error('Network response was not ok') as FormError;
      error.code = response.status.toString();
      error.details = await response.text();
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Retry logic for network errors
    if (retryCount < MAX_RETRIES && error instanceof Error && 
        (error.message.includes('Network') || error.message.includes('timeout'))) {
      await wait(RETRY_DELAY * Math.pow(2, retryCount));
      return submitContactForm(formData, retryCount + 1);
    }
    
    return false;
  }
}