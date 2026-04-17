export class SmsService {
  /**
   * FUTURE: Inject real BD SMS Gateway API here.
   * e.g., using axios to call https://api.sms-gateway.bd/...
   */
  static async sendConfirmationSms(phone: string, message: string) {
    console.log(`[MOCK SMS] Sending to ${phone}: ${message}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { 
      success: true, 
      messageId: `mock-${Date.now()}` 
    };
  }
}
