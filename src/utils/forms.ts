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
const WEBHOOK_URL = 'https://hook.eu2.make.com/wsi09tnwl4cib8xie1ybhuids69nhdv4';
const FALLBACK_URL = 'https://formspree.io/f/xgegpvjk'; // Fallback service

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function submitContactForm(formData: ContactFormData, retryCount = 0): Promise<boolean> {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Missing required fields');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('Invalid email format');
      return false;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      // Try primary submission service
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        mode: 'cors',
        credentials: 'omit',
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || '',
          message: formData.message.trim(),
          form: formData.form || 'contact',
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return true;
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (primaryError) {
      clearTimeout(timeoutId);
      
      // If primary service fails, try fallback service
      try {
        const fallbackResponse = await fetch(FALLBACK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: 'New Contact Form Submission (Fallback)',
            _template: 'table'
          })
        });

        if (fallbackResponse.ok) {
          console.warn('Used fallback form service due to primary service failure');
          return true;
        }

        throw new Error(`Fallback service HTTP error! status: ${fallbackResponse.status}`);
      } catch (fallbackError) {
        // If both services fail, throw the primary error
        throw primaryError;
      }
    }
  } catch (error) {
    const isNetworkError = error instanceof Error && (
      error.name === 'AbortError' ||
      error.message.includes('Failed to fetch') ||
      error.message.includes('Network') ||
      error.message.includes('timeout')
    );

    if (isNetworkError && retryCount < MAX_RETRIES) {
      console.warn(`Retrying form submission (attempt ${retryCount + 1} of ${MAX_RETRIES})...`);
      await wait(RETRY_DELAY * Math.pow(2, retryCount));
      return submitContactForm(formData, retryCount + 1);
    }

    if (error instanceof Error) {
      console.error('Form submission error:', error.message);
    } else {
      console.error('Form submission error:', error);
    }
    
    return false;
  }
}