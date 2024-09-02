const urls = require('../../support/URLs');
const Locators = require('../../support/pages/Locators');

describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.visit(urls.baseUrl, { timeout: 25000 });// website taking time to load   
    });

    it('Validation for Home Page', function () {
        cy.log('Checking Website Logo');
        cy.get(Locators.websiteLogo).should('exist');

        cy.log('Checking Menu Bar');
        cy.get(Locators.menuBar).should('exist');

        cy.log('Checking Home Menu');
        cy.get(Locators.homeMenu).should('exist');

        cy.log('Checking Features Menu');
        cy.get(Locators.featuresMenu).should('exist');

        cy.log('Checking Who We Serve Menu');
        cy.get(Locators.whoWeServeMenu).should('exist');

        cy.log('Checking Solutions Menu');
        cy.get(Locators.solutionsMenu).should('exist');

        cy.log('Checking Blog Menu');
        cy.get(Locators.blogMenu).should('exist');

        cy.log('Checking Call Button');
        cy.get(Locators.callButton).should('exist');

        cy.log('Checking Request Demo Button');
        cy.get(Locators.requestDemoButton).should('exist');

        cy.log('Checking Login Button');
        cy.get(Locators.loginButton).should('exist');

        cy.log('Checking Home Page Title');
        cy.get(Locators.homePageTitle).should('exist').and('have.text', Locators.homePageTitleText);
        cy.get(Locators.homePageSubTitle).should('exist').and('have.text', Locators.homePageSubTitleText);
        
        cy.log('Checking Request Demo Button in Hero Section');
        cy.get(Locators.requestDemoButtonHero).should('exist');

        cy.log('Checking View Features Button');
        cy.get(Locators.viewFeaturesButton).should('exist');

        cy.log('Checking About us Section and Heading Text')
        cy.get(Locators.AboutUs).should('exist').and('have.text', Locators.AboutUsText);
        cy.get(Locators.AboutUsHeading2).should('exist').and('have.text', Locators.AboutUsHeading2text);
        cy.get(Locators.AboutUsHeading3).should('exist').and('have.text', Locators.AboutUsHeading3text);

        cy.log('Checking Our Service Section');
        cy.get(Locators.OurService).should('exist');
        cy.get(Locators.OurServiceTittle).should('exist');
        cy.get(Locators.OurService1).should('exist');
        cy.get(Locators.OurService2).should('exist');
        cy.get(Locators.OurService3).should('exist');
        cy.get(Locators.OurService4).should('exist');

        cy.get(Locators.OurServiceDefault).should('exist');
    });

    it('Validation Form Section to Calculate Bid', function () {
        cy.log('Checking Form section to Calculate Bid');
        cy.get(Locators.FormSection).should('exist').then(() => {
            cy.log('Form section exists');
        });
    
        cy.get(Locators.FormTittle).should('exist').then(() => {
            cy.log('Form title exists');
        });
    
        cy.get(Locators.Estimators).should('exist').type('2').then(() => {
            cy.log('Entered number of Estimators: 2');
        });
    
        cy.get(Locators.contracts).should('exist').type('100').then(() => {
            cy.log('Entered number of Contracts: 100');
        });
    
        cy.get(Locators.revenue).should('exist').type('500').then(() => {
            cy.log('Entered Revenue: 500');
        });
    
        cy.get(Locators.preConstruction).should('exist').type('10').then(() => {
            cy.log('Entered Pre-Construction percentage: 10');
        });
    
        cy.get(Locators.projects).should('exist').type('15').then(() => {
            cy.log('Entered number of Projects: 15');
        });
    
        cy.get(Locators.winRate).should('exist').type('27').then(() => {
            cy.log('Entered Win Rate percentage: 27');
        });
    
        cy.wait(10000);
    
        cy.get(Locators.CalculateButton).should('exist').click().then(() => {
            cy.log('Clicked on Calculate Button');
        });
    
        cy.get(Locators.FirstName).should('exist').then(() => {
            cy.log('First Name input exists');
        });
    
        cy.get(Locators.LastName).should('exist').then(() => {
            cy.log('Last Name input exists');
        });
    
        cy.get(Locators.PhoneNumber).should('exist').then(() => {
            cy.log('Phone Number input exists');
        });
    
        cy.get(Locators.CompanyName).should('exist').then(() => {
            cy.log('Company Name input exists');
        });
    
        cy.get(Locators.Email).should('exist').then(() => {
            cy.log('Email input exists');
        });
    
        cy.get(Locators.EmailROIButton).should('exist').then(() => {
            cy.log('Email ROI Button exists');
        });
    });    

    it('Validation Our Project Section and links', function () {
        cy.log('Checking Our Project Section exists');
        cy.get(Locators.OurProjectSection).should('exist');

        cy.log('Checking Our Project Heading exists and has correct text');
        cy.get(Locators.OurProjectHeading).should('exist').and('have.text', 'our projects');
        
        cy.log('Checking Our Project Tittle exists and has correct text');
        cy.get(Locators.OurProjectTittle).should('exist').and('have.text', Locators.OurProjectTittleText);

        cy.log('Checking Our Project sub Tittle exists and has correct text');
        cy.get(Locators.OurProjectSubTittle).should('exist').and('have.text', Locators.OurProjectSubTittleText);

        cy.log('Checking Bid Analysis option exists');
        cy.get(Locators.BidAnalysis).should('exist');

        cy.log('Checking Bid Review option exists');
        cy.get(Locators.BidReview).should('exist');

        cy.log('Checking Checklist option exists');
        cy.get(Locators.Checklist).should('exist');

        cy.log('Checking Bid Tracker option exists');
        cy.get(Locators.BidTracker).should('exist');

        cy.log('Checking View All Project Button exists');
        cy.get(Locators.ViewAllProjectButton).should('exist');
    });

    it('Validation Why Choose Us Section and links', function () {
        cy.log('Checking Why Choose Us Section Section exists');
        cy.get(Locators.WhyChooseUsSection).should('exist');

        cy.log('Checking Why Choose us Title exists and has correct text');
        cy.get(Locators.WhyChooseUsTittle).should('exist').and('have.text', Locators.WhyChooseUsText);

        cy.log('Checking Why Choose us Heading exists and has correct text');
        cy.get(Locators.WhyChooseUsHeading).should('exist').and('have.text', "Whywe'reyourbestchoice");

        cy.log('Checking Why Choose us Sub Heading exists and has correct text');
        cy.get(Locators.WhyChooseUsSubHeading).should('exist').and('have.text', Locators.WhyChooseUsSubHeadingtext);

        cy.log('Checking General Contractors exists');
        cy.get(Locators.GeneralContractors).should('exist');

        cy.log('Checking Sub Contractors exists');
        cy.get(Locators.SubContractors).should('exist');

        cy.log('Checking Specialty Contractor exists');
        cy.get(Locators.SpecialtyContractor).should('exist');
    });

    it('Validation Faqs Section and links', function () {
        cy.log('Checking Faqs Section Section exists');
        cy.get(Locators.Faqs).should('exist');

        cy.log('Checking Faqs Title exists and has correct text');
        cy.get(Locators.Faqtittle).should('exist').and('have.text', Locators.FaqsText);
        
        cy.log('Checking Faqs Heading exists and has correct text');
        cy.get(Locators.FaqsHeading).should('exist').and('have.text', Locators.FaqsHeadingText);
        
        cy.log('Checking Faqs Subheading exists and has correct text');
        cy.get(Locators.FaqSubHeading).should('exist').and('have.text', Locators.FaqsSubHeading);

        cy.log('Checking Faqs image exists');
        cy.get(Locators.FaqImage).should('exist');

        cy.log('Checking Faqs heading1 exists');
        cy.get(Locators.FaqHeading1).should('exist');

        cy.log('Checking Faqs heading2 exists');
        cy.get(Locators.FaqHeading2).should('exist');

        cy.log('Checking Faqs heading3 exists');
        cy.get(Locators.FaqHeading3).should('exist');

        cy.log('Checking Faqs heading4 exists');
        cy.get(Locators.FaqHeading4).should('exist');
    });
    
    it('Validation Get Quote Section and links', function () {
        cy.log('Checking Get Quote Section exists');
        cy.get(Locators.GetQuoteSection).should('exist');

        cy.log('Checking Get Quote Title exists and has correct text');
        cy.get(Locators.GetQuoteTittle).should('exist').and('have.text', Locators.getQuotetittletext);
        
        cy.log('Checking Get Quote Sub Title exists and has correct text');
        cy.get(Locators.GetQuotesubtittle).should('exist').and('have.text', Locators.getquotesubtittletext);
        
        cy.log('Checking Get Free Quote Button exists');
        cy.get(Locators.GetQuoteButton).should('exist');
        
        cy.log('Checking Get Quote image exists');
        cy.get(Locators.GetQuoteImage).should('exist');
    });

    it('Validation Our Testimonials Section and links', function () {
        cy.log('Checking Testimonial Section exists');
        cy.get(Locators.TestimonialSection).should('exist');
        
        cy.log('Checking Testimonial Title exists and has correct text');
        cy.get(Locators.TestimonialTittle).should('exist').and('have.text', 'testimonials');
        
        cy.log('Checking Testimonial Heading exists and has correct text');
        cy.get(Locators.TestimonialHeading).should('exist').and('have.text', Locators.TestimonialHeadingtext);
        
        cy.log('Checking Testimonial Subheading exists and has correct text');
        cy.get(Locators.TestimonialSubHeading).should('exist').and('have.text', Locators.TestimonialSubHeadingtext);
        
        cy.log('Checking Testimonial Item exists');
        cy.get(Locators.Testimonialitem).should('exist');
        
        cy.log('Checking Testimonial Ratings exists');
        cy.get(Locators.TestimonialRatings).should('exist');
        
        cy.log('Checking Testimonial Review exists');
        cy.get(Locators.TestimonialReview).should('exist');
        
        cy.log('Checking Testimonial Author Image exists');
        cy.get(Locators.TestimonialAuthorimage).should('exist');
        
        cy.log('Checking Testimonial Author Name exists');
        cy.get(Locators.TestimonialAuthorName).should('exist');
        
        cy.log('Checking Testimonial Author Post exists');
        cy.get(Locators.TestimonialAuthorPost).should('exist');
    });
    
    it('Validation Our Blog Section and links', function () {
        cy.log('Checking Our Blog Section');
        cy.get(Locators.OurBlogSection).should('exist');
        
        cy.log('Checking News and Blog Section');
        cy.get(Locators.NewsAndBlog).should('exist').and('have.text', 'news & blog');
       
        cy.log('Checking Blog Title');
        cy.get(Locators.BlogTittle).should('exist').and('have.text', Locators.Blogtittle);
       
        cy.log('Checking Blog Sub Title');
        cy.get(Locators.BlogSubTittle).should('exist').and('have.text', Locators.BlogSubTittletext);
    
        cy.log('Checking First Blog Post Image');
        cy.get(Locators.Post1image).should('exist');
      
        cy.log('Checking First Blog Post');
        cy.get(Locators.BlogPost1).should('exist');
       
        cy.log('Checking Read More Button for First Blog Post');
        cy.get(Locators.ReadMoreButton).should('exist');
       
        cy.log('Checking Second Blog Post');
        cy.get(Locators.Blogpost2).should('exist');
    
        cy.log('Checking Third Blog Post Again');
        cy.get(Locators.Blogpost3).should('exist');
    });
    
    it('Validation Contact Us Section and links', function () {
        cy.log('Checking Contact Us Section');
        cy.get(Locators.ContactUsSection).should('exist');
    
        cy.log('Checking Contact Us Number Section');
        cy.get(Locators.ContactUsNumberSection).should('exist');
    
        cy.log('Checking Contact Us Number');
        cy.get(Locators.ContactUsnumber).should('exist');
    
        cy.log('Checking Contact Us Email Section');
        cy.get(Locators.ContactUsEmailSection).should('exist');
    
        cy.log('Checking Contact Us Email');
        cy.get(Locators.ContactUsEmail).should('exist');
    
        cy.log('Checking Contact Us Title');
        cy.get(Locators.ContactUsTittle).should('exist').and('have.text', 'contact us');
    
        cy.log('Checking Contact Us Sub Title');
        cy.get(Locators.ContactUsSubTittle).should('exist').and('have.text', 'Get in touch with us');
    
        cy.log('Checking Contact Us First Name Input');
        cy.get(Locators.ContactUsFirstName).should('exist');
    
        cy.log('Checking Contact Us Last Name Input');
        cy.get(Locators.ContactUsLastName).should('exist');
    
        cy.log('Checking Contact Us Company Input');
        cy.get(Locators.ContactUsCompay).should('exist');
    
        cy.log('Checking Contact Us Email Input');
        cy.get(Locators.ContactUsEmailinput).should('exist');
    
        cy.log('Checking Contact Us Number Input');
        cy.get(Locators.ContactUsNumberinput).should('exist');
    
        cy.log('Checking Schedule a Demo Button');
        cy.get(Locators.ContactUsScheduleButton).should('exist');
    });

    it('Validation Footer section and links', function () {
        cy.log('Checking Footer Section');
        cy.get(Locators.FooterSection).should('exist');
        
        cy.log('Checking Footer Logo');
        cy.get(Locators.Footerlogo).should('exist');
        
        cy.log('Checking Footer Text');
        cy.get(Locators.FooterTextLocator)
          .should('exist')
          .and('have.text', Locators.Footertext);
        
        cy.log('Checking Footer Services Section');
        cy.get(Locators.FooterOurservices).should('exist');
        
        cy.log('Checking Footer Scope Link');
        cy.get(Locators.FooterScope).should('exist');
        
        cy.log('Checking Footer Specifications Link');
        cy.get(Locators.FooterSpecifications).should('exist');
        
        cy.log('Checking Footer Invitation To Bid Link');
        cy.get(Locators.FooterInvitationToBid).should('exist');
        
        cy.log('Checking Footer Features Link');
        cy.get(Locators.FooterFeatures).should('exist');
        
        cy.log('Checking Footer Document Management Link');
        cy.get(Locators.FooterDocumentManagement).should('exist');
        
        cy.log('Checking Footer Dashboard Link');
        cy.get(Locators.FooterDashboard).should('exist');
        
        cy.log('Checking Footer Contact Us Link');
        cy.get(Locators.FooterContactUs).should('exist');
        
        cy.log('Checking Footer Contact Number');
        cy.get(Locators.FooterContactNumber).should('exist');
        
        cy.log('Checking Footer Contact Email');
        cy.get(Locators.FooterContactEmail).should('exist');
        
        cy.log('Checking Footer Contact Location');
        cy.get(Locators.FooterContactLocation).should('exist');
        
        cy.log('Checking Copyright Text');
        cy.get(Locators.Copyright)
          .should('exist')
          .and('have.text', Locators.CopyRightText);
        
        cy.log('Checking Social Media Buttons');
        cy.get(Locators.InstagramButton).should('exist');
        cy.get(Locators.FacebookButton).should('exist');
        cy.get(Locators.Xbutton).should('exist');
        cy.get(Locators.GitButton).should('exist');
        cy.get(Locators.LinkedinButton).should('exist');
    });
    
    it('Validation Features sub Menus', function () {
        const featuresMenuItems = [
            { text: 'Scopes', path: '/non-features/non-scopes' },
            { text: 'Specifications', path: '/non-features/non-specifications' },
            { text: 'Invitation to Bid', path: '/non-features/non-invitation-to-bid' },
            { text: 'Document management', path: '/non-features/non-document-management' },
            { text: 'Planroom', path: '/non-features/non-planroom' },
            { text: 'Constructoin Proposal', path: '/non-features/non-construction-proposal' },
            { text: 'Construction Reporting', path: '/non-features/non-construction-reporting' },
            { text: 'Conceptual Estimating', path: '/non-features/non-conceptual-estimating' },
            { text: 'Bid Management', path: '/non-features/non-bid-management' }
        ];

        cy.log('Hovering over Features Menu');
        cy.get(Locators.featuresMenu).realHover();
        cy.wait(2000); // Wait for the dropdown to appear

        cy.log('Clicking on Features Menu');
        cy.get(Locators.featuresMenu).click();
        cy.wait(5000);
        cy.url().should('include', '/non-features');

        // Validate each submenu item in "Features" and check their URLs
        featuresMenuItems.forEach(item => {
            cy.log(`Checking submenu item: ${item.text}`);
            cy.get(Locators.featuresDropdownMenu).contains(item.text).click();
            cy.url().should('include', item.path);
            cy.wait(1000); // Wait for dropdown to appear again
        });
    });

    it('Validation Who We Serve sub Menus', function () {
        const whoWeServeMenuItems = [
            { text: 'Owners', path: '/who-we-serve/owners' },
            { text: 'General Contractors', path: '/who-we-serve/general-contractors' },
            { text: 'Speciality Contractors', path: '/who-we-serve/speciality-contractors' },
            { text: 'Sub Contractors', path: '/who-we-serve/non-sub-contractors' }
        ];

        cy.log('Hovering over Who We Serve Menu');
        cy.get(Locators.whoWeServeMenu).should('exist').realHover();
        cy.wait(2000); // Wait for the dropdown to appear

        cy.log('Clicking on Who We Serve Menu');
        cy.get(Locators.whoWeServeMenu).click();
        cy.wait(5000);
        cy.url().should('include', '/who-we-serve');

        // Validate each submenu item in "Who We Serve" and check their URLs
        whoWeServeMenuItems.forEach(item => {
            cy.log(`Checking submenu item: ${item.text}`);
            cy.get(Locators.whoWeServeDropdownMenu).contains(item.text).click();
            cy.url().should('include', item.path);
            cy.wait(1000); // Wait for dropdown to appear again
        });
    });

    it('Validation Solution Menu', function () {
        cy.log('Checking Solutions Menu');
        cy.get(Locators.solutionsMenu).should('exist').click();
        cy.wait(5000);
        cy.url().should('include', '/solutions');
    });

    it('Validation Blog Menu', function () {
        cy.log('Checking Solutions Menu');
        cy.get(Locators.blogMenu).should('exist').click();
        cy.wait(5000);
        cy.url().should('include', '/blog');
    });

    it('Validation Request Demo Button', function () {
        cy.log('Checking Request Demo Button');
        cy.get(Locators.requestDemoButton).should('exist').click();
        cy.wait(5000);
        cy.url().should('include', '/contact-us');
    });
});
