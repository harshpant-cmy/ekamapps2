import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-ekam-primary mb-6">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Effective Date:</strong> March 1, 2025<br/>
                <strong>Last Updated:</strong> March 1, 2025
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Ekam Apps website at www.ekamapps.com (the "Website"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">2. About Ekam Apps</h2>
              <p>Ekam Apps is an AI automation consulting company that provides custom AI solutions, automation services, and AI strategy consultation to businesses. We transform business operations through intelligent automation and custom AI development.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">3. Website Usage</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.1 Permitted Use</h3>
              <p className="mb-2">You may use our Website for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Learning about our services and capabilities</li>
                <li>Contacting us for business inquiries</li>
                <li>Reading our content and resources</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">3.2 Prohibited Use</h3>
              <p className="mb-2">You may not use our Website to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the Website's functionality</li>
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Use automated tools to scrape or harvest information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">4. Intellectual Property</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.1 Our Content</h3>
              <p className="mb-4">All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Ekam Apps and is protected by intellectual property laws. All rights are reserved.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.2 Trademarks</h3>
              <p className="mb-4">"Ekam Apps" and our logo are trademarks of Ekam Apps. You may not use our trademarks without our prior written permission.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">4.3 Limited License</h3>
              <p>We grant you a limited, non-exclusive, non-transferable license to access and use our Website for its intended purpose. This license does not include any rights to modify, distribute, or create derivative works.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">5. Services and Separate Agreements</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.1 Service Engagement</h3>
              <p className="mb-4">The information on this Website is for general informational purposes only. Our actual AI automation and consulting services are provided under separate, specific agreements with each client.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.2 No Binding Commitment</h3>
              <p className="mb-4">Nothing on this Website constitutes a binding offer or commitment to provide services. All service engagements require separate written agreements.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">5.3 Custom Solutions</h3>
              <p>Our services are custom-tailored to each client's needs. Service terms, pricing, deliverables, and data handling practices are defined in individual client agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">6. Disclaimers</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.1 Information Accuracy</h3>
              <p className="mb-4">While we strive to provide accurate and up-to-date information on our Website, we make no warranties about the completeness, accuracy, or reliability of any information presented.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.2 No Professional Advice</h3>
              <p className="mb-4">The content on our Website is for informational purposes only and does not constitute professional advice. You should consult with qualified professionals for specific business decisions.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">6.3 Third-Party Links</h3>
              <p>Our Website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of service of any third-party sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">7. Limitation of Liability</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">7.1 Website Usage</h3>
              <p className="mb-4">To the fullest extent permitted by law, Ekam Apps shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this Website.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">7.2 Service Liability</h3>
              <p className="mb-4">Liability for our AI automation and consulting services is governed by separate client agreements and is not covered by these Website Terms.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">7.3 Maximum Liability</h3>
              <p>Our total liability for any claims related to Website usage shall not exceed the amount you paid to access the Website (which is zero, as our Website is free to use).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">8. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Ekam Apps, its employees, and affiliates from any claims, damages, or expenses arising from your violation of these Terms or misuse of our Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">9. Privacy</h2>
              <p>Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-ekam-primary hover:underline">Privacy Policy</a>, which also governs your use of the Website, to understand our data practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">10. Modifications</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">10.1 Terms Changes</h3>
              <p className="mb-4">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this Website. Your continued use of the Website constitutes acceptance of the modified Terms.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">10.2 Website Changes</h3>
              <p>We may modify, suspend, or discontinue any aspect of our Website at any time without notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">11. Termination</h2>
              <p>We may terminate or suspend your access to our Website immediately, without prior notice, for any violation of these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">12. Governing Law and Jurisdiction</h2>
              <p>These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts in Delhi, India.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">13. Severability</h2>
              <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">14. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Ekam Apps regarding your use of the Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">15. Contact Information</h2>
              <p className="mb-2">If you have any questions about these Terms and Conditions, please contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:hello@ekamapps.com" className="text-ekam-primary hover:underline">hello@ekamapps.com</a><br/>
                <strong>Phone/WhatsApp:</strong> <a href="tel:+919971117162" className="text-ekam-primary hover:underline">+91-9971117162</a>
              </p>
              <p className="mt-4 text-sm text-gray-600 italic">
                These Terms apply only to the use of our Website (www.ekamapps.com). Our AI automation and consulting services are governed by separate agreements with specific terms and conditions for each client engagement.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;