import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | SwaadYatra",
  description: "Read SwaadYatra's Privacy Policy to understand how we handle information submitted through our contact and story forms.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 2025"
      sections={[
        {
          body: "This Privacy Policy explains how SwaadYatra ('we', 'our', 'us'), operated from Greater Noida, India, handles information when you use our website at https://www.swaadyatra.com. SwaadYatra is a food discovery platform. We do not have user accounts, login, or signup. This policy is governed by the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.",
        },
        {
          heading: "We Do Not Collect Personal Data Automatically",
          body: "SwaadYatra does not use analytics tools, tracking pixels, or advertising cookies. We do not automatically collect your IP address, device information, browser fingerprint, or browsing behaviour. We do not maintain any user database.",
        },
        {
          heading: "Information You Voluntarily Submit",
          body: "The only personal information we receive is what you choose to provide through our forms:",
          items: [
            "Contact form — your name, email address, and message",
            "Story submission form (Happy Stories page) — your name, email address, city, and your food story",
            "Vendor listing form — business name, contact details, and food spot information submitted by vendors",
          ],
          subsections: [
            {
              heading: "How This Information Is Used",
              body: "Information submitted through these forms is used solely to respond to your inquiry, review your story for publication, or process a vendor listing request. We do not use your information for marketing, profiling, or any purpose beyond the one for which you submitted it.",
            },
            {
              heading: "How This Information Is Stored",
              body: "Form submissions are delivered to us via Resend (resend.com), our email delivery service. Your data is received as an email in our inbox and is not stored in any separate database. It is retained only as long as needed to respond to or process your submission.",
            },
          ],
        },
        {
          heading: "Cookies",
          body: "SwaadYatra does not use tracking, advertising, or analytics cookies. We may use strictly necessary technical cookies required for the website to function (for example, CSRF protection tokens on form submissions). These cookies do not collect personal information and are not used to track you across websites.",
        },
        {
          heading: "Third-Party Services",
          body: "We use the following third-party services to operate the website:",
          items: [
            "Resend (resend.com) — delivers form submission emails to us. Your submitted data passes through their servers. See their privacy policy at resend.com/privacy.",
            "Cloudinary (cloudinary.com) — hosts and serves images displayed on the website. No personal user data is shared with Cloudinary.",
            "Vercel (vercel.com) — hosts the website. Vercel may collect server-side logs including IP addresses as part of standard hosting operations. See their privacy policy at vercel.com/legal/privacy-policy.",
          ],
        },
        {
          heading: "Images on This Website",
          body: "Images displayed on SwaadYatra are sourced from Google Reviews, photos uploaded by shop owners, or our own photography. We do not claim ownership of third-party images. If you are the rightful owner of any image and wish it to be removed or credited, please contact us at satwikjain104@gmail.com or swaadyatraa@gmail.com and we will act within 48 hours.",
        },
        {
          heading: "Data Sharing",
          body: "We do not sell, rent, or trade your personal information. We do not share your information with any third party except the service providers listed above (Resend, Vercel) who process it solely to deliver our service, and only when required by law or a valid order from a competent Indian authority.",
        },
        {
          heading: "Your Rights Under the DPDP Act, 2023",
          body: "Under India's Digital Personal Data Protection Act, 2023, you have the right to:",
          items: [
            "Access the personal data you have submitted to us",
            "Request correction of inaccurate information",
            "Request erasure of your personal data",
            "Withdraw consent at any time (where processing is based on consent)",
            "Nominate a person to exercise these rights on your behalf",
          ],
          subsections: [
            {
              heading: "How to Exercise Your Rights",
              body: "To exercise any of these rights, email us at satwikjain104@gmail.com or swaadyatraa@gmail.com. We will respond within 30 days as required under applicable law.",
            },
          ],
        },
        {
          heading: "Children's Privacy",
          body: "SwaadYatra is a general-audience food discovery website and is not directed at children. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has submitted personal information through our forms, please contact us at satwikjain104@gmail.com or swaadyatraa@gmail.com and we will delete it promptly.",
        },
        {
          heading: "Security",
          body: "We implement reasonable technical measures to protect information submitted through our forms, including HTTPS encryption, CSRF protection on all form endpoints, and rate limiting. However, no method of internet transmission is completely secure and we cannot guarantee absolute security.",
        },
        {
          heading: "Changes to This Policy",
          body: "We may update this Privacy Policy from time to time. The 'Last Updated' date at the top of this page will reflect the most recent revision. Continued use of the website after changes are posted constitutes acceptance of the updated policy.",
        },
        {
          heading: "Contact Us",
          body: "For any privacy-related questions or requests, contact us at: Email: satwikjain104@gmail.com or swaadyatraa@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, Uttar Pradesh, India.",
        },
      ]}
    />
  );
}
