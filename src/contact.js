export default function contact() {
    let div = document.querySelector('#content');

    let bodyContainer = document.createElement("div");
    bodyContainer.id = "container";
    div.append(bodyContainer);


    function contactUs() {
        let contactContainer = document.createElement("div");
        contactContainer.id = "contact_container";
        contactContainer.className = "contact_container";
        bodyContainer.append(contactContainer);
        
        let contactHeader = document.createElement("h1");
        contactHeader.id = "contact_header";
        contactHeader.textContent =  "CONTACT US! \n (we need advice)";
        contactContainer.append(contactHeader);

        let contactContent = document.createElement("div");
        contactContent.id = "contact_content";
        contactContent.textContent = "Clownstraat 1 0000 nergens"
        contactContainer.append(contactContent);


    }
    contactUs();
}