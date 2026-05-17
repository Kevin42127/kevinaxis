'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-24 h-screen overflow-y-auto no-scrollbar">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p className="text-sm text-gray-500">Last updated: May 17, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Kevin AXIS website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
            <p>
              The materials on this website are provided "as is". Kevin AXIS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
            <p>
              In no event shall Kevin AXIS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, typographical, or photographic errors. Kevin AXIS does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Links</h2>
            <p>
              Kevin AXIS has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kevin AXIS of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Modifications</h2>
            <p>
              Kevin AXIS may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Taiwan and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Contact Information</h2>
            <p>
              If you have any questions about these terms of service, please contact us through our contact form on this website.
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
