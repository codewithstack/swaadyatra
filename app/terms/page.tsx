import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | SwaadYatra",
  description: "Read SwaadYatra's Terms of Service to understand the rules and guidelines for using our food discovery platform.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="June 2025"
      sections={[
        {
          body: "Welcome to SwaadYatra. These Terms of Service ('Terms') govern your access to and use of the SwaadYatra website at https://www.swaadyatra.com ('the Website'). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website. SwaadYatra is operated from Greater Noida, Uttar Pradesh, India and is subject to the laws of India.",
        },
        {
          heading: "Nature of the Platform",
          body: "SwaadYatra is an independent food discovery and travel guide platform. We provide information about street food spots, local eateries, and food experiences near popular tourist destinations across India.",
          items: [
            "We are not a food delivery service, restaurant booking platform, or payment processor",
            "We are not affiliated with any food vendor listed on our website unless explicitly stated",
            "All food spot listings are for informational and discovery purposes only",
            "We do not guarantee the availability, quality, or pricing of any food item or vendor listed",
          ],
        },
        {
          heading: "Use of the Website",
          body: "By using this website, you agree to use it only for lawful purposes and in a manner consistent with these Terms and applicable Indian law, including the Information Technology Act, 2000 and rules made thereunder. You agree not to:",
          items: [
            "Attempt to gain unauthorised access to any part of the website or its servers",
            "Use automated tools, bots, or scrapers to extract data from the website without permission",
            "Submit false, misleading, or fraudulent information through any form on the website",
            "Upload or transmit viruses, malware, or any other malicious code",
            "Interfere with the proper functioning of the website",
            "Circumvent any security or rate-limiting measures implemented on the platform",
            "Use the website for any commercial solicitation without prior written consent",
          ],
        },
        {
          heading: "Accuracy of Information",
          body: "We make every effort to ensure the information on SwaadYatra is accurate and up to date. However, we cannot guarantee the completeness, accuracy, or timeliness of any information on the platform.",
          items: [
            "Food spot details including prices, timings, menus, and locations may change without notice",
            "User-submitted content reflects the views of the submitter and not SwaadYatra",
            "We strongly recommend verifying all details directly with the vendor before visiting",
          ],
        },
        {
          heading: "Forms and User-Submitted Content",
          body: "SwaadYatra provides three forms through which users may submit information: a contact form, a story submission form, and a vendor listing form. By submitting content through any of these forms, you agree that:",
          items: [
            "You own or have the right to submit the content and it does not infringe any third-party rights",
            "Your submission is truthful, accurate, and not misleading",
            "You are not submitting content that is defamatory, obscene, offensive, hateful, or otherwise unlawful under Indian law",
            "You grant SwaadYatra a non-exclusive, royalty-free licence to use, display, and distribute your submitted content on the platform",
          ],
          subsections: [
            {
              heading: "Story Submissions",
              body: "Stories submitted through our Happy Stories page may be published publicly on the website. By submitting a story, you consent to it being displayed. We may lightly edit submissions for clarity or grammar without altering the meaning. We reserve the right to decline or remove any story at our discretion.",
            },
            {
              heading: "Vendor Listings",
              body: "Vendor listing submissions are reviewed by our team before publication. Submission does not guarantee listing. We reserve the right to decline any listing that does not meet our standards or that we believe may be inaccurate.",
            },
            {
              heading: "Contact Form",
              body: "Messages submitted through our contact form are used solely to respond to your inquiry. We do not publish or share contact form submissions.",
            },
          ],
        },
        {
          heading: "Images and Third-Party Content",
          body: "Many images on SwaadYatra are sourced from Google Reviews or uploaded by shop owners. We do not claim ownership of these images.",
          items: [
            "All third-party images remain the property of their respective owners",
            "If you are the rightful owner of any image and wish it to be removed or credited, contact us at satwikjain104@gmail.com or swaadyatraa@gmail.com",
            "We will remove or credit disputed content within 48 hours of receiving a valid request",
            "Third-party trademarks and brand names displayed on the platform belong to their respective owners and are used for identification purposes only",
          ],
        },
        {
          heading: "Intellectual Property",
          body: "Original content on SwaadYatra — including our written descriptions, editorial content, logo, and brand identity — is the property of SwaadYatra and is protected under applicable Indian intellectual property laws.",
          items: [
            "You may not reproduce, copy, sell, or exploit any original content from the website without express written permission",
            "The SwaadYatra name and logo may not be used without prior written consent",
            "If you believe any content on our platform infringes your intellectual property rights, contact us at satwikjain104@gmail.com or swaadyatraa@gmail.com",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: "To the fullest extent permitted by applicable Indian law, SwaadYatra, its owners, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:",
          items: [
            "Your use of or inability to use the website",
            "Any reliance placed on information provided on the website",
            "Any food-related illness, injury, or dissatisfaction arising from visiting a listed vendor",
            "Any errors, omissions, or inaccuracies in the content",
            "Any third-party conduct or content linked to or from our website",
          ],
        },
        {
          heading: "Indemnification",
          body: "You agree to indemnify and hold harmless SwaadYatra and its owners from and against any claims, liabilities, damages, and expenses — including reasonable legal fees — arising out of your use of the website, your violation of these Terms, or your infringement of any third-party rights.",
        },
        {
          heading: "External Links",
          body: "Our website may contain links to third-party websites including Google Maps, social media platforms, and vendor pages. These links are provided for your convenience only. SwaadYatra does not endorse or take responsibility for the content of any linked third-party website. Visiting linked websites is at your own risk.",
        },
        {
          heading: "Changes to These Terms",
          body: "We reserve the right to update or revise these Terms at any time. The updated Terms will be posted on this page with a revised 'Last Updated' date. Your continued use of the website after changes are posted constitutes your acceptance of the new Terms.",
        },
        {
          heading: "Governing Law and Jurisdiction",
          body: "These Terms shall be governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and the Consumer Protection Act, 2019 where applicable. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Greater Noida, Uttar Pradesh, India.",
        },
        {
          heading: "Contact Us",
          body: "If you have any questions about these Terms of Service, please contact us at: Email: satwikjain104@gmail.com or swaadyatraa@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, Uttar Pradesh, India.",
        },
      ]}
    />
  );
}
