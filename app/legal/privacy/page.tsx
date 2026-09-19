import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";

export const metadata: Metadata = {
  "title": "Privacy Policy",
  "description": "How Talery handles account details, shared trips, expenses, uploads, AI requests, and technical information, and how to contact us about your data.",
  "alternates": {
    "canonical": "/legal/privacy/"
  }
};

// See APPLE_READINESS_REVIEW.md for facts requiring owner confirmation before publication.
const sections: LegalSection[] = [
  {
    "id": "scope",
    "title": "What this policy covers",
    "paragraphs": [
      "Talery is a social travel planning service for discovering places, building itineraries, collaborating on trips, and recording shared expenses. This policy covers personal information handled through the Talery website and app, including optional AI planning and place-import features. Talery is operated by Talery Private Limited. References to Talery, we, and us in this policy mean Talery Private Limited.",
      "The information involved depends on the features you use. Browsing the marketing website does not create an app account. This notice explains data practices; reading it or using the website is not consent to every kind of processing. Device permissions and consent required for a particular feature are separate choices."
    ]
  },
  {
    "id": "information",
    "title": "Information you provide and create",
    "paragraphs": [
      "Account and profile: when you sign in with Google, Talery receives information used to identify your account, including your name, email address, and profile photograph. We keep an account identifier and authentication records. You can also upload a profile picture. Talery does not receive your Google password.",
      "Travel plans: trip names, dates, destinations, saved places and collections, itinerary schedules, notes, links, preferences, membership roles, invitations, polls, and votes. Place coordinates describe places in your plans; they do not by themselves establish your current device location.",
      "Uploads: profile and trip photos, trip media, documents you select, receipt images, associated file information, and member tags you add. Files can contain information about you or other travelers. Only upload material you are entitled to share, and avoid unnecessary identification, financial, or health information.",
      "Shared expenses: budget names, currencies, amounts, expense descriptions and dates, payers, participants, splits, contribution and settlement records, notes, and receipts. These are records entered for group expense management; recording a payment does not itself process a bank or card transaction.",
      "Social and support information: follow relationships and requests, invitation recipient email addresses, and messages you send to Talery for support, early access, or privacy requests. We also receive information about you when another traveler invites you or includes you in a shared trip or expense."
    ]
  },
  {
    "id": "ai",
    "title": "AI planning and importing social links",
    "paragraphs": [
      "Talery uses OpenAI to generate and revise travel plans. Requests can include your messages, recent conversation history and summaries, trip name and dates, cities, saved places and their notes, planning preferences, and results returned by planning tools. Talery stores AI conversations and generated responses with the account and, where applicable, the trip.",
      "When you ask Talery to find a place from an Instagram link, the submitted URL is sent to Bright Data to retrieve the post. The post description and available location hints or coordinates are sent to OpenAI to identify the place. The resulting place query and coordinates can then be sent to Google Places. These are third-party services even when the interaction happens inside Talery.",
      "Do not include passwords, identity documents, payment details, or sensitive information about yourself or other people in AI messages, trip notes used for AI planning, or imported links. Dietary or accessibility preferences may reveal sensitive information, so share only what is necessary. You can plan manually without submitting an AI request or importing a social link.",
      "AI processing is used to respond to your request. This notice does not grant permission to use your personal content for unrelated model training. Provider processing and retention also depend on the applicable service agreements and configuration; contact us if you need details before submitting personal information."
    ]
  },
  {
    "id": "technical-data",
    "title": "Technical information and storage",
    "paragraphs": [
      "Network requests expose technical information such as an IP address, request time, and browser or device information to servers delivering the service. Operational logs may record requests and errors for troubleshooting and security.",
      "If you allow notifications, the app obtains a device or push token to address notifications to your installation. Android notifications use Firebase Cloud Messaging; the iOS app uses Expo token registration. Notification content can include trip invitations, activity, or expense information and may appear on your lock screen depending on your device settings.",
      "The marketing website stores your selected appearance in browser local storage under talery-theme. You can remove it through browser site-data controls. The app stores authentication tokens using device secure storage and keeps local preferences and cached application data. Clearing local storage or uninstalling the app does not delete information held by Talery or its providers.",
      "The marketing website does not include advertising pixels or an analytics cookie integration in its current implementation. We will update this notice and provide any legally required choices before introducing additional tracking."
    ]
  },
  {
    "id": "purposes",
    "title": "Why we use information",
    "paragraphs": [
      "We use account and travel information to authenticate you, save and display your plans, manage shared-trip access, record expenses, deliver invitations and notifications, and provide features you request. We use support messages to respond to you and technical records to investigate faults, prevent misuse, and protect the service.",
      "Where European Economic Area or UK data protection law applies, processing necessary to provide requested account and planning services is based on performing our contract with you. Responding to general enquiries and maintaining a reliable, secure service are legitimate interests, subject to your rights. Processing required by law relies on the relevant legal obligation. Where consent is required, including for applicable optional sharing or marketing, it must be obtained separately. You may withdraw consent without affecting the lawfulness of earlier processing.",
      "An early-access request is used to respond about access to Talery. It does not authorize unrelated promotional messages. You can ask us to stop early-access or marketing communications at any time. Service messages needed for an account or an active request are handled separately."
    ]
  },
  {
    "id": "visibility",
    "title": "What other people can see",
    "paragraphs": [
      "Trip members can access information made available to their role, which may include itineraries, uploads, polls, and shared expense records. Making a trip public or sharing an invitation or exported itinerary can make information available beyond your original group. Check recipients and contents before sharing.",
      "Profiles and follow features expose information to other users. In the current app implementation, a signed-in user viewing another user's profile overview can receive that user's name, email address, profile photo, and travel and follow counts. Do not assume your account email is private from other signed-in users.",
      "Other people may retain screenshots, downloaded files, exported plans, or copies of information already shared with them. Removing information from Talery cannot recall those independent copies. Contact us if someone shares your information without permission."
    ]
  },
  {
    "id": "providers",
    "title": "Service providers and other disclosures",
    "paragraphs": [
      "Google supports sign-in and place lookups. Mapbox provides maps and place search and receives requests such as search text and map or place coordinates, along with technical request information. Cloudflare R2 stores uploaded files. OpenAI and Bright Data process the feature-specific information described above. Resend delivers email invitations and receives recipient addresses and message contents. Firebase and Expo support notification features.",
      "Hosting, database, and support infrastructure also process information needed to operate Talery. Providers receive information according to the features involved; not every provider receives all account or trip data. External services you visit through links have their own privacy practices.",
      "Information may be disclosed when a valid legal requirement demands it, when reasonably necessary to investigate abuse or protect rights and safety, or as part of a business reorganization or transfer subject to applicable privacy obligations. We do not offer personal information for sale or use it for cross-service targeted advertising in the features described here."
    ]
  },
  {
    "id": "retention",
    "title": "Retention and deletion requests",
    "paragraphs": [
      "Account records, saved trips, uploaded files, and AI conversations are kept to support your continuing use of those features. Support correspondence is kept to handle the enquiry and related follow-up. Operational logs serve troubleshooting and security purposes. Retention depends on whether the record is still needed for its purpose, an unresolved issue, or a legal obligation; information should not be kept indefinitely merely because storage is available.",
      "To request access, correction, or deletion, email hr@talery.co, preferably from the email associated with your account, and describe your request. We may ask for proportionate information to verify account ownership. Do not send a password. Signing out, revoking Google access, or uninstalling Talery does not delete your Talery account.",
      "Deletion may require handling account records, shared-trip associations, uploaded files, AI history, notification tokens, and provider-held records separately. Limited records may need to be retained to meet a legal obligation or resolve a dispute. Backups and independent copies already shared with other people can have different lifecycles. We will explain applicable exceptions and the status of your request rather than treating account deactivation as deletion."
    ]
  },
  {
    "id": "choices",
    "title": "Your choices and privacy rights",
    "paragraphs": [
      "You can decline photo-library or notification permissions and later change them through device settings. Use the file picker to select what you share, review trip visibility and membership, and avoid optional AI requests if you do not want their contents sent to the AI provider. Some features need the relevant information to work.",
      "Depending on the law that applies to you, you may have rights to access, correct, delete, or receive a portable copy of personal information, restrict processing, object to processing based on legitimate interests, withdraw consent, and complain to a data protection authority. These rights are subject to applicable conditions and exceptions. Contact hr@talery.co to exercise them; we will respond within the period required by applicable law.",
      "Where applicable, you may use an authorized agent and exercise rights concerning sale, sharing, or targeted advertising without unlawful discrimination. We do not describe every regional right as universally applicable. If we cannot fulfill a request, we will explain the reason and any available review or complaint route."
    ]
  },
  {
    "id": "international-security",
    "title": "International processing and security",
    "paragraphs": [
      "Talery's providers operate internationally, so information may be processed outside the country where you live. Applicable transfer requirements depend on the locations and providers involved. Where required, transfers need a valid legal mechanism, such as an adequacy decision or appropriate contractual safeguards. Contact us for information about the safeguards applicable to your data.",
      "Access permissions, authentication, and controlled file access help protect information, but no online service or transmission is completely secure. Avoid sharing invitation links or account credentials with unintended recipients. Report suspected unauthorized access promptly. We do not claim a security certification or guarantee that all risks can be eliminated."
    ]
  },
  {
    "id": "children-changes",
    "title": "Children and policy updates",
    "paragraphs": [
      "Talery is not intended for children under 13. Users who are not legally able to agree to the service terms in their country need permission from a parent or guardian. A higher local minimum age or consent requirement still applies. Talery does not currently verify user ages. If you believe a child has provided information contrary to these requirements, contact us so we can investigate and address it.",
      "We will update this policy as features and data practices change and revise the date above. Material changes will be communicated through an appropriate service notice. Where a new use requires consent, publishing a revised policy alone will not replace that consent."
    ]
  }
];

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" subtitle="How information moves through Talery, who receives it, and your privacy choices." sections={sections} />;
}
