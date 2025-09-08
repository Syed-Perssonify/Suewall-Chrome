import { Footer } from "@/commen/element/layout/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="w-full py-20">
        <div className="zlk-container">
          <h1 className="text-4xl font-plantin text-dark-green mb-8">
            Privacy Policy
          </h1>
          <div className="prose max-w-none text-gray font-galano space-y-6">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p>
                <strong>Last Updated: September 8, 2025</strong>
              </p>{" "}
              <p>
                <strong>Effective Date: September 15, 2025</strong>
              </p>{" "}
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Introduction
              </h2>
              <p>
                Levi & Korsinsky, LLP ("L&K," "we," or "us") is committed to
                protecting your privacy. This Privacy Policy describes how we
                collect, use, and share information when you install or use our
                Chrome Extension (the "Extension") and related services. This
                Privacy Policy is effective as of the date listed above and
                applies to all users of the Extension from that date forward.
              </p>
              <p>
                By using the Extension, you agree to the collection and use of
                information in accordance with this policy. If you do not agree,
                please do not use the Extension or provide any personal
                information.
              </p>
              <p>
                Under the rules of certain jurisdictions, this Extension may
                constitute attorney advertising. We encourage you to read this
                policy carefully and contact us if you have any questions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-2">
                1. Information You Provide
              </h3>
              <p>
                When you sign up for an account through the Extension, we
                collect only the personal information necessary to provide our
                services, including your name, email address, and phone number.
                This information is collected at the time of registration and is
                used to create and manage your user account. We do not require
                any sensitive personal information (such as financial account
                numbers or government IDs) for sign-up. If you request a demo or
                contact us for support, you may provide additional contact
                information which we will collect and use solely to fulfill
                those requests.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                2. Information Collected Automatically
              </h3>
              <p>
                The Extension is designed to detect ticker symbols on certain
                finance and trading websites (e.g., Yahoo Finance, Nasdaq,
                MarketWatch, Morningstar, Seeking Alpha, TipRanks, etc.) in
                order to check those symbols against our Active Case Database in
                real-time. In doing so, the Extension may automatically scan the
                page content of supported websites to identify stock ticker
                symbols or company names. This process occurs on your device
                while you browse. We do not collect your browsing history or any
                page content outside of what is necessary to detect relevant
                ticker symbols and related information for our services. The
                Extension does not keylog or capture any personal messages or
                unrelated information from your browsing. It focuses only on
                supported financial sites and looks for publicly available
                ticker information.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                3. Cookies and Local Storage
              </h3>
              <p>
                The Extension itself does not use tracking cookies for
                advertising or analytics purposes. However, it may use local
                storage or cookies only as needed to save your preferences (for
                example, to remember if you have logged in, or to store settings
                like sites you disabled scanning on). Any such local storage is
                kept on your device and is not accessed by L&K unless necessary
                for providing the service (for instance, retrieving your login
                token to authenticate requests). Our website (if you access our
                firm's site through the Extension) may use standard session
                cookies as part of its operation, but those are covered under
                our main website Privacy Notice.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                4. Device and Usage Data
              </h3>
              <p>
                We may receive basic technical information when you use the
                Extension, such as your browser type/version and operating
                system, Extension version, and timestamps of when the Extension
                checks our database. This information helps us ensure
                compatibility and may be logged for security and debugging
                purposes. We do not collect precise location data or any device
                identifiers unrelated to the Extension's functioning.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                5. Children's Privacy
              </h3>
              <p>
                Our Extension and services are not intended for individuals
                under 18. We do not knowingly collect personal information from
                children under 18. If you are under 18, please do not use the
                Extension or provide any personal data. If we learn that we have
                inadvertently collected information from a child under 18, we
                will take steps to delete such information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                How We Use Your Information
              </h2>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                1. To Provide and Improve the Service
              </h3>
              <p>
                We use the information you provide (name, email, phone) to
                create your account and authenticate you when you log in. This
                allows you to securely access features like real-time case
                alerts and claims management. We use detected ticker symbol
                information to query our Active Case Database and instantly
                inform you if there are active securities litigation cases
                involving that company. In essence, the Extension uses the page
                content only to provide you with relevant case information and
                alerts as you browse. We may also use your email or phone to
                send you notifications or alerts that you opt in to – for
                example, notifying you of new cases, settlement deadlines, or
                updates relevant to companies you follow. These communications
                are part of the Extension's core functionality (providing
                real-time alerts for legal cases).
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                2. To Communicate with You
              </h3>
              <p>
                If you sign up or request a demo, we may use your contact
                information to send onboarding information, respond to
                inquiries, provide customer support, or send important
                announcements. For instance, we might email you about updates to
                the Extension, changes to terms, security alerts, or
                improvements. We will not send you marketing emails unrelated to
                the Extension's services unless you separately consent to such
                communications.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                3. To Maintain Security and Prevent Fraud
              </h3>
              <p>
                We may use usage data and other information to monitor for
                suspicious activity and protect against unauthorized access,
                fraud, malware, or other security risks. For example, if we
                detect unusual login activity or misuse of the Extension, we may
                use relevant data to investigate or mitigate the issue. We
                conduct regular security audits of our systems to ensure ongoing
                protection of your data.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                4. To Comply with Legal Obligations
              </h3>
              <p>
                In certain cases, we may need to use or disclose your
                information to comply with applicable laws, regulations, legal
                processes, or government requests. For example, if required by a
                court order or subpoena, or to enforce our Terms of Service, or
                to protect the rights, property, or safety of L&K, our users, or
                others.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                5. For Improvement and Analytics
              </h3>
              <p>
                Internally, we may analyze aggregated, anonymized usage patterns
                (such as how often users check certain tickers or which features
                are used most) to improve the Extension's functionality and user
                experience. These analytics will not identify you personally –
                we only look at trends to make our product better. We do not use
                any third-party analytics services that would collect your data;
                any analysis is done by us using internal tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                How We Share Your Information
              </h2>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                1. No Sale of Personal Data
              </h3>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties for their marketing or any other purposes. Your
                name, email, and phone (and any other personal details) will be
                used solely by L&K and trusted service providers as described
                below, and always in line with this policy.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                2. Service Providers
              </h3>
              <p>
                We may share limited information with service providers who help
                us operate the Extension and deliver our services, under strict
                confidentiality and security obligations. For example:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Active Case Database & Backend:</strong> Our servers
                  will receive the ticker symbols or company identifiers that
                  the Extension detects, in order to check them against our case
                  database and respond with relevant case information. These
                  server requests include necessary authentication (to verify
                  your account) and the query (the ticker or company name). Our
                  backend logs may record these queries for auditing and
                  improving our database accuracy, but these logs are tied to
                  your user ID in a secure manner and are not shared outside
                  L&K.
                </li>
                <li>
                  <strong>Text Extraction and AI Processing:</strong> In order
                  to accurately detect ticker symbols and relevant context on
                  web pages, our Extension utilizes an automated text processing
                  component. Specifically, it may leverage an AI-powered text
                  extraction tool (such as OpenAI's GPT or a similar model) to
                  analyze page content and identify ticker symbols within that
                  text. This process is used only to improve detection accuracy
                  on supported sites. Any data sent to the AI service is limited
                  to relevant page text (we do not send your personal
                  information, account data, or unrelated browsing content). The
                  AI service is used as a processing tool on our behalf and is
                  not allowed to use your data for any purpose other than
                  providing the text analysis. We have configured it to not
                  retain the data after processing. No third-party besides this
                  text-processing service receives your page content data, and
                  we ensure that such service (e.g., OpenAI) abides by
                  confidentiality and data protection requirements when handling
                  the data. Other than this, we do not use any third-party
                  trackers or analytics scripts in the Extension.
                </li>
                <li>
                  <strong>Email/SMS Service:</strong> If we send notification
                  emails or text messages, we may use a secure email/SMS
                  delivery service (for example, an email service provider or
                  SMS gateway) to send those communications. They would receive
                  your contact info and message content solely for the purpose
                  of sending the notifications you signed up for, and they are
                  not permitted to use it for anything else.
                </li>
              </ul>
              <p className="mt-3">
                All service providers acting on our behalf are bound by
                contractual agreements to protect your information and to only
                use it for the specific services they provide to us.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                3. Within Levi & Korsinsky LLP
              </h3>
              <p>
                Your information may be shared within our law firm (for example,
                with attorneys or staff) who need it to perform their duties. If
                you choose to "Join a class action" or indicate interest in a
                securities litigation case through the Extension, the
                information you provide (including any details about your
                investments or losses that you submit) may be shared with our
                legal team for the purpose of evaluating or including you in
                that case. Our attorneys and legal staff will treat such
                information as confidential client communications, subject to
                professional confidentiality and privilege rules, once you
                formally engage with us. Using the Extension alone does not
                automatically make you a client of L&K (see Terms of Service),
                but if you do pursue a claim or class action with us, your
                information will be used to represent you and will be protected
                accordingly.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                4. Legal Requirements
              </h3>
              <p>
                We may disclose your information if required to do so by law or
                in response to valid legal process (such as a subpoena,
                regulation, binding order of a court, or governmental request).
                We may also disclose information if we believe in good faith
                that such disclosure is necessary to (a) investigate, prevent,
                or take action regarding suspected or actual illegal activities
                or to assist law enforcement; (b) enforce our agreements and
                policies (including our Terms of Service); (c) protect the
                security or integrity of our services; or (d) exercise or
                protect the rights, property, or safety of L&K, our employees,
                clients, or others.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                5. Business Transfers
              </h3>
              <p>
                In the unlikely event that L&K undergoes a business transaction
                such as a merger, acquisition by another company, or sale of all
                or a portion of our assets, user information (including personal
                data collected via the Extension) may be among the assets
                transferred. We will ensure that any such transfer is subject to
                appropriate privacy and security safeguards, and we will provide
                notice on our website or via email if your personal data becomes
                subject to a different privacy policy as a result of the
                business transition.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                6. With Your Consent
              </h3>
              <p>
                Aside from the cases above, we will only share your personal
                information with third parties when we have your explicit
                consent to do so. For example, if in the future we propose to
                share data for a new purpose, we would first get your
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Data Security
              </h2>
              <p>
                We take data security seriously and employ industry-standard
                security measures to protect your information. L&K uses
                enterprise-grade encryption to safeguard data transmissions
                between the Extension and our servers (HTTPS/TLS encryption).
                This means any personal information (like your login credentials
                or the ticker queries) is encrypted in transit to prevent
                eavesdropping. On our servers, personal data is stored in secure
                environments with strong access controls, and we utilize
                encryption at rest for sensitive data where appropriate. We also
                restrict access to personal data to authorized personnel who
                need it to operate or improve our services, and those
                individuals are bound by confidentiality obligations.
              </p>
              <p className="mt-3">
                Additionally, we do not expose sensitive API keys or secrets on
                the client side. The Extension is designed in a
                privacy-conscious way: it performs real-time checks without
                revealing confidential logic or data to your browser beyond
                what's necessary. We also regularly update and patch our
                software to address security vulnerabilities. However, please
                note that no method of transmission over the Internet or
                electronic storage is 100% secure, so while we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee absolute security of data.
              </p>
              <p className="mt-3">
                If you have reason to believe that your interaction with us is
                no longer secure (for example, if you suspect a vulnerability or
                that your account has been compromised), please contact us
                immediately using the contact information at the end of this
                policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Data Breach Notification
              </h2>
              <p>
                In the unlikely event of a data security incident that may
                affect your personal information, we will notify affected users
                via email within 72 hours of our discovery of the breach. We
                will provide information about what happened, what information
                was involved, what we are doing to address the situation, and
                steps you can take to protect yourself. We will also notify
                relevant regulatory authorities as required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Data Retention
              </h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. For
                example, as long as you maintain an active account with the
                Extension, we will keep your account information (name, email,
                phone) so that you can continue to log in and use the service.
                If you cancel your account or request deletion, we will delete
                or anonymize your personal information within 30 days, except
                for information we are required to keep for legal or compliance
                purposes.
              </p>
              <p className="mt-3">
                Ticker detection data (e.g. what securities you checked and
                when) may be retained in logs for a short period for
                troubleshooting and service improvement, but if associated with
                your account, it is treated as personal data and protected
                accordingly. We generally aggregate or delete browsing
                interaction logs after they fulfill their purpose. If you have
                joined a class action or legal claim with us, certain
                information may be retained in our legal case files in
                accordance with legal record-keeping obligations (for instance,
                to comply with court rules or legal hold requirements), but such
                data will continue to be protected under applicable
                confidentiality rules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Your Choices and Rights
              </h2>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                1. Account Information
              </h3>
              <p>
                You can review and update the personal information you provided
                us (such as your name, email, phone) by accessing your account
                settings (if available) or by contacting us. It is important
                that the information we hold is accurate and up-to-date; please
                let us know if any of your details change.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                2. Opt-Out of Communications
              </h3>
              <p>
                If you have subscribed to any email alerts or notifications, you
                can opt out by using the "unsubscribe" link in those emails or
                by adjusting your notification settings in the Extension (if the
                feature is available). Note that even if you opt out of
                marketing or optional communications, we may still send you
                critical transactional or service messages (e.g., important
                updates about the Extension, changes to terms, security alerts).
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                3. Limiting Extension Access
              </h3>
              <p>
                The Extension provides you with control over its scanning
                functionality. You can disable or pause the Extension's
                detection features on specific websites or altogether at any
                time. For example, if you do not want the Extension to scan a
                particular supported site, you can use the Chrome Extension
                settings to prevent it from running on that site (or simply turn
                off the Extension temporarily). You can also log out of the
                Extension, which will stop any active data syncing until you log
                in again. These options allow you to choose when and where the
                Extension operates, giving you control over your data exposure.
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                4. Data Access and Deletion
              </h3>
              <p>
                Subject to applicable law, you may have the right to request
                access to the personal information we hold about you, and to
                request deletion of that information. This includes the right of
                California residents under the California Consumer Privacy Act
                (CCPA) to request information about what personal data we
                collect and to request deletion of personal data (with certain
                exceptions). We honor valid requests to exercise such rights.
              </p>
              <p className="mt-3" >
                To make a request, please contact us using the information
                provided below. We will respond to data access requests within
                10 business days and fulfill deletion requests within 30 days.
                We may need to verify your identity (for example, by confirming
                control of your email account) before fulfilling certain
                requests. Please note that if you request deletion of your data,
                this may result in closing your account and inability to use the
                Extension, and we may retain some information as required by law
                or for legitimate business purposes (as described under Data
                Retention).
              </p>

              <h3 className="text-xl font-plantin text-dark-green mb-3 mt-6">
                5. Global Users – Geographic Scope
              </h3>
              <p>
                Our Extension and services are intended for users in the United
                States. We do not actively offer the Extension to individuals
                outside the U.S., and our systems are presently designed to
                service U.S. securities markets and laws. If you are located
                outside the United States, be aware that by using the Extension,
                your information will be transferred to and processed in the
                United States (where our servers and databases are located). The
                data protection laws of the U.S. may differ from those in your
                country. We do not knowingly collect personal data from EU
                residents (and the Extension is not marketed in the EU), so the
                rights provided under the EU's GDPR may not be directly
                applicable. However, if you are an international user who
                somehow uses our Extension, we will still take reasonable
                measures to protect your privacy, and you may contact us with
                any privacy-related concerns. By using the Extension or
                providing us with information, you consent to the transfer,
                processing, and storage of your information in the U.S. as set
                forth in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make
                material changes, we will notify you by updating the "Last
                Updated" date at the top of this policy and, if the changes are
                significant, by providing a prominent notice (such as via the
                Extension interface or an email notification). We encourage you
                to review this Privacy Policy periodically to stay informed
                about how we are protecting your information. Your continued use
                of the Extension after any modifications to this policy will
                signify your acceptance of the changes. If you do not agree with
                changes to the Privacy Policy, you should discontinue use of the
                Extension and may request deletion of your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-plantin text-dark-green mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>
                  <strong>Levi & Korsinsky, LLP</strong>
                </p>
                <p>Attn: Privacy Team – Chrome Extension</p>
                <p>55 Broadway, 10th Floor</p>
                <p>New York, NY 10004</p>
                <p>Email: privacy@levikorsinsky.com</p>
                <p>Phone: (212) 363-7500</p>
              </div>
              <p className="mt-4">
                For general inquiries: info@levikorsinsky.com
              </p>
              <p className="mt-4">
                We will do our best to address your inquiry promptly and
                thoroughly. Your privacy is important to us, and we welcome your
                feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
