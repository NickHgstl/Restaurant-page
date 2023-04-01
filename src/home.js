export default function home(){

    let div = document.querySelector('#content');

    let bodyContainer = document.createElement("div");
        bodyContainer.id = "container";
        div.append(bodyContainer);

    function bio () {
        let bioContainer = document.createElement("div");
        bioContainer.id = "bio_container";
        bioContainer.className = "home_container";
        bodyContainer.append(bioContainer);

        let bioHeader = document.createElement("h1");
        bioHeader.id = "bio_header";
        bioHeader.className = "home_header";
        bioContainer.append(bioHeader);
        bioHeader.textContent = "Bio:";
        
        let bio = document.createElement("div");
        bioContainer.append(bio);
        bio.id = "bio_content";
        bio.textContent = "Here at Ferrari's Fantastic Failures we are dedicated to providing the \
        integrity of the classic Ferrari formula: Speed, Failure and an exquisite lack of direction";
    }

    function hours() {
        let hoursContainer = document.createElement("div");
        hoursContainer.id = "hours_container";
        hoursContainer.className = "home_container"
        bodyContainer.append(hoursContainer);

        let hoursHeader = document.createElement("h1");
        hoursHeader.id = "hours_header";
        hoursHeader.className = "home_header";
        hoursContainer.append(hoursHeader);
        hoursHeader.textContent = "HOURS:";

        let hours = document.createElement("div");
        hours.id = "hours_content";
        hoursContainer.append(hours)
        hours.textContent= "whenever we aren't pitting Charles  ";

        
    }

    function location() {
        let locationContainer = document.createElement("div");
        locationContainer.id = "location_container";
        locationContainer.className = "home_container";
        bodyContainer.append(locationContainer);

        let locationHeader = document.createElement("h1");
        locationHeader.id = "location_header"
        locationHeader.className = "home_header"
        locationContainer.append(locationHeader);
        locationHeader.textContent = "LOCATION:"

        let location = document.createElement("div");
        location.id = "location_content";
        locationContainer.append(location);
        location.textContent= "we don't even have hours and you think we have a \"location\"";

        
    }
    bio();
    hours();
    location();
}
