export default function home(){

    let div = document.querySelector('#content');

    function bio () {
        let bioContainer = document.createElement("div");
        bioContainer.id = "bio_container";
        div.append(bioContainer);
        
        let bio = document.createElement("div");
        bioContainer.append(bio);
        bio.id = "bio";
        bio.textContent = "Here at Ferrari's Fantastic Failures we are dedicated to providing the \
        integrity of the classic Ferrari formula: Speed, Failure and an exquisite lack of direction";
    }
    function hours() {
        let hoursContainer = document.createElement("div");
        hoursContainer.id = "hours_container";
        div.append(hoursContainer);


        let hours = document.createElement("div");
        hours.id = "hours";
        hoursContainer.append(hours)
        hours.textContent= "whenever we aren't pitting Charles  ";

        let hoursHeader = document.createElement("div");
        hoursHeader.id = "hours_header"
        hours.append(hoursHeader);
        hoursHeader.textContent = "HOURS:"
    }

    function location() {
        let locationContainer = document.createElement("div");
        locationContainer.id = "hours_container";
        div.append(locationContainer);

        let location = document.createElement("div");
        location.id = "location";
        locationContainer.append(location);
        location.textContent= "we don't even have hours and you think we have a \"location\"";

        let locationHeader = document.createElement("div");
        locationHeader.id = "hours_header"
        location.append(locationHeader);
        locationHeader.textContent = "LOCATION:"
    }
    bio();
    hours();
    location();
}
