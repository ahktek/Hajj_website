export class PaymentService {
  /**
   * FUTURE: Inject real bKash/SSLCommerz API here.
   * e.g., POST to https://sandbox.sslcommerz.com/gwprocess/v4/api.php
   */
  static async generateInvoice(amount: number, reference: string) {
    console.log(`[MOCK PAYMENT] Generating invoice for ${amount} BDT. Ref: ${reference}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return { 
      success: true, 
      invoiceId: `INV-${Math.floor(Math.random() * 100000)}`,
      paymentUrl: `https://mock.payment.gateway/pay/${reference}`
    };
  }
}
