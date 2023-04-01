export default function recipes(){
    let div = document.querySelector('#content');

    let bodyContainer = document.createElement("div")
    bodyContainer.id = "container"
    div.append(bodyContainer)
    
    function recipe1 (){
            let recipe1Container = document.createElement("div");
            recipe1Container.id = "recipe1_container";
            recipe1Container.className = "recipes_container";
            bodyContainer.append(recipe1Container);

            let recipe1Header = document.createElement("h1");
            recipe1Header.id = "recipe1_header";
            recipe1Header.className = "recipes_header";
            recipe1Container.append(recipe1Header);
            recipe1Header.textContent = "The Schumacher-Villeneuve Special";

            let recipe1 = document.createElement("div");
            recipe1.id = "recipe1";
            recipe1.className = "recipes_content"
            recipe1Container.append(recipe1);
            recipe1.textContent = "Here at Ferrari's Fantastic Failures we don't like losing \
            so witness this bang of a dish. (Schumacher crashed out and lost the race.)";

            let image = document.createElement("img");
            image.id = "recipe1_image"
            recipe1Container.append(image);
            image.src = '/home/nick/repos/Restaurant-page/src/pictures/Villeneuve.png'
    }

    function recipe2 (){
        let recipe2Container = document.createElement("div");
        recipe2Container.id = "recipe2_container";
        recipe2Container.className = "recipes_container";
        bodyContainer.append(recipe2Container);

        let recipe2Header = document.createElement("h1");
        recipe2Header.id = "recipe2_header";
        recipe2Header.className = "recipes_header";
        recipe2Container.append(recipe2Header);
        recipe2Header.textContent = "The Monaco Maserclass";

        let recipe2 = document.createElement("div");
        recipe2.id = "recipe2";
        recipe2.className = "recipes_content"
        recipe2Container.append(recipe2);
        recipe2.textContent = "What do you do if you're not the fastest but still wanna start on pole?\
        Just park it diagonally.";

        let image = document.createElement("img");
        image.id = "recipe2_image"
        recipe2Container.append(image);
        image.src = '/home/nick/repos/Restaurant-page/src/pictures/monaco2006.jpg'
    }

    function recipe3 (){
        let recipe3Container = document.createElement("div");
        recipe3Container.id = "recipe3_container";
        recipe3Container.className = "recipes_container";
        bodyContainer.append(recipe3Container);

        let recipe3Header = document.createElement("h1");
        recipe3Header.id = "recipe3_header";
        recipe3Header.className = "recipes_header";
        recipe3Container.append(recipe3Header);
        recipe3Header.textContent = "The Binotto Nduja";

        let recipe3 = document.createElement("div");
        recipe3.id = "recipe3";
        recipe3.className = "recipes_content"
        recipe3Container.append(recipe3);
        recipe3.textContent = "For if you're feeling really spicy.";

        let image = document.createElement("img");
        image.id = "recipe3_image"
        recipe3Container.append(image);
        image.src = '/home/nick/repos/Restaurant-page/src/pictures/Binotto.jpg'
    }

    function recipe4 (){
        let recipe4Container = document.createElement("div");
        recipe4Container.id = "recipe4_container";
        recipe4Container.className = "recipes_container";
        bodyContainer.append(recipe4Container);

        let recipe4Header = document.createElement("h1");
        recipe4Header.id = "recipe4_header";
        recipe4Header.className = "recipes_header";
        recipe4Container.append(recipe4Header);
        recipe4Header.textContent = "Tyre Strategy Sauvant";

        let recipe4 = document.createElement("div");
        recipe4.id = "recipe4";
        recipe4.className = "recipes_content"
        recipe4Container.append(recipe4);
        recipe4.textContent = "instead of pittin for dry tyres we went out of our way \
        and left the inters out to season a little bit for extra flavor just so you can experience this unique\
        dish.";

        let image = document.createElement("img");
        image.id = "recipe4_image"
        recipe4Container.append(image);
        image.src = '/home/nick/repos/Restaurant-page/src/pictures/leclerc.jpg'
    }

    recipe1();
    recipe2();
    recipe3();
    recipe4();
}