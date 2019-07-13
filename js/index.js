const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]
["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent ["main-content"]["middle-img-src"])

let anchors = document.querySelector('nav a');

let anchorInfo = ['Services', 'Product', 'Vision', 'Features','About','Contact'];

anchorInfo.forEach(anchorInfo => {
  const element = 
  document.createElement('a')
  element.textContent = anchorInfo
  anchors.append(element)
});

let ctaButton =
document.querySelector('button');
ctaCutton.textContent = siteContent['cta']['button'];

let ctaHeading = 
document.querySelector('h1');
ctaHeading.textContent = sitContent['cta']['h1'];

let testNodeList =
document.querySelectorAll('.top-content .text-content h4')
let nodeListContent =
document.querySelectorAll('.top-content .text-content p')
testNodeList[0].textContent = siteContent['main-content,']['features-h4'];
nodeListContent[0].textContent = siteContent['main-content']['features-content']
testNodeList[1].textContent = siteContent['main-content']['about-h4'];
nodeListContent[1].textContent = siteContent['main-content']['about-content']

//bottom content

let bottomNodeListh4 = document.querySelectorAll('.bottom-content .text-content h4')
bottomNodeListh4[0].textContent = siteContent['main-content']['services-h4']
bottomNodeListh4[1].textContent = siteContent['main-content']['product-h4']
bottomNodeListh4[2].textContent = siteContent['main-content']['vision-h4']


let bottomNodeListContent = document.querySelectorAll('.bottom-content .text-content p')
bottomNodeListContent[0].textContent = siteContent['main-content']['services-content']
bottomNodeListContent[1].textContent = siteContent['main-content']['product-content']
bottomNodeListContent[2].textContent = siteContent['main-content']['vision-content']

//contact

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactInfo = ['123 Way 456 Street Somewhere, USA','1 (888) 888-8888','sales@greatidea.io'];

let contactP = document.querySelector('.contact p');

contactInfo.forEach(contactInfo => {
  const element = document.createElement('li')
  element.textContent = contactInfo
  contactP.append(element)
})

//footer

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

