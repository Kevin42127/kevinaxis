'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-24 h-screen overflow-y-auto no-scrollbar">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p className="text-sm text-gray-500">Last updated: May 17, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you use our contact form, including your email address and message content. We may also collect information about your device and browsing behavior through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, improve our services, and communicate with you about our music and updates. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties for their marketing purposes. We may share information with service providers who perform services on our behalf, such as Formspree for contact form processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also opt out of certain communications. To exercise these rights, please contact us through our contact form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us through our contact form on this website.
            </p>
          </section>
        </div>
      </div>

      {/* Custom text selection style - same as homepage */}
      <style jsx global>{`
        /* Custom text selection style - white background, black text */
        ::selection {
          background-color: #ffffff;
          color: #000000;
        }

        ::-moz-selection {
          background-color: #ffffff;
          color: #000000;
        }

        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
