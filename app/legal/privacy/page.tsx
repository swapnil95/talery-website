import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";

export const metadata: Metadata = {
  "title": "Privacy Policy",
  "description": "How Talery Private Limited handles website visits, early-access enquiries, contact information, and privacy requests.",
  "alternates": {
    "canonical": "/legal/privacy/"
  }
};

const sections: LegalSection[] = [
  {
    "id": "scope",
    "title": "Who we are and what this policy covers",
    "paragraphs": [
      "Talery Private Limited operates talery.co and is responsible for the personal information described in this policy. Our registered office, Corporate Identification Number (CIN), and contact details appear below. Talery is a travel planning product in development; the app is not yet available to the public or beta testers.",
      "This policy covers visits to our website and company, support, and early-access enquiries. The product previews describe planned functionality. They do not provide account registration, trip planning, uploads, payments, or AI processing on this website. Before opening the app to users, we will publish privacy information covering its actual features, providers, and data practices.",
      "Reading this policy is not consent to unrelated processing. You can browse the website without emailing us or requesting early access."
    ]
  },
  {
    "id": "information",
    "title": "Information we receive",
    "paragraphs": [
      "When you email hr@talery.co, we receive your email address, the name shown by your email service, your message, any attachments you choose to send, and correspondence needed to respond. If you telephone us, we receive the contact information and enquiry details you choose to provide. Please avoid sending passwords, identity documents, payment-card details, or unnecessary sensitive information.",
      "Our early-access button opens your email application. Clicking it does not submit a registration or add you to a list; you must send the message yourself. We use the information in a message you send to handle your enquiry or request.",
      "To deliver and protect the website, our hosting provider, Cloudflare, processes network request information such as IP addresses, requested URLs, timestamps, and browser or device information. Operational records may be used to investigate errors, security incidents, and misuse."
    ]
  },
  {
    "id": "purposes",
    "title": "How and why we use information",
    "paragraphs": [
      "We use enquiry and contact information to answer you, discuss Talery, handle support or privacy requests, and respond about the early access you requested. We use technical information to deliver the website, troubleshoot problems, and protect its availability and security.",
      "We do not treat an enquiry as permission for unrelated promotional campaigns. You can ask us to stop early-access follow-ups by emailing hr@talery.co. Information needed to resolve an active request or meet a legal obligation may still be retained for that purpose.",
      "Where EEA or UK data protection law applies, responding to general enquiries and protecting the website are our legitimate interests, balanced against your rights. Steps you ask us to take towards a contract may rely on that contractual purpose. We rely on consent where required for optional communications, and on legal obligations where the law requires particular processing. You may withdraw consent without affecting processing lawfully carried out before withdrawal."
    ]
  },
  {
    "id": "storage",
    "title": "Cookies and local storage",
    "paragraphs": [
      "The website saves your light or dark appearance preference in browser local storage under talery-theme. This preference stays in your browser and can be removed using its site-data controls. Clearing it resets the saved appearance choice.",
      "The website code does not include advertising pixels or an analytics-cookie integration. Hosting and security services still process technical requests as described above. We will explain additional tracking and provide any required choices before introducing it."
    ]
  },
  {
    "id": "sharing",
    "title": "Who receives information",
    "paragraphs": [
      "Cloudflare delivers and protects the website. Our business email provider processes correspondence sent to and from our company inbox. Authorized company personnel, including our listed contact person, handle enquiries and privacy requests. Information is used for the functions described here rather than being made publicly visible.",
      "We do not sell enquiry information or share it for cross-service targeted advertising. We may disclose information when required by a valid legal obligation or where reasonably necessary to investigate misuse or protect rights and safety. Any transfer of information during a company reorganization remains subject to applicable privacy obligations.",
      "Website enquiries are not submitted to the planned app's AI, mapping, or social-link import providers. If you leave the website or use your own email application, the relevant third-party provider also handles information under its own privacy terms."
    ]
  },
  {
    "id": "retention",
    "title": "How long information is kept",
    "paragraphs": [
      "We retain enquiry correspondence while handling your request and any necessary follow-up. For early-access enquiries, this includes responding about availability until the request is fulfilled, withdrawn, or no longer relevant. We then delete information that is no longer needed, except for limited records required for a legal obligation, unresolved complaint, or dispute.",
      "Technical records are retained according to their operational or security purpose and the hosting provider's retention arrangements. Your theme preference remains in your browser until you clear it or replace it. Copies in provider backups may remain until the applicable backup cycle expires; we do not promise an immediate purge of every backup."
    ]
  },
  {
    "id": "rights",
    "title": "Access, correction, deletion, and complaints",
    "paragraphs": [
      "Contact Aditya Dhal at hr@talery.co to request access to, correction of, or deletion of personal information provided to Talery, or to raise a privacy concern. Describe the request and, where possible, write from the address used for your original enquiry. We may ask for proportionate information to verify that we are responding to the right person; do not send identity documents unless we specifically explain why they are needed.",
      "Depending on the applicable law, you may also have rights to data portability, restriction of processing, objection to processing based on legitimate interests, withdrawal of consent, and complaints to a competent data protection authority. We will respond within the applicable legal period and explain any reason we cannot fulfill a request. This policy does not restrict rights given to you by law.",
      "There is no public Talery app account to delete at this stage. Deleting an email from your own mailbox does not delete the copy sent to us; please contact us if you want that information removed."
    ]
  },
  {
    "id": "security-transfers",
    "title": "Security and international processing",
    "paragraphs": [
      "Talery Private Limited is registered in India. Our hosting and email services may process information in other countries. Where applicable law requires safeguards for international transfers, we must use an appropriate legal mechanism. You may contact us for details relevant to your information.",
      "We limit the use of correspondence to the purposes described here and take reasonable steps to protect it. No website, email service, or transmission is completely secure. Report suspected misuse of your information to our contact person. We do not claim a security certification or guarantee that every security risk can be eliminated."
    ]
  },
  {
    "id": "children-updates",
    "title": "Children and changes to this policy",
    "paragraphs": [
      "This is a company and product-information website, not a service directed at children. We do not ask visitors to provide a date of birth and do not verify ages. A parent or guardian who believes a child has sent us personal information can contact us to request review and deletion. The future app's eligibility and age-related safeguards will be addressed before it accepts users.",
      "We will update this policy when our website or data practices change and revise the date shown above. Material changes will be communicated in an appropriate website notice or directly where appropriate. We will obtain consent separately whenever a new use legally requires it."
    ]
  }
];

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" subtitle="Privacy information for the Talery website and prelaunch enquiries." sections={sections} />;
}
