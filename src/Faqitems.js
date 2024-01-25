export const faqItems = [
  {
    question: "Can I downgrade the plan?",
    heading: "Yes, you can downgrade the plan.",
    rednotes: "Notes:",
    answer: [
      "When you downgrade the plan, you lose your Premium plan features.",
      "And also lose Premium Icon and Uploaded images.",
    ],
  },
  {
    question: "The app is not working?",
    numberlist: [
      "First, need to check App is enabled or Disabled on the app dashboard.",
      "If the app is disabled then needs to enable.",
    ],
    image: "../src/assets/image/faq2.pngs",
    rednotes: "Notes:",
    answer: [
      "You have downgraded the plan.",
      "If yes then you need to again enable the app on the app dashboard",
    ],
  },
  {
    question: "Can I add an external link?",
    listtitle: ["Yes, you can add external links."],
    bulletlist: [
      "https://www.facebook.com/shopify",
      "https://www.linkedin.com/company/shopify",
      "https://www.instagram.com/shopify/",
      "skype:addigitech?chat",
      "https://api.whatsapp.com/send?phone=1234567890",
      "tel:123456789",
      "etc.",
    ],
  },
  {
    question: "The menu link is not working?",
    menutext: true,
  },
  {
    question: "Which protocol does it support?",
    bulletlist: ["http", "https", "mailto", "skype", "sms", "tel"],
  },
  {
    question: "I have a bug, can you help me fixing it?",
    contactlink: true,
  },
  {
    question: "How do I change the font of Label?",
    answer: [
      "Please go to the app dashboard, scroll all the way down to custom css and copy/paste this.",
      'Just replace "Cabin" by whatever your font is and please be aware that the font will not change in the preview version but it will indeed change in the live version.',
      ".ad-mobile-bar-nav-grid .ad-menu-title { font-family: Cabin,sans-serif!important; }",
    ],
  },
  {
    question: "How do I make the Icon bigger?",
    answer: [
      "Please go to the app dashboard, scroll all the way down to custom css and copy/paste this.",
      "Please be aware that it will impact both desktop and mobile.",
      ".ad-mobile-bar-nav-grid img { width: 40px !important;}",
      ".ad-mobile-bar-nav-grid svg { width: 40px !important; height: 40px !important;}.",
    ],
  },
  {
    question: "Can I contact you?",
    supportlink: true,
  },
];
