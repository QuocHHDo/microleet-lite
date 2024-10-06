import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">Last Updated: [Current Date]</p>

      <p className="mb-6">
        Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of
        Service&quot;) carefully before using the Microlearning Platform website
        (the &quot;Service&quot;) operated by Microlearning Platform Inc.
        (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Description of Service
        </h2>
        <p>
          Microlearning Platform provides educational content related to
          software engineering, including but not limited to LeetCode
          problem-solving guides, algorithm explanations, and software
          engineering concepts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-2">
          3.1. You must create an account to access certain features of the
          Service. You are responsible for maintaining the confidentiality of
          your account and password.
        </p>
        <p>
          3.2. You agree to provide accurate, current, and complete information
          during the registration process and to update such information to keep
          it accurate, current, and complete.
        </p>
      </section>

      {/* Add more sections here */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          legal@microlearningplatform.com.
        </p>
      </section>

      <p className="mt-8">
        By using our Service, you acknowledge that you have read and understood
        these Terms of Service and agree to be bound by them.
      </p>
    </div>
  );
};

export default TermsOfServicePage;
