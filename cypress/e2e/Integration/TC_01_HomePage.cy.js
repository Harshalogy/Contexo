const urls = require('../../support/URLs');
const Locators = require('../../support/pages/Locators');

describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.viewport(1500, 720);
        cy.visit(urls.baseUrl, { timeout: 25000 });// website taking time to load   
    });

    it('Verify various elements on the home page', function () {
        // Validate the presence of the website logo
        cy.log('Checking Website Logo');
        cy.get(Locators.websiteLogo).should('exist'); 
    
        // Validate the presence of the menu bar
        cy.log('Checking Menu Bar');
        cy.get(Locators.menuBar).should('exist'); 
    
        // Validate the presence of the Home button in the menu
        cy.log('Checking Home button in Menu');
        cy.get(Locators.homeMenu).should('exist'); 
    
        // Validate the presence of the Features dropdown in the menu
        cy.log('Checking Features Dropdown in Menu');
        cy.get(Locators.featuresMenu).should('exist'); 
    
        // Validate the presence of the Who We Serve dropdown in the menu
        cy.log('Checking Who We Serve Dropdown in Menu');
        cy.get(Locators.whoWeServeMenu).should('exist'); 
    
        // Validate the presence of the Solutions button in the menu
        cy.log('Checking Solutions button in Menu');
        cy.get(Locators.solutionsMenu).should('exist'); 
    
        // Validate the presence of the Blog button in the menu
        cy.log('Checking Blog button in Menu');
        cy.get(Locators.blogMenu).should('exist'); 
    
        // Validate the presence of the Call button in the menu
        cy.log('Checking Call Button in Menu');
        cy.get(Locators.callButton).should('exist'); 
    
        // Validate the presence of the Request Demo button
        cy.log('Checking Request Demo Button');
        cy.get(Locators.requestDemoButton).should('exist'); 
    
        // Validate the presence of the Login button
        cy.log('Checking Login Button');
        cy.get(Locators.loginButton).should('exist'); 
    
        // Validate the presence and text of the Home Page Title and Subtitle
        cy.log('Checking Home Page Title');
        cy.get(Locators.homePageTitle).should('exist').and('have.text', Locators.homePageTitleText); 
        cy.get(Locators.homePageSubTitle).should('exist').and('have.text', Locators.homePageSubTitleText); 
    
        // Validate the presence of the Request Demo button in the Hero section
        cy.log('Checking Request Demo Button in Hero Section');
        cy.get(Locators.requestDemoButtonHero).should('exist'); 
    
        // Validate the presence of the View Features button
        cy.log('Checking View Features Button');
        cy.get(Locators.viewFeaturesButton).should('exist'); 
    
        // Validate the About Us section and its headings
        cy.log('Checking About Us Section and Heading Text');
        cy.get(Locators.AboutUs).should('exist').and('have.text', Locators.AboutUsText); 
        cy.get(Locators.AboutUsHeading2).should('exist').and('have.text', Locators.AboutUsHeading2text); 
        cy.get(Locators.AboutUsHeading3).should('exist').and('have.text', Locators.AboutUsHeading3text); 
    
        // Validate the Our Service section and its elements
        cy.log('Checking Our Service Section');
        cy.get(Locators.OurService).should('exist'); 
        cy.get(Locators.OurServiceTittle).should('exist'); 
        cy.get(Locators.OurService1).should('exist'); 
        cy.get(Locators.OurService2).should('exist'); 
        cy.get(Locators.OurService3).should('exist'); 
        cy.get(Locators.OurService4).should('exist'); 
    
        // Validate the presence of the View All Services button
        cy.get(Locators.OurServiceDefault).should('exist'); 
    });
    

    it('Verify Form Section to Calculate Bid', function () {
        // Validate the "Calculate Bid" form section
        cy.log('Checking Form section to Calculate Bid');
        cy.get(Locators.FormSection).should('exist').then(() => {
            cy.log('Form section exists');
        });
        // Validate the Form title
        cy.get(Locators.FormTittle).should('exist').then(() => {
            cy.log('Form title exists');
        });
        // Input the number of Estimators
        cy.get(Locators.Estimators).should('exist').type('2').then(() => {
            cy.log('Entered number of Estimators: 2');
        });
        // Input the number of Contracts
        cy.get(Locators.contracts).should('exist').type('100').then(() => {
            cy.log('Entered number of Contracts: 100');
        });
        // Input the Revenue
        cy.get(Locators.revenue).should('exist').type('500').then(() => {
            cy.log('Entered Revenue: 500');
        });
        // Input the Pre-Construction percentage
        cy.get(Locators.preConstruction).should('exist').type('10').then(() => {
            cy.log('Entered Pre-Construction percentage: 10');
        });
        // Input the number of Projects
        cy.get(Locators.projects).should('exist').type('15').then(() => {
            cy.log('Entered number of Projects: 15');
        });
        // Input the Win Rate percentage
        cy.get(Locators.winRate).should('exist').type('27').then(() => {
            cy.log('Entered Win Rate percentage: 27');
        });
        // Click the Calculate Button
        cy.get(Locators.CalculateButton).should('exist').click().then(() => {
            cy.log('Clicked on Calculate Button');
        });
        // Validate the First Name input field
        cy.get(Locators.FirstName).should('exist').then(() => {
            cy.log('First Name input exists');
        });
        // Validate the Last Name input field
        cy.get(Locators.LastName).should('exist').then(() => {
            cy.log('Last Name input exists');
        });
        // Validate the Phone Number input field
        cy.get(Locators.PhoneNumber).should('exist').then(() => {
            cy.log('Phone Number input exists');
        });
        // Validate the Company Name input field
        cy.get(Locators.CompanyName).should('exist').then(() => {
            cy.log('Company Name input exists');
        });
        // Validate the Email input field
        cy.get(Locators.Email).should('exist').then(() => {
            cy.log('Email input exists');
        });
        // Validate the Email ROI Button
        cy.get(Locators.EmailROIButton).should('exist').then(() => {
            cy.log('Email ROI Button exists');
        });
    });


    it('Verify Our Project Section and links', function () {
        // Validate the "Our Project" section exists
        cy.log('Checking Our Project Section exists');
        cy.get(Locators.OurProjectSection).should('exist');

        // Validate the "Our Project" heading exists and has the correct text
        cy.log('Checking Our Project Heading exists and has correct text');
        cy.get(Locators.OurProjectHeading).should('exist').and('have.text', 'our projects');

        // Validate the "Our Project" title exists and has the correct text
        cy.log('Checking Our Project Title exists and has correct text');
        cy.get(Locators.OurProjectTittle).should('exist').and('have.text', Locators.OurProjectTittleText);

        // Validate the "Our Project" subtitle exists and has the correct text
        cy.log('Checking Our Project Sub Title exists and has correct text');
        cy.get(Locators.OurProjectSubTittle).should('exist').and('have.text', Locators.OurProjectSubTittleText);

        // Validate that the "Bid Analysis" option exists
        cy.log('Checking Bid Analysis option exists');
        cy.get(Locators.BidAnalysis).should('exist');

        // Validate that the "Bid Review" option exists
        cy.log('Checking Bid Review option exists');
        cy.get(Locators.BidReview).should('exist');

        // Validate that the "Checklist" option exists
        cy.log('Checking Checklist option exists');
        cy.get(Locators.Checklist).should('exist');

        // Validate that the "Bid Tracker" option exists
        cy.log('Checking Bid Tracker option exists');
        cy.get(Locators.BidTracker).should('exist');

        // Validate that the "View All Project" button exists
        cy.log('Checking View All Project Button exists');
        cy.get(Locators.ViewAllProjectButton).should('exist');
    });


    it('Verify Why Choose Us Section and links', function () {
        // Validate the "Why Choose Us" section exists
        cy.log('Checking Why Choose Us Section exists');
        cy.get(Locators.WhyChooseUsSection).should('exist');

        // Validate the "Why Choose Us" title exists and has the correct text
        cy.log('Checking Why Choose Us Title exists and has correct text');
        cy.get(Locators.WhyChooseUsTittle).should('exist').and('have.text', Locators.WhyChooseUsText);

        // Validate the "Why Choose Us" heading exists and has the correct text
        cy.log('Checking Why Choose Us Heading exists and has correct text');
        cy.get(Locators.WhyChooseUsHeading).should('exist').and('have.text', "Whywe'reyourbestchoice");

        // Validate the "Why Choose Us" subheading exists and has the correct text
        cy.log('Checking Why Choose Us Sub Heading exists and has correct text');
        cy.get(Locators.WhyChooseUsSubHeading).should('exist').and('have.text', Locators.WhyChooseUsSubHeadingtext);

        // Validate that the "General Contractors" option exists
        cy.log('Checking General Contractors exists');
        cy.get(Locators.GeneralContractors).should('exist');

        // Validate that the "Sub Contractors" option exists
        cy.log('Checking Sub Contractors exists');
        cy.get(Locators.SubContractors).should('exist');

        // Validate that the "Specialty Contractor" option exists
        cy.log('Checking Specialty Contractor exists');
        cy.get(Locators.SpecialtyContractor).should('exist');
    });


    it('Verify Faqs Section and links', function () {
        // Validate the "FAQs" section exists
        cy.log('Checking Faqs Section exists');
        cy.get(Locators.Faqs).should('exist');

        // Validate the "FAQs" title exists and has the correct text
        cy.log('Checking Faqs Title exists and has correct text');
        cy.get(Locators.Faqtittle).should('exist').and('have.text', Locators.FaqsText);

        // Validate the "FAQs" heading exists and has the correct text
        cy.log('Checking Faqs Heading exists and has correct text');
        cy.get(Locators.FaqsHeading).should('exist').and('have.text', Locators.FaqsHeadingText);

        // Validate the "FAQs" subheading exists and has the correct text
        cy.log('Checking Faqs Subheading exists and has correct text');
        cy.get(Locators.FaqSubHeading).should('exist').and('have.text', Locators.FaqsSubHeading);

        // Validate the "FAQs" image exists
        cy.log('Checking Faqs image exists');
        cy.get(Locators.FaqImage).should('exist');

        // Validate that the first "FAQs" heading exists
        cy.log('Checking Faqs heading1 exists');
        cy.get(Locators.FaqHeading1).should('exist');

        // Validate that the second "FAQs" heading exists
        cy.log('Checking Faqs heading2 exists');
        cy.get(Locators.FaqHeading2).should('exist');

        // Validate that the third "FAQs" heading exists
        cy.log('Checking Faqs heading3 exists');
        cy.get(Locators.FaqHeading3).should('exist');

        // Validate that the fourth "FAQs" heading exists
        cy.log('Checking Faqs heading4 exists');
        cy.get(Locators.FaqHeading4).should('exist');
    });


    it('Verify Get Quote Section and links', function () {
        // Validate the "Get Quote" section exists
        cy.log('Checking Get Quote Section exists');
        cy.get(Locators.GetQuoteSection).should('exist');

        // Validate the "Get Quote" title exists and has the correct text
        cy.log('Checking Get Quote Title exists and has correct text');
        cy.get(Locators.GetQuoteTittle).should('exist').and('have.text', Locators.getQuotetittletext);

        // Validate the "Get Quote" subtitle exists and has the correct text
        cy.log('Checking Get Quote Sub Title exists and has correct text');
        cy.get(Locators.GetQuotesubtittle).should('exist').and('have.text', Locators.getquotesubtittletext);

        // Validate that the "Get Free Quote" button exists
        cy.log('Checking Get Free Quote Button exists');
        cy.get(Locators.GetQuoteButton).should('exist');

        // Validate that the "Get Quote" image exists
        cy.log('Checking Get Quote image exists');
        cy.get(Locators.GetQuoteImage).should('exist');
    });

    it('Verify Our Testimonials Section and links', function () {
        // Validate the "Testimonials" section exists
        cy.log('Checking Testimonial Section exists');
        cy.get(Locators.TestimonialSection).should('exist');

        // Validate the "Testimonials" title exists and has the correct text
        cy.log('Checking Testimonial Title exists and has correct text');
        cy.get(Locators.TestimonialTittle).should('exist').and('have.text', 'testimonials');

        // Validate the "Testimonials" heading exists and has the correct text
        cy.log('Checking Testimonial Heading exists and has correct text');
        cy.get(Locators.TestimonialHeading).should('exist').and('have.text', Locators.TestimonialHeadingtext);

        // Validate the "Testimonials" subheading exists and has the correct text
        cy.log('Checking Testimonial Subheading exists and has correct text');
        cy.get(Locators.TestimonialSubHeading).should('exist').and('have.text', Locators.TestimonialSubHeadingtext);

        // Validate that a "Testimonial Item" exists
        cy.log('Checking Testimonial Item exists');
        cy.get(Locators.Testimonialitem).should('exist');

        // Validate that the "Testimonial Ratings" exist
        cy.log('Checking Testimonial Ratings exists');
        cy.get(Locators.TestimonialRatings).should('exist');

        // Validate that a "Testimonial Review" exists
        cy.log('Checking Testimonial Review exists');
        cy.get(Locators.TestimonialReview).should('exist');

        // Validate that the "Testimonial Author Image" exists
        cy.log('Checking Testimonial Author Image exists');
        cy.get(Locators.TestimonialAuthorimage).should('exist');

        // Validate that the "Testimonial Author Name" exists
        cy.log('Checking Testimonial Author Name exists');
        cy.get(Locators.TestimonialAuthorName).should('exist');

        // Validate that the "Testimonial Author Post" exists
        cy.log('Checking Testimonial Author Post exists');
        cy.get(Locators.TestimonialAuthorPost).should('exist');
    });


    it('Verify Our Blog Section and links', function () {
        // Validate that the "Our Blog" section exists
        cy.log('Checking Our Blog Section');
        cy.get(Locators.OurBlogSection).should('exist');

        // Validate that the "News and Blog" section exists and has the correct text
        cy.log('Checking News and Blog Section');
        cy.get(Locators.NewsAndBlog).should('exist').and('have.text', 'news & blog');

        // Validate that the "Blog Title" exists and has the correct text
        cy.log('Checking Blog Title');
        cy.get(Locators.BlogTittle).should('exist').and('have.text', Locators.Blogtittle);

        // Validate that the "Blog Sub Title" exists and has the correct text
        cy.log('Checking Blog Sub Title');
        cy.get(Locators.BlogSubTittle).should('exist').and('have.text', Locators.BlogSubTittletext);

        // Validate that the image for the first blog post exists
        cy.log('Checking First Blog Post Image');
        cy.get(Locators.Post1image).should('exist');

        // Validate that the first blog post exists
        cy.log('Checking First Blog Post');
        cy.get(Locators.BlogPost1).should('exist');

        // Validate that the "Read More" button for the first blog post exists
        cy.log('Checking Read More Button for First Blog Post');
        cy.get(Locators.ReadMoreButton).should('exist');

        // Validate that the second blog post exists
        cy.log('Checking Second Blog Post');
        cy.get(Locators.Blogpost2).should('exist');

        // Validate that the third blog post exists
        cy.log('Checking Third Blog Post Again');
        cy.get(Locators.Blogpost3).should('exist');
    });

    it('Verify Contact Us Section and links', function () {
        // Validate that the "Contact Us" section exists
        cy.log('Checking Contact Us Section');
        cy.get(Locators.ContactUsSection).should('exist');

        // Validate that the "Contact Us Number" section exists
        cy.log('Checking Contact Us Number Section');
        cy.get(Locators.ContactUsNumberSection).should('exist');

        // Validate that the "Contact Us Number" exists
        cy.log('Checking Contact Us Number');
        cy.get(Locators.ContactUsnumber).should('exist');

        // Validate that the "Contact Us Email" section exists
        cy.log('Checking Contact Us Email Section');
        cy.get(Locators.ContactUsEmailSection).should('exist');

        // Validate that the "Contact Us Email" exists
        cy.log('Checking Contact Us Email');
        cy.get(Locators.ContactUsEmail).should('exist');

        // Validate that the "Contact Us Title" exists and has the correct text
        cy.log('Checking Contact Us Title');
        cy.get(Locators.ContactUsTittle).should('exist').and('have.text', 'contact us');

        // Validate that the "Contact Us Sub Title" exists and has the correct text
        cy.log('Checking Contact Us Sub Title');
        cy.get(Locators.ContactUsSubTittle).should('exist').and('have.text', 'Get in touch with us');

        // Validate that the "First Name" input field exists
        cy.log('Checking Contact Us First Name Input');
        cy.get(Locators.ContactUsFirstName).should('exist');

        // Validate that the "Last Name" input field exists
        cy.log('Checking Contact Us Last Name Input');
        cy.get(Locators.ContactUsLastName).should('exist');

        // Validate that the "Company" input field exists
        cy.log('Checking Contact Us Company Input');
        cy.get(Locators.ContactUsCompay).should('exist');

        // Validate that the "Email" input field exists
        cy.log('Checking Contact Us Email Input');
        cy.get(Locators.ContactUsEmailinput).should('exist');

        // Validate that the "Number" input field exists
        cy.log('Checking Contact Us Number Input');
        cy.get(Locators.ContactUsNumberinput).should('exist');

        // Validate that the "Schedule a Demo" button exists
        cy.log('Checking Schedule a Demo Button');
        cy.get(Locators.ContactUsScheduleButton).should('exist');
    });


    it('Verify Footer section and links', function () {
        // Verify that the Footer section exists
        cy.log('Checking Footer Section');
        cy.get(Locators.FooterSection).should('exist');

        // Verify that the Footer logo exists
        cy.log('Checking Footer Logo');
        cy.get(Locators.Footerlogo).should('exist');

        // Verify that the Footer text is correct
        cy.log('Checking Footer Text');
        cy.get(Locators.FooterTextLocator)
            .should('exist')
            .and('have.text', Locators.Footertext);

        // Verify that the Footer Services section exists
        cy.log('Checking Footer Services Section');
        cy.get(Locators.FooterOurservices).should('exist');

        // Verify that the Footer links exist
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

        // Verify that the Footer contact information exists
        cy.log('Checking Footer Contact Number');
        cy.get(Locators.FooterContactNumber).should('exist');

        cy.log('Checking Footer Contact Email');
        cy.get(Locators.FooterContactEmail).should('exist');

        cy.log('Checking Footer Contact Location');
        cy.get(Locators.FooterContactLocation).should('exist');

        // Verify that the copyright text is correct
        cy.log('Checking Copyright Text');
        cy.get(Locators.Copyright)
            .should('exist')
            .and('have.text', Locators.CopyRightText);

        // Verify that social media buttons exist
        cy.log('Checking Social Media Buttons');
        cy.get(Locators.InstagramButton).should('exist');
        cy.get(Locators.FacebookButton).should('exist');
        cy.get(Locators.Xbutton).should('exist');
        cy.get(Locators.GitButton).should('exist');
        cy.get(Locators.LinkedinButton).should('exist');
    });


    it('Verify Features sub Menus', function () {
        // Array of submenu items under "Features" with their text and expected URL paths
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

        // Hover over the "Features" menu to trigger the dropdown
        cy.log('Hovering over Features Menu');
        cy.get(Locators.featuresMenu).realHover();
        cy.wait(2000); // Wait for the dropdown to appear

        // Click on the "Features" menu to navigate to its page
        cy.log('Clicking on Features Menu');
        cy.get(Locators.featuresMenu).click();
        cy.wait(5000);

        // Verify the URL to ensure navigation to the "Features" section
        cy.url().should('include', '/non-features');

        // Validate each submenu item under "Features" and verify their respective URLs
        featuresMenuItems.forEach(item => {
            cy.log(`Checking submenu item: ${item.text}`);
            cy.get(Locators.featuresDropdownMenu).contains(item.text).click();
            cy.url().should('include', item.path);
            cy.wait(1000); // Wait for dropdown to appear again
        });
    });

    it('Verify Who We Serve sub Menus', function () {
        // Array of submenu items under "Who We Serve" with their text and expected URL paths
        const whoWeServeMenuItems = [
            { text: 'Owners', path: '/who-we-serve/owners' },
            { text: 'General Contractors', path: '/who-we-serve/general-contractors' },
            { text: 'Speciality Contractors', path: '/who-we-serve/speciality-contractors' },
            { text: 'Sub Contractors', path: '/who-we-serve/non-sub-contractors' }
        ];

        // Log the action of hovering over the "Who We Serve" menu
        cy.log('Hovering over Who We Serve Menu');
        cy.get(Locators.whoWeServeMenu).should('exist').realHover(); // Hover over the menu to reveal dropdown
        cy.wait(2000); // Wait for the dropdown to appear

        // Log the action of clicking on the "Who We Serve" menu
        cy.log('Clicking on Who We Serve Menu');
        cy.get(Locators.whoWeServeMenu).click(); // Click the menu to open dropdown
        cy.wait(5000); // Wait for the page to update
        cy.url().should('include', '/who-we-serve'); // Verify the URL contains the correct path

        // Iterate over each submenu item to validate their visibility and URL
        whoWeServeMenuItems.forEach(item => {
            // Log the action of checking each submenu item
            cy.log(`Checking submenu item: ${item.text}`);
            cy.get(Locators.whoWeServeDropdownMenu).contains(item.text).click(); // Click on submenu item
            cy.url().should('include', item.path); // Verify the URL contains the expected path
            cy.wait(1000); // Wait for dropdown to reappear for next iteration
        });
    });


    it('Verify Solution Menu', function () {
        // Validate that the "Solutions" menu exists and click it
        cy.log('Checking Solutions Menu');
        cy.get(Locators.solutionsMenu).should('exist').click();

        // Verify that the URL includes "/solutions" after clicking the menu
        cy.url().should('include', '/solutions');
    });

    it('Verify Blog Menu', function () {
        // Validate that the "Blog" menu exists and click it
        cy.log('Checking Blog Menu');
        cy.get(Locators.blogMenu).should('exist').click();

        // Verify that the URL includes "/blog" after clicking the menu
        cy.url().should('include', '/blog');
    });

    it('Verify Request Demo Button', function () {
        // Validate that the "Request Demo" button exists and click it
        cy.log('Checking Request Demo Button');
        cy.get(Locators.requestDemoButton).should('exist').click();

        // Verify that the URL includes "/contact-us" after clicking the button
        cy.url().should('include', '/contact-us');
    });

});