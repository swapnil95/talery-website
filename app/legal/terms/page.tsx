import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";

export const metadata: Metadata = {
  "title": "Terms and Conditions",
  "description": "Terms for the Talery Private Limited website, product previews, and early-access enquiries.",
  "alternates": {
    "canonical": "/legal/terms/"
  }
};

const sections: LegalSection[] = [
  {
    "id": "scope",
    "title": "Company and scope",
    "paragraphs": [
      "This website is operated by Talery Private Limited, an Indian company with CIN U52290DL2026PTC466558. Our registered office and contact details appear below. These Terms and Conditions apply to use of talery.co and enquiries made through the contact details it provides.",
      "Talery is entirely prelaunch. The website introduces a travel planning app under development; no public or beta app access is currently offered. These website terms do not create an app account or govern a future app subscription. Terms for the released app will be provided before access is offered.",
      "By using the website, you agree to use it in accordance with these terms to the extent permitted by applicable law. If you contact us for an organization, you must be authorized to act on its behalf. Our Privacy Policy separately explains how website and enquiry information is handled; these terms do not supply consent for unrelated data processing."
    ]
  },
  {
    "id": "previews",
    "title": "Product previews and early-access enquiries",
    "paragraphs": [
      "Features, screens, itineraries, budgets, and activity figures shown on the website are product previews or illustrative examples. They are not live user activity, confirmed bookings, money held by Talery, or evidence that the app is available. Planned features may change before release.",
      "You can express interest in future access by emailing hr@talery.co. The email button opens your email application and does not send a message or register you automatically. An enquiry is free and does not guarantee an invitation, a position in a queue, a launch date, or a particular feature.",
      "We do not accept payments, reservations, deposits, or subscriptions through this website. No statement on it authorizes a charge. If paid services become available, their price and applicable purchase terms will be presented before purchase."
    ]
  },
  {
    "id": "use",
    "title": "Permitted use",
    "paragraphs": [
      "You may browse the website, share links to it, and contact us for legitimate company or product enquiries. Do not use the website or contact channels for fraud, impersonation, harassment, unlawful activity, spam, or infringement of another person's rights.",
      "Do not attempt to bypass security measures, obtain unauthorized access, introduce malicious code, or disrupt the website. These restrictions do not remove rights expressly provided by applicable law.",
      "You may stop using the website or withdraw an early-access enquiry at any time. We may take proportionate steps to restrict abusive traffic or communications, or act where required by law."
    ]
  },
  {
    "id": "content",
    "title": "Website materials and information you send",
    "paragraphs": [
      "The Talery name, website design, text, graphics, and other materials are owned by Talery Private Limited or used with permission from their owners. Except where law or an express license permits it, you may not reproduce or sell protected materials or imply an endorsement or affiliation that does not exist.",
      "You retain your rights in material you send us. Sending an enquiry gives us permission to receive, store, and review it as needed to answer you; it does not give us a general right to publish your private correspondence or use it in advertising. Personal information is handled under the Privacy Policy.",
      "Only send information you are entitled to share. Please do not include passwords, identity documents, confidential third-party information, or unnecessary financial or health information. Report suspected infringement or misuse to hr@talery.co."
    ]
  },
  {
    "id": "travel",
    "title": "Travel information and external services",
    "paragraphs": [
      "Any destination, itinerary, price, or travel information shown here is illustrative and may be incomplete or outdated. It is not a reservation, an offer from a travel provider, or professional advice. Verify real travel arrangements, entry requirements, prices, and safety conditions with appropriate sources before traveling.",
      "Talery does not provide emergency assistance through this website. Contact local emergency services directly when needed.",
      "External websites and your email or telephone service operate under their own terms and privacy practices. A link does not mean Talery controls or guarantees an external service."
    ]
  },
  {
    "id": "responsibility",
    "title": "Availability and responsibility",
    "paragraphs": [
      "We aim to keep the website useful and available, but access can be interrupted by maintenance, connectivity problems, or events outside our reasonable control. We may update or discontinue website content as development progresses.",
      "To the extent permitted by law, we do not give additional warranties that previews will meet a particular need or that access will always be uninterrupted or error-free. Nothing in these terms excludes liability that cannot lawfully be excluded or limits your mandatory consumer rights.",
      "Responsibility for any loss is determined under applicable law, taking account of its cause and the parties' obligations. These terms do not impose an arbitrary liability cap or require you to waive rights protected by law."
    ]
  },
  {
    "id": "disputes",
    "title": "Questions, disputes, and changes",
    "paragraphs": [
      "For questions or complaints about the website, contact Aditya Dhal at hr@talery.co or at the telephone number below. Please explain the issue so we can investigate and respond. You retain any right to approach a competent court or authority under applicable law, including protected consumer rights where you live.",
      "These terms do not require mandatory arbitration or a class-action waiver. If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law.",
      "We may revise these terms when the website or relevant requirements change. We will update the date above and provide appropriate notice of material changes. Changes do not retroactively remove rights arising from earlier events."
    ]
  }
];

export default function TermsPage() {
  return <LegalDocument title="Terms and Conditions" subtitle="Terms for our website, product previews, and prelaunch enquiries." sections={sections} />;
}
