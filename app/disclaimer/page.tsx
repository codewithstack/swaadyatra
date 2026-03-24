import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Disclaimer | SwaadYatra",
  description: "Read SwaadYatra's Disclaimer to understand the limitations of our food discovery platform and the nature of information provided.",
};

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      lastUpdated="June 2025"
      sections={[
        {
          body: "The information provided on SwaadYatra (https://www.swaadyatra.com) is for general informational and food discovery purposes only. By accessing and using this website, you acknowledge and agree to the terms of this Disclaimer. If you do not agree, please discontinue use of the website.",
        },
        {
          heading: "Accuracy of Information",
          body: "All content on SwaadYatra — including food spot descriptions, vendor details, city guides, dish information, pricing, timings, and location data — is provided on an 'as is' basis for informational purposes only.",
          items: [
            "We do not guarantee the accuracy, completeness, or timeliness of any information on the platform",
            "Vendor details including prices, menus, opening hours, and availability are subject to change at any time without notice",
            "We strongly recommend verifying all details directly with the vendor before visiting",
            "SwaadYatra is not responsible for any inconvenience, financial loss, or disappointment resulting from reliance on information published on this platform",
          ],
        },
        {
          heading: "No Endorsement",
          body: "The listing of any food vendor, street food stall, or eatery on SwaadYatra does not constitute an endorsement, recommendation, or guarantee of quality, hygiene, or service.",
          items: [
            "SwaadYatra does not inspect, audit, or certify any vendor listed on the platform",
            "Listings are based on publicly available information, user submissions, or editorial research",
            "Inclusion of a vendor does not imply any formal partnership or commercial relationship unless explicitly stated",
            "User stories published on the platform reflect the personal views of the submitter and not those of SwaadYatra",
          ],
        },
        {
          heading: "Food Safety and Health",
          body: "SwaadYatra is a discovery platform and does not assess or certify the food safety, hygiene standards, or health compliance of any vendor listed on the website.",
          items: [
            "Visitors consume food from listed vendors entirely at their own risk",
            "SwaadYatra is not liable for any food-related illness, allergic reaction, injury, or health issue arising from consuming food at any listed establishment",
            "Individuals with food allergies, dietary restrictions, or health conditions should verify ingredients directly with the vendor",
            "We do not provide medical or nutritional advice of any kind",
          ],
        },
        {
          heading: "Images and Visual Content",
          body: "Images displayed on SwaadYatra are used for illustrative purposes to help users identify food spots and dishes. We are transparent about the sources of these images:",
          items: [
            "Many images are sourced from Google Reviews — these are publicly visible photos uploaded by customers and visitors on Google Maps listings",
            "Some images are uploaded directly by shop owners or vendors when submitting their listing to our platform",
            "Some images may be captured by our own team during visits",
            "We do not claim ownership of any image that was not originally created by us",
            "All third-party images remain the property of their respective owners or the individuals who uploaded them",
            "Actual food presentation, portion sizes, and appearance at vendors may differ from images shown on the platform",
          ],
          subsections: [
            {
              heading: "Image Removal Requests",
              body: "If you are the rightful owner of any image displayed on our platform and wish it to be removed, credited, or attributed differently, please contact us at satwikjain104@gmail.com or swaadyatraa@gmail.com with details of the image and your ownership claim. We will act promptly — typically within 48 hours of receiving a valid request.",
            },
          ],
        },
        {
          heading: "Trademarks and Brand Names",
          body: "All trademarks, service marks, trade names, logos, and brand names of third parties mentioned or displayed on SwaadYatra belong to their respective owners. Their appearance on our platform does not imply any affiliation with or endorsement by SwaadYatra. The SwaadYatra name, logo, and brand identity are proprietary and may not be used without prior written permission.",
        },
        {
          heading: "User-Generated Content",
          body: "SwaadYatra may publish stories submitted by users through our Happy Stories form.",
          items: [
            "User-submitted stories reflect the personal opinions and experiences of the individual submitter",
            "SwaadYatra does not independently verify the accuracy of user-submitted stories",
            "Publication of user content does not constitute endorsement of the views expressed",
            "SwaadYatra reserves the right to remove any user-submitted content that is found to be false, defamatory, offensive, or in violation of our Terms of Service",
          ],
        },
        {
          heading: "External Links",
          body: "Our website may contain links to external websites including Google Maps, social media platforms, and vendor pages. These links are provided solely for the convenience of our users.",
          items: [
            "SwaadYatra does not control, endorse, or take responsibility for the content, accuracy, or availability of any linked external website",
            "Clicking on external links and visiting third-party websites is entirely at your own risk",
            "We are not responsible for any loss or damage that may arise from your use of external websites",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: "To the maximum extent permitted by applicable Indian law, SwaadYatra, its owners, team members, and affiliates expressly disclaim all liability for:",
          items: [
            "Any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website",
            "Any errors, omissions, or inaccuracies in the content published on the platform",
            "Any food-related harm, illness, or dissatisfaction arising from visiting a listed vendor",
            "Any technical issues, downtime, or interruptions to the website's availability",
          ],
        },
        {
          heading: "Changes to This Disclaimer",
          body: "SwaadYatra reserves the right to update or modify this Disclaimer at any time without prior notice. The 'Last Updated' date at the top of this page reflects the most recent revision. Your continued use of the website after any changes constitutes your acceptance of the updated Disclaimer.",
        },
        {
          heading: "Contact Us",
          body: "If you have any questions about this Disclaimer, wish to report a content concern, or wish to request removal of any image or content, please contact us at: Email: satwikjain104@gmail.com or swaadyatraa@gmail.com | Website: https://www.swaadyatra.com/contact | Address: Greater Noida, Uttar Pradesh, India. We aim to respond to all queries within 48 hours.",
        },
      ]}
    />
  );
}
