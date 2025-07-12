import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-ekam-primary mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Effective Date:</strong> March 1, 2025<br/>
                <strong>Last Updated:</strong> March 1, 2025
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">1. Introduction</h2>
              <p>Ekam Apps ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you visit our website at www.ekamapps.com (the "Website").</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">2. Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.1 Personal Information</h3>
              <p className="mb-4">We do not collect, store, or process any personal information through our Website. We do not use contact forms, registration systems, or any other mechanisms that would collect your personal data.</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">2.2 Analytics Information</h3>
              <p className="mb-2">We use Google Analytics to understand how visitors interact with our Website. Google Analytics may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website information</li>
                <li>General geographic location (country/city level)</li>
              </ul>
              <p className="mt-3">This information is collected and processed by Google according to their privacy policy. We do not have access to any personally identifiable information through Google Analytics.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">3. How We Use Information</h2>
              <p className="mb-3">Since we do not collect personal information through our Website, we do not use, share, or process any personal data from Website visitors.</p>
              <p className="mb-2">The analytics data collected by Google Analytics is used solely to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understand website traffic patterns</li>
                <li>Improve website performance and user experience</li>
                <li>Generate aggregate statistics about website usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">4. Cookies and Tracking Technologies</h2>
              <p className="mb-2">Our Website uses cookies solely for Google Analytics functionality. These cookies:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Are placed by Google Analytics</li>
                <li>Do not collect personally identifiable information</li>
                <li>Can be disabled through your browser settings</li>
                <li>Are governed by Google's privacy policy</li>
              </ul>
              <p>You can opt out of Google Analytics tracking by visiting: <a href="https://tools.google.com/dlpage/gaoptout" className="text-ekam-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">5. Third-Party Services</h2>
              <p>We use Google Analytics as our only third-party service on the Website. We do not integrate with any other third-party services that would collect or process visitor data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">6. Data Sharing</h2>
              <p>We do not collect personal data through our Website, therefore we do not share any personal information with third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">7. Our Business Services</h2>
              <p>This Privacy Policy covers only our Website. For our AI automation consulting services, data handling practices are governed by separate service agreements with each client, which include specific data protection and confidentiality provisions tailored to each engagement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">8. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18 through our Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">9. Data Security</h2>
              <p>Since we do not collect or store personal information through our Website, there are no personal data security concerns related to Website usage.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">10. Your Rights</h2>
              <p>Since we do not collect personal information through our Website, there is no personal data for you to access, correct, or delete. If you have concerns about Google Analytics data collection, please refer to Google's privacy policy and opt-out mechanisms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">11. International Users</h2>
              <p>Our Website can be accessed from anywhere in the world. The minimal data processing (via Google Analytics) is handled according to Google's global privacy practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">12. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ekam-primary mb-3">13. Contact Information</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:hello@ekamapps.com" className="text-ekam-primary hover:underline">hello@ekamapps.com</a><br/>
                <strong>Phone/WhatsApp:</strong> <a href="tel:+919971117162" className="text-ekam-primary hover:underline">+91-9971117162</a>
              </p>
              <p className="mt-4 text-sm text-gray-600 italic">
                This Privacy Policy applies only to our Website (www.ekamapps.com). Our business services are governed by separate agreements with specific data protection provisions for each client engagement.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;