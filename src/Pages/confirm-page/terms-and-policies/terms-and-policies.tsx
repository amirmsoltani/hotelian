import React from 'react';
import {ScrollView, View} from "react-native";
import {Body, Header, Left, Right, Tab, Tabs} from "native-base";

import {AppText, BackNavigation} from "../../../Containers";
import {Style} from "../../../Styles";
import {translate} from "../../../Lib/Languages";
import {MUTED_LIGHT_XXX} from "../../../../native-base-theme/variables/config";

const TermsAndPolicies = () => {
  return (
    <>
      <Header hasTabs style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppText style={[Style.text__white, Style.text__bold, Style.f__18]}>Hotelian<AppText
          style={[Style.text__important, Style.text__bold, Style.f__18]}>.com</AppText></AppText></Body>
        <Right/>
      </Header>
      <Tabs>
        <Tab heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('terms-and-conditions')}</AppText>
          </View>)}>
          <TC/>
        </Tab>
        <Tab heading={(
          <View style={[Style.bg__primary]}>
            <AppText style={[Style.text__white]} firstLetter>{translate('privacy-policies')}</AppText>
          </View>)}>
          <PP/>
        </Tab>
      </Tabs>
    </>
  );
};

const TC = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: MUTED_LIGHT_XXX}}>

        {/*Reservation of Rights*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
            Reservation of Rights
          </AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>
            We reserve the right at any time and in its sole discretion to request that you remove all links or any
            particular link to our Web site. You agree to immediately remove all links to our Web site upon such
            request. We also reserve the right to amend these terms and conditions and its linking policy at any time.
            By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and
            conditions.
          </AppText>
        </View>

        {/*Removal Of Links From Our Website*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Removal Of Links From
            Our Website</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>If you find any link on our Web site or
            any linked web site objectionable for any reason, you may contact us about this. We will consider requests
            to remove links but will have no obligation to do so or to respond directly to you.
            Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its
            completeness or accuracy; nor do we commit to ensuring that the website remains available or that the
            material on the website is kept up to date.</AppText>
        </View>

        {/*Content Liability*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Content
            Liability</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>To the maximum extent permitted by
            applicable law, we exclude all representations, warranties and conditions relating to our website and the
            use of this website (including, without limitation, any warranties implied by law in respect of satisfactory
            quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:
            limit or exclude our or your liability for death or personal injury resulting from negligence;
            limit or exclude our or your liability for fraud or fraudulent misrepresentation;
            limit any of our or your liabilities in any way that is not permitted under applicable law; or
            exclude any of our or your liabilities that may not be excluded under applicable law.
            The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)
            are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in
            relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort
            (including negligence) and for breach of statutory duty.
            To the extent that the website and the information and services on the website are provided free of charge,
            we will not be liable for any loss or damage of any nature.</AppText>
        </View>

        {/*Disclaimer*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
            Reservation of Rights
          </AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>
            We reserve the right at any time and in its sole discretion to request that you remove all links or any
            particular link to our Web site. You agree to immediately remove all links to our Web site upon such
            request. We also reserve the right to amend these terms and conditions and its linking policy at any time.
            By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and
            conditions.
          </AppText>
        </View>

        {/*PAYMENT CONFIRMATION*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>
            Reservation of Rights
          </AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Once the payment has been made, the
            confirmation notice will be sent to the client via email within 24 hours of receipt of payment including the
            booking confirmation and the reservation details.</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>HOTELIAN.COM LLC maintains the
            www.hotelian.com Website (Site). stipulate that the governing law is the local law.
            "Visa or MasterCard debit and credit cards in AED will be accepted for payment"
            "We will not trade with or provide any services to OFAC and sanctioned countries"
            "Customer using the website who are Minor /under the age of 18 shall not register as a User of the website
            and shall not transact on or use the website"
            "Cardholder must retain a copy of transaction records and Merchant policies and rules"
            "User is responsible for maintaining the confidentiality of his account"</AppText>
        </View>

        {/*REFUND POLICY*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>REFUND POLICY</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Refunds will be done only through the
            Original Mode of Payment and will be processed within 10 to 45 days depends on the issuing bank of the
            credit card or the
            If Hotelian.com rejects or cancels a reservation and a payment has already been made, you will receive a
            refund of the total reservation value, except in the case of unauthorized reselling or in any other
            appropriate case that we determine in our sole and absolute discretion where we reserve the right not to
            reimburse the total reservation value or any part of it.</AppText>
        </View>

        {/*CANCELLATION POLICY*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>CANCELLATION
            POLICY</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>The Rules spell out the period of
            cancelation during which you can cancel or make adjustments to your reservation (the period of cancelation).
            Some bookings can not be altered or cancelled in restricted instances after they have been produced and this
            will be stated in the cancellation policy of the particular hotel.
            If allowed, you may cancel or change your prepaid reservation during the cancelation period, but the
            applicable cancelation or change fee will be charged as set out in the cancelation policy of the specific
            hotel.
            If cancellation or amendment is permitted on your reservation but you do not do so before the end of the
            cancelation period, you will be liable to pay a cancelation fee equal to the applicable nightly hotel
            reservation rate(s), taxes or tax recovery fees (as applicable), service fees and any additional reservation
            fees charged separately by our affiliate (the cancelation fee) whether you use your hotel reservation or
            not.</AppText>
        </View>

        {/*Credit & Contact Information*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Credit & Contact
            Information
          </AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>This Terms and conditions page was created
            at termsandconditionstemplate.com generator. If you have any queries regarding any of our terms, please
            contact us.
          </AppText>
        </View>
      </ScrollView>
    </>
  )
}

const PP = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: MUTED_LIGHT_XXX}}>

        {/*Website Visitors*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Website
            Visitors</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>HOTELIAN.COM also collects potentially
            personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users
            leaving comments on http://www.hotelian.com blog posts. HOTELIAN.COM only discloses logged in user and
            commenter IP addresses under the same circumstances that it uses and discloses personally-identifying
            information as described below.
            Website Visitors</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Certain visitors to HOTELIAN.COM's
            websites choose to interact with HOTELIAN.COM in ways that require HOTELIAN.COM to gather
            personally-identifying information. The amount and type of information that HOTELIAN.COM gathers depends on
            the nature of the interaction. For example, we ask visitors who sign up for a blog at
            http://www.hotelian.com to provide a username and email address.</AppText>
        </View>

        {/*Security*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Security</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>The security of your Personal Information
            is important to us, but remember that no method of transmission over the Internet, or method of electronic
            storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal
            Information, we cannot guarantee its absolute security.</AppText>
        </View>

        {/*Advertisements*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Advertisements</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Ads appearing on our website may be
            delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to
            recognize your computer each time they send you an online advertisement to compile information about you or
            others who use your computer. This information allows ad networks to, among other things, deliver targeted
            advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of
            cookies by HOTELIAN.COM and does not cover the use of cookies by any advertisers.</AppText>
        </View>

        {/*Links To External Sites*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Links To External
            Sites</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Our Service may contain links to external
            sites that are not operated by us. If you click on a third party link, you will be directed to that third
            party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you
            visit. We have no control over, and assume no responsibility for the content, privacy policies or practices
            of any third party sites, products or services.</AppText>
        </View>

        {/*Www.hotelian.com uses Google AdWords for remarketing*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Www.hotelian.com uses
            Google AdWords for remarketing</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Www.hotelian.com uses the remarketing
            services to advertise on third party websites (including Google) to previous visitors to our site. It could
            mean that we advertise to previous visitors who haven't completed a task on our site, for example using the
            contact form to make an enquiry. This could be in the form of an advertisement on the Google search results
            page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve
            ads based on someone's past visits. Of course, any data collected will be used in accordance with our own
            privacy policy and Google's privacy policy.
            You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you
            want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a
            browser plugin.</AppText>
        </View>

        {/*PAYMENT CONFIRMATION*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>PAYMENT
            CONFIRMATION</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Once the payment has been made, the
            confirmation notice will be sent to the client via email within 24 hours of receipt of payment including the
            booking confirmation and the reservation details.</AppText>
        </View>

        {/*Aggregated Statistics*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Aggregated
            Statistics</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>HOTELIAN.COM may collect statistics about
            the behaviour of visitors to its website. HOTELIAN.COM may display this information publicly or provide it
            to others. However, HOTELIAN.COM does not disclose your personally-identifying information.</AppText>
        </View>

        {/*Cookies*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Cookies</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>To enrich and perfect your online
            experience, HOTELIAN.COM uses Cookies, similar technologies and services provided by others to display
            personalized content, appropriate advertising and store your preferences on your computer.
            A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's
            browser provides to the website each time the visitor returns. HOTELIAN.COM uses cookies to help
            HOTELIAN.COM identify and track visitors, their usage of http://www.hotelian.com, and their website access
            preferences. HOTELIAN.COM visitors who do not wish to have cookies placed on their computers should set
            their browsers to refuse cookies before using HOTELIAN.COM's websites, with the drawback that certain
            features of HOTELIAN.COM's websites may not function properly without the aid of cookies.
            By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and
            agree to HOTELIAN.COM's use of cookies.</AppText>
        </View>

        {/*Privacy Policy Changes*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Privacy Policy
            Changes</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>Although most changes are likely to be
            minor, HOTELIAN.COM may change its Privacy Policy from time to time, and in HOTELIAN.COM's sole discretion.
            HOTELIAN.COM encourages visitors to frequently check this page for any changes to its Privacy Policy. Your
            continued use of this site after any change in this Privacy Policy will constitute your acceptance of such
            change. "All credit/debit cards’ details and personally identifiable information will NOT be stored, sold,
            shared, rented or leased to any third parties" "HOTELIAN.COM LLC will not pass any debit/credit card details
            to third parties" "HOTELIAN.COM LLC takes appropriate steps to ensure data privacy and security including
            through various hardware and software methodologies. However, (www.hotelian.com) cannot guarantee the
            security of any information that is disclosed online"</AppText>
        </View>

        {/*Credit & Contact Information*/}
        <View style={[Style.p__3, Style.bg__white, Style.mb__1,]}>
          <AppText style={[Style.text__capitalize, Style.text__bold, Style.mb__2, Style.f__14]}>Credit & Contact
            Information</AppText>
          <AppText style={[Style.text__capitalize, Style.mb__2, Style.f__12]}>This privacy policy was created at
            https://termsandconditionstemplate.com/privacy-policy-generator/. If you have any questions about this
            Privacy Policy, please contact us via or phone.</AppText>
        </View>
      </ScrollView>
    </>
  )
}

export default TermsAndPolicies;
