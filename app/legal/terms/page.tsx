import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";

export const metadata: Metadata = {
  "title": "Terms and Conditions",
  "description": "Terms for using Talery travel planning, shared itineraries, AI tools, uploaded content, and group expense records.",
  "alternates": {
    "canonical": "/legal/terms/"
  }
};

// See APPLE_READINESS_REVIEW.md for facts requiring owner confirmation before publication.
const sections: LegalSection[] = [
  {
    "id": "agreement",
    "title": "About Talery and these terms",
    "paragraphs": [
      "These Terms and Conditions govern your use of the Talery website and app. Talery provides tools to discover places, create and share itineraries, collaborate on trips, import selected place links, use AI planning, and record group expenses. Talery is operated by Talery Private Limited. References to Talery, we, and us in this agreement mean Talery Private Limited.",
      "By agreeing to these terms when accessing the service, you accept the responsibilities described here. If you use Talery for an organization, you must be authorized to act for it. Our Privacy Policy separately explains how personal information is handled; accepting these terms does not waive your privacy rights or supply consent for processing that requires a separate choice.",
      "Feature availability can vary by app version and stage of release. Product previews and early-access requests do not guarantee an invitation, a launch date, or delivery of every illustrated feature. Joining an early-access list does not create an app account or purchase a service."
    ]
  },
  {
    "id": "accounts",
    "title": "Eligibility and your account",
    "paragraphs": [
      "You must be at least 13 to use Talery and meet any higher minimum age required where you live. If you are not legally able to enter this agreement yourself, a parent or guardian must authorize your use. Talery does not currently verify ages; this does not remove these eligibility requirements. You must not misrepresent your identity or use another person's account without permission.",
      "Keep the sign-in account and devices used to access Talery secure, and contact us promptly if you suspect unauthorized access. You are responsible for activity you authorize and for giving accurate information. You are not automatically responsible for every unauthorized action regardless of its cause.",
      "Google sign-in is subject to Google's own terms in addition to these terms. Disconnecting a sign-in provider, signing out, or uninstalling the app does not by itself delete your Talery account or shared trip records."
    ]
  },
  {
    "id": "planning",
    "title": "Travel information and AI assistance",
    "paragraphs": [
      "Talery is a planning tool. An itinerary, place suggestion, opening time, route, cost estimate, or imported social-media recommendation is not a confirmed reservation or a promise that a provider will supply an experience. Arrange and verify bookings directly with the relevant travel provider.",
      "AI responses can be inaccurate, outdated, incomplete, or unsuitable for your circumstances. Review generated schedules and changes before relying on them. Independently check prices, availability, accessibility, local conditions, entry requirements, and transport details. An AI suggestion is not professional medical, legal, immigration, or financial advice.",
      "Talery is not an emergency response service. Contact local emergency services directly when needed. Do not rely on the app as the sole source of safety information or for urgent assistance.",
      "Only submit information you are entitled to use with AI or link-import features. Do not include other people's confidential information or unnecessary sensitive information. Our Privacy Policy describes information sent to OpenAI and other providers for these features."
    ]
  },
  {
    "id": "collaboration",
    "title": "Shared trips, invitations, and expenses",
    "paragraphs": [
      "Trip access depends on membership and assigned roles. Invite only people you intend to include and have a legitimate reason to contact. Treat invitation links and exported plans as shareable information: a recipient may forward or retain them. Review visibility settings before making a trip public.",
      "Members may add or change shared content according to their permissions. Agree with your group about schedules, edits, uploaded documents, and financial arrangements. You are responsible for the accuracy of expenses, contributions, and settlements you enter.",
      "Budget, wallet, contribution, and payment entries in Talery are bookkeeping records. Entering a deposit or marking an expense settled does not itself move money, hold funds in escrow, pay a provider, or prove that someone received a payment. Arrange real payments separately and confirm them with the recipient. Talery does not guarantee another traveler's repayment."
    ]
  },
  {
    "id": "content",
    "title": "Your content and permissions",
    "paragraphs": [
      "You retain your rights in the original photos, documents, notes, and other content you provide. You grant Talery a non-exclusive, worldwide, royalty-free permission to store, copy, process, format, and display that content as needed to provide the features you use, including sharing with your chosen recipients and processing requested AI features through service providers.",
      "This permission does not transfer ownership or give Talery a general right to use private trip photos in advertising. You must have the rights and permissions needed to upload and share material, including information about other travelers. A publicly accessible link does not automatically give you the right to republish its contents.",
      "The permission lasts only as needed to operate the requested service and handle applicable retention obligations. Removing content or requesting deletion does not recall copies independently downloaded or retained by others. Shared records and deletion exceptions are described in the Privacy Policy.",
      "Talery's name, branding, interface, and software remain protected by the rights of their owners and licensors. You may use the service for its intended purposes, but may not misrepresent affiliation, resell unauthorized access, or copy protected material beyond what applicable law or an express license permits."
    ]
  },
  {
    "id": "conduct",
    "title": "Acceptable use and content concerns",
    "paragraphs": [
      "Do not use Talery for fraud, unlawful conduct, harassment, threats, exploitation, hate-based abuse, impersonation, or sharing another person's private information without authority. Do not upload illegal sexual content, child sexual abuse material, malware, or content that infringes another person's rights.",
      "Do not send unsolicited invitations, bypass access controls, obtain another user's records without authorization, disrupt the service, or use automated requests in a way that harms availability or evades limits. These restrictions do not remove rights that applicable law expressly gives you.",
      "Report harmful content, abuse, or suspected infringement to hr@talery.co. Include enough information to identify the affected content or trip and explain the concern; avoid forwarding unnecessary sensitive material. We may restrict access to reported material or accounts while investigating and take proportionate action when a violation is established."
    ]
  },
  {
    "id": "third-parties",
    "title": "External services and purchases",
    "paragraphs": [
      "Talery uses external services for sign-in, maps, place search, AI, media storage, and invitations. External links and imported place information do not mean Talery endorses every provider or guarantees its material. External services may be governed by separate terms and privacy notices.",
      "A booking or other purchase you make directly with an airline, hotel, activity provider, or another traveler is governed by your agreement with that party. Their prices, cancellation rules, and refund obligations apply. Talery's planning tools do not make Talery a party to that purchase.",
      "A marketing description alone does not authorize a charge. If Talery offers paid features, the applicable price, billing period, renewal terms, and cancellation information must be presented before purchase. Purchases through an app store are also subject to the store's applicable purchase terms and your mandatory consumer rights."
    ]
  },
  {
    "id": "ending-use",
    "title": "Ending use and restrictions",
    "paragraphs": [
      "You may stop using Talery at any time. For an account or personal-data deletion request, email hr@talery.co from your account email where possible. We may verify ownership to protect your account. The Privacy Policy explains deletion, shared information, and retention exceptions.",
      "We may limit or suspend access where reasonably necessary to address a material breach of these terms, a security or safety risk, or a legal requirement. Where reasonably possible and lawful, we will explain the action and provide a way to contact us to contest an error. Urgent risks may require immediate action.",
      "Ending access does not cancel payments arranged independently with other travelers or providers. Terms concerning accrued responsibilities, intellectual property, dispute handling, and legally necessary retention continue to apply to the extent relevant after use ends."
    ]
  },
  {
    "id": "responsibility",
    "title": "Availability and responsibility",
    "paragraphs": [
      "We aim to provide a useful planning service, but uninterrupted access, error-free information, and preservation of every uploaded file cannot be guaranteed. Keep separate copies of documents you need while traveling. Maintenance, connectivity problems, and external-provider failures may affect access.",
      "To the extent permitted by applicable law, Talery does not give additional warranties that recommendations will meet every need or that external services will perform as described. Nothing in these terms excludes mandatory consumer guarantees or liability that cannot legally be excluded, including for fraud, deliberate wrongdoing, or death or personal injury caused by negligence where applicable.",
      "Responsibility for loss will be determined under applicable law, taking account of its cause and the parties' obligations. These terms do not impose a blanket waiver of consumer remedies or require you to give up rights that the law protects."
    ]
  },
  {
    "id": "changes-disputes",
    "title": "Changes, disputes, and applicable rights",
    "paragraphs": [
      "We may update these terms when the service or relevant legal requirements change. We will revise the date on this page and provide appropriate notice of material changes. Where agreement is required, we will request it. Changes do not retroactively remove rights relating to earlier events.",
      "Please contact hr@talery.co first so we can try to resolve a concern. You retain the right to bring a claim before a court or authority with jurisdiction under applicable law, including any protected right to bring a consumer claim where you live. These terms do not impose mandatory arbitration or a class-action waiver.",
      "If a provision is unenforceable, the remainder applies to the extent permitted by law. A failure to enforce a term immediately does not waive the right to enforce it later. Any feature-specific agreement must be presented to you before it governs that feature."
    ]
  }
];

export default function TermsPage() {
  return <LegalDocument title="Terms and Conditions" subtitle="Your responsibilities and rights when planning, sharing, and collaborating with Talery." sections={sections} />;
}
