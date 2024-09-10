// cypress/support/pages/Locators.js
module.exports = {
    emailInput: '#mat-input-11',
    passwordInput: '#mat-input-12',
    signinbutton: ':nth-child(9) > [type="submit"]',
    loginlink: '.ms-3 > .mat-button-wrapper',
    forgotPasswordLink:'.ng-valid > :nth-child(1) > :nth-child(7) > a',
    resetPasswordButton:'button[type="submit"].mat-raised-button.mat-accent',
    ErrorMessage: '#mat-error-15',
    EmailRequiredMessage:'#mat-error-11',
    ValidEmailAddressMessage:'#mat-error-13',
    PasswordRequiredMessage:'#mat-error-12',
    
    // Menu items
    homeMenu: '#menu > :nth-child(1) > .nav-link',
    featuresMenu: '#menu > :nth-child(2) > [href="/non-features"]',
    whoWeServeMenu: '[href="/who-we-serve"]',
    MainMenu: '.mat-button-wrapper > .mat-icon',
    Menudrawer: '.mat-drawer-inner-container',
    ProjectMenu: ':nth-child(4) > .mat-list-item-content > .mat-list-text > .mat-line > .vertical-align-title',
    AddProjectButton: '.add-content > .mat-focus-indicator',
    ProjectNameinput: '#mat-input-17',
    SelectProjectType: '#mat-select-value-11',
    ProjectDiscInput: '#mat-input-17',
    SelectRegOffice: '#mat-select-value-13 > .mat-select-placeholder',
    SelectOwner: '#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper',
    OwnerContact: '#mat-select-16 > .mat-select-trigger > .mat-select-arrow-wrapper',
    LeadEstimator: '#mat-select-18 > .mat-select-trigger > .mat-select-arrow-wrapper',
    BidAmountInput: '#mat-input-18',
    GrossSquareFootage: '#mat-input-19',
    BidNumberInput: '#mat-input-20',
    BidDueDateInput: '#mat-input-21',
    SubmissionDateInput: '#mat-input-22',
    ContExecDateInput: '#mat-input-23',
    AwardAmountInput: '#mat-input-24',
    Address1input: '#mat-input-25',
    Address2input: '#mat-input-26',
    CityInput: '#mat-input-27',
    SelectState: '#mat-select-value-21 > .mat-select-placeholder',
    ZipCodeInput: '#mat-input-28',
    NotesInput: '#mat-input-29',
    SelectTrade: '#mat-select-value-25 > .mat-select-placeholder',
    TradeItem1: '[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(1)',
    TradeItem2: '[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(2)',
    TradeItem3: '[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(3)',
    AddTradeButton: '[style="margin-top: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .btn-block',
    SelectUserTrade: '#mat-select-value-23',
    UserTradeItem1: '[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(1)',
    UserTradeItem2: '[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(2)',
    UserTradeItem3: '[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .record-picker > ul > :nth-child(3)',
    AddUserTradeButton: '[style="margin-top: 10px; margin-bottom: 10px;"] > .container-fluid > app-multi-list > .dual-list > [style="order: 1; margin-left: 0px;"] > .btn-block',
    SaveButton: '[type="submit"]',
    CancelButton: '[fxlayoutalign="flex-end"] > [tabindex="0"]',
    RegOffAddress: '.mat-option-text',
    MatOption: 'mat-option',
    UserMenu: 'img.mat-menu-trigger',
    UserProfile: '[routerlink="/userprofile"]',
    ChangePassword: '[routerlink="/changepassword"]',
    Logout: '.mat-menu-content > :nth-child(3)',

    //Particular project
    FirstProject:':nth-child(2) > .cdk-column-prjNm > .mat-tooltip-trigger',
    Hometab:'.active-list-item-B > .mat-list-item-content',
    Heading:'div.section-style',
    Edit_Project_Name:'#mat-input-32',
    HomeTab_dashboard:'#mat-tab-label-0-1',
    Invitation_By_Trade:'.google-chart',
    SPEC_Type_By_Name :'.right-panel',
    Search:'input[placeholder="Search"]',
    Select_Document_area:'#mat-select-26 .mat-select-value-text .mat-select-min-line',

    // Dropdown menus
    featuresDropdownMenu: '.dropdown-menu', 
    whoWeServeDropdownMenu: 'ul[_ngcontent-ng-c190261292=""] li.nav-item a.nav-link', // Update if necessary
    
    // Additional elements
    solutionsMenu: '#menu > :nth-child(4) > .nav-link',
    blogMenu: ':nth-child(5) > .nav-link',
    callButton: ':nth-child(6) > .nav-link',
    requestDemoButton: '.header-btn > :nth-child(1)',
    loginButton: '.ms-3 > .mat-button-wrapper',
    homePageTitle: '.hero-content > .section-title > .text-anime-style-3',
    homePageSubTitle: '.hero-content > .section-title > .wow',
    AboutUs: '.about-us > .container > .row',
    AboutUsHeading2: '.about-content > #accordion > [data-wow-delay="0.5s"] > #headingTwo > .accordion-button',
    AboutUsHeading3: '.about-content > #accordion > [data-wow-delay="0.75s"] > #headingThree > .accordion-button',
    requestDemoButtonHero: '.hero-content-body > [href="/contact-us"]',
    viewFeaturesButton: '.btn-highlighted',
    websiteLogo: '.navbar-brand > img',
    menuBar: '#menu',

    // Our Service section
    OurService: '.our-service',
    OurServiceTittle: '.our-service > .light-bg-section > .container-fluid > .section-row > .col-lg-12 > .section-title > .text-anime-style-3',
    OurService1: ':nth-child(1) > .service-item > .service-image > a.ng-tns-c3971314283-0', 
    OurService2: ':nth-child(2) > .service-item > .service-image > a.ng-tns-c3971314283-0',
    OurService3: ':nth-child(3) > .service-item > .service-image > a.ng-tns-c3971314283-0',
    OurService4: ':nth-child(4) > .service-item > .service-image > a.ng-tns-c3971314283-0',
    OurServiceDefault: '.service-footer-btn > .btn-default',

    // Form Section
    FormSection: '.custom-form',
    FormTittle: 'h2.text-center',
    Estimators: '#Estimators',
    contracts: '#contracts',
    revenue: '#revenue',
    preConstruction: '#pre-construction',
    projects: '#projects',
    winRate: '#win-rate',
    CalculateButton: '[mattooltip="Calculate"]',
    EmailROIButton: '.btn-gap',
    FirstName: ':nth-child(5) > :nth-child(1) > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    LastName: ':nth-child(5) > :nth-child(2) > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    PhoneNumber: '#Phone',
    CompanyName: ':nth-child(6) > :nth-child(2) > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    Email: ':nth-child(7) > .col-lg-6 > .form-group > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    SavingperYear: ':nth-child(1) > ul.ng-tns-c3971314283-0 > .list-group-val',
    SavingWithoutBid: ':nth-child(2) > ul.ng-tns-c3971314283-0 > .list-group-val',
    ReturnPercents: ':nth-child(3) > ul.ng-tns-c3971314283-0 > .list-group-val',

    // Our Projects Section
    OurProjectSection: '.our-projects',
    OurProjectHeading: '.our-projects > .light-bg-section > .container-fluid > .section-row > .col-lg-12 > .section-title > h3.wow',
    OurProjectTittle: '.our-projects > .light-bg-section > .container-fluid > .section-row > .col-lg-12 > .section-title > .text-anime-style-3',
    OurProjectSubTittle: '.our-projects > .light-bg-section > .container-fluid > .section-row > .col-lg-12 > .section-title > p.wow',
    BidAnalysis: ':nth-child(1) > .project-item > .project-image > a.ng-tns-c3971314283-0',
    BidReview: ':nth-child(2) > .project-item > .project-image > a.ng-tns-c3971314283-0',
    Checklist: ':nth-child(3) > .project-item > .project-image > a.ng-tns-c3971314283-0',
    BidTracker: ':nth-child(4) > .project-item > .project-image > a.ng-tns-c3971314283-0',
    ViewAllProjectButton: '.project-footer-btn > .btn-default',

    // Why Choose Us Section
    WhyChooseUsSection: 'app-new-app-non-login.ng-tns-c3971314283-0 > :nth-child(6)',
    WhyChooseUsTittle: 'app-new-app-non-login.ng-tns-c3971314283-0 > :nth-child(6)',
    WhyChooseUsHeading: ':nth-child(6) > .container > .section-row > .col-lg-12 > .section-title > .text-anime-style-3 > .split-line',
    WhyChooseUsSubHeading: ':nth-child(6) > .container > .section-row > .col-lg-12 > .section-title > p.wow',
    GeneralContractors: ':nth-child(1) > .why-choose-item > .why-choose-content > h3.ng-tns-c3971314283-0',
    SubContractors: ':nth-child(2) > .why-choose-item > .why-choose-content > h3.ng-tns-c3971314283-0',
    SpecialtyContractor: ':nth-child(3) > .why-choose-item > .why-choose-content > h3.ng-tns-c3971314283-0',

    // Faqs Section
    Faqs: 'app-new-app-non-login.ng-tns-c3971314283-0 > :nth-child(7)',
    Faqtittle: ':nth-child(7) > .container > .section-row > .col-lg-12 > .section-title > h3.wow',
    FaqsHeading: ':nth-child(7) > .container > .section-row > .col-lg-12 > .section-title > .text-anime-style-3 > .split-line',
    FaqSubHeading: ':nth-child(7) > .container > .section-row > .col-lg-12 > .section-title > p.wow',
    FaqImage: '.col-lg-12 > .faqs-img-1 > .image-anime > .ng-tns-c3971314283-0',
    FaqHeading1: '.col-lg-7 > #accordion > [data-wow-delay="0.25s"] > #headingOne > .accordion-button',
    FaqHeading2: '.col-lg-7 > #accordion > [data-wow-delay="0.5s"] > #headingTwo > .accordion-button',
    FaqHeading3: '.col-lg-7 > #accordion > [data-wow-delay="0.75s"] > #headingThree > .accordion-button',
    FaqHeading4: '.col-lg-7 > #accordion > [data-wow-delay="1s"] > #headingfour > .accordion-button',

    // Get Quote section
    GetQuoteSection: '.cta-box',
    GetQuoteTittle: '.col-lg-7 > .section-title > .text-anime-style-3',
    GetQuotesubtittle: '.col-lg-7 > .section-title > .wow',
    GetQuoteButton: '.section-btn > .btn-default',
    GetQuoteImage: '.cta-box-image > figure.ng-tns-c3971314283-0 > .ng-tns-c3971314283-0',

    //Testimonial Section
    TestimonialSection: '.our-testimonial',
    TestimonialTittle: '.our-testimonial > .container > .section-row > .col-lg-12 > .section-title > h3.wow',
    TestimonialHeading: '.our-testimonial > .container > .section-row > .col-lg-12 > .section-title > .text-anime-style-3',
    TestimonialSubHeading: '.our-testimonial > .container > .section-row > .col-lg-12 > .section-title > p.wow',
    Testimonialitem: ':nth-child(1) > .testimonial-item',
    TestimonialRatings: ':nth-child(1) > .testimonial-item > .testimonial-header > .testimonial-rating',
    TestimonialReview: ':nth-child(1) > .testimonial-item > .testimonial-header > .testimonial-content > .ng-tns-c3971314283-0',
    TestimonialAuthorimage: ':nth-child(1) > .testimonial-item > .testimonial-body > .author-image > .image-anime > .ng-tns-c3971314283-0',
    TestimonialAuthorName: ':nth-child(1) > .testimonial-item > .testimonial-body > .author-content > h3.ng-tns-c3971314283-0',
    TestimonialAuthorPost: ':nth-child(1) > .testimonial-item > .testimonial-body > .author-content > p.ng-tns-c3971314283-0',

    // Our Blog Section
    OurBlogSection: '.our-blog',
    NewsAndBlog: '.our-blog > .container > .section-row > .col-lg-12 > .section-title > h3.wow',
    BlogTittle: '.our-blog > .container > .section-row > .col-lg-12 > .section-title > .text-anime-style-3',
    BlogSubTittle: '.our-blog > .container > .section-row > .col-lg-12 > .section-title > p.wow',
    Post1image: ':nth-child(1) > .blog-item > .post-featured-image > figure.ng-tns-c3971314283-0 > .image-anime > .ng-tns-c3971314283-0',
    BlogPost1: ':nth-child(1) > .blog-item > .post-item-content',
    ReadMoreButton: ':nth-child(1) > .blog-item > .post-item-content > .post-item-footer > .readmore-btn',
    Blogpost2: ':nth-child(2) > .blog-item > .post-item-content',
    Blogpost3: ':nth-child(3) > .blog-item > .post-item-content',

    // Contact us Section
    ContactUsSection: '.contact-us',
    ContactUsNumberSection: '.contact-sidebar > :nth-child(1)',
    ContactUsnumber: ':nth-child(1) > .contact-info-content > h3',
    ContactUsEmailSection: '.contact-sidebar > :nth-child(2)',
    ContactUsEmail: ':nth-child(2) > .contact-info-content > h3',
    ContactUsTittle: '.contact-form > .section-title > .wow',
    ContactUsSubTittle: '.contact-form > .section-title > .text-anime-style-3',
    ContactUsFirstName:'.row > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    ContactUsLastName: ':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    ContactUsCompay: ':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    ContactUsEmailinput: ':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    ContactUsNumberinput: '.mb-5 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix',
    ContactUsScheduleButton: ':nth-child(6) > .mat-focus-indicator',

    // main Footer section
    FooterSection: '.main-footer',
    Footerlogo: '.footer-logo > figure > img',
    FooterTextLocator: '.footer-content > p',
    FooterOurservices: ':nth-child(2) > .footer-links',
    FooterScope: ':nth-child(2) > .footer-links > ul > :nth-child(1)',
    FooterSpecifications: ':nth-child(2) > .footer-links > ul > :nth-child(2)',
    FooterInvitationToBid: ':nth-child(2) > .footer-links > ul > :nth-child(3)',
    FooterFeatures: ':nth-child(3) > .footer-links',
    FooterDocumentManagement: ':nth-child(3) > .footer-links > ul > :nth-child(1)',
    FooterDashboard: ':nth-child(3) > .footer-links > ul > :nth-child(2)',
    FooterContactUs: ':nth-child(4) > .footer-links',
    FooterContactNumber: ':nth-child(4) > .footer-links > :nth-child(2)',
    FooterContactEmail: '.footer-links > :nth-child(3)',
    FooterContactLocation: '.footer-links > :nth-child(4)',
    Copyright: '.footer-copyright-text > p',
    InstagramButton: '.footer-social-links > ul > :nth-child(1) > a',
    FacebookButton: '.footer-social-links > ul > :nth-child(2) > a',
    Xbutton: '.footer-social-links > ul > :nth-child(3) > a',
    GitButton: '.footer-social-links > ul > :nth-child(4) > a',
    LinkedinButton: '.footer-social-links > ul > :nth-child(5) > a',

    // Dashboard
    headertitle: '.header-title',
    rightpanel: '.right-panel',
    projectstatus: '.margin-status > .global-title',
    projecttype: '.margin-type > .global-title',
    ProjectEstimator: '.margin-est > .global-title',
    Projectmargin: '.margin-stage > .global-title',
    RevenuePanel: '.revenue-panel',
    RevenueTitle: '.revenue-title',
    revenuebox1: '.revenue-box-1',
    revenuebox2: '.revenue-box-2',
    revenuebox3: '.revenue-box-3',
    revenuebox4: '.revenue-box-4',
    TypeChart: '.type-chart',
    TypeHeader: '.type-header',
    EstimatorChart: '.estimator-chart',
    EstimatorHeader: '.estimator-header',
    TaskPanel: '.task-panel',
    TaskPanelTitle: '.task-panel-title',
    Task1: '#mat-expansion-panel-header-0',
    Task2: '#mat-expansion-panel-header-1',
    ActivityPanel: '.activity-panel',
    ActivityPanelTitle: '.activity-panel-title',
    HeaderRow: '.mat-header-row',
    HeaderCell: 'mat-header-cell',
    Firstrow: '.mat-table > :nth-child(2)',
    PieChart:'svg[aria-label="A chart."]',

    // Text Message section
    AboutUsText: 'about usEstimate More In Less TimeOur online construction estimating software speeds up your estimates, cutting time spent on paperwork and giving you more time to get on with the job. The user-friendly project information tool ensures fast and accurate summary page of all critical information of the project. This information is compiled and transferred into your summary page of the excel report. Do You Have Any Exposure In The Bids Your Subs Are Giving You? The weakest point in most estimating systems is not able to check against what has been missed leading to scope busts, losses or litigation. Our system complements the estimators ability to ensure that they can very quickly check against our database and use the Contexo Computing power to get those checks done in minutes. Not only will it immediately improve your productivity and hence your capacity to bid much more projects with the same number of estimators. Have Peace Of Mind On Bids That You Have All The Scope. Our primary objective in designing the system was getting speed without sacrificing accuracy but using the computation power of modem computers to do the tedious work and let the Estimators have more time on hand. This allow them to have more time for creative solutions and thorough review of subcontractor bids.',
    homePageTitleText: 'Pre-construction Software with AI co-pilot',
    homePageSubTitleText: 'we specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail. With years of experience and a commitment to quality.',
    AboutUsHeading2text: ' Do You Have Any Exposure In The Bids Your Subs Are Giving You? ',
    AboutUsHeading3text: ' Have Peace Of Mind On Bids That You Have All The Scope. ',
    Blogtittle: 'Articles & blog posts',
    BlogSubTittletext: 'We specialize in a wide range of construction services, including residential, commercial, and industrial projects.',
    Footertext: 'Our pre-construction services gives you peace of mind knowing that we are still here for you even after.',
    CopyRightText: 'Copyright © 2024 Contexo. All Rights Reserved.',
    TestimonialHeadingtext: 'What people are saying about us',
    TestimonialSubHeadingtext: 'We specialize in a wide range of construction services, including residential, commercial, and industrial projects.',
    getQuotetittletext: "Let's bulid something great together!",
    getquotesubtittletext: "Don't wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.",
    OurProjectTittleText: 'Explore our diverse range of projects',
    OurProjectSubTittleText: 'We specialize in a wide range of construction services, including residential, commercial, and industrial projects.',
    WhyChooseUsSubHeadingtext: 'Developed in close collaboration with our partners and clients, combines industry knowledge, decades of experience, ingenuity and adaptability to deliver excellence to our clients.',
    WhyChooseUsText: "why choose us?Whywe'reyourbestchoiceDeveloped in close collaboration with our partners and clients, combines industry knowledge, decades of experience, ingenuity and adaptability to deliver excellence to our clients.GENERAL CONTRACTORSSimple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.800+project complatedSUBCONTRACTORSSimple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.800+project complatedSpeciality ContractorsSimple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.800+project complated",
    FaqsText: 'faqs',
    FaqsHeadingText: "Gotquestions?we'vegotanswers",
    FaqsSubHeading: 'We specialize in a wide range of construction services, including residential, commercial, and industrial projects.',
    FaqsHeading1text: '&nbsp;Do you offer a free, no obligation quotation?&nbsp;',
    FaqsHeading2text: 'What services do you offer?',
    FaqsHeading3text: 'What types of projects do you specialize in?',
    FaqsHeading3text: 'How do I start a project with your company?',
    Badcredential: 'Bad credentials!',
    revenuebox1text: '$6.4 MillionWon',
    revenuebox2text: '75%Close Rate',
    revenuebox3text: '$63.9 MillionOpen',
    revenuebox4text: '$2.8 MillionEstimated',
    TypeHeadertext: 'Year to Date Close Rate by Type',
    EstimatorHeadertext: 'Year to Date Close Rate by Estimator',
    RevenueTitletext: 'Financials',
    Projectmargintext: 'Projects By Stage',
    ProjectEstimatortext: 'Projects By Estimator',
    projecttypetext: 'Projects By Type',
    projectstatustext: 'Projects By Status',
    TaskPanelTitletext: 'Tasks & Events',
    ActivityTitletext: 'Activity Log',
};