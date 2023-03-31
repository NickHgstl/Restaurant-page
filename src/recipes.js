export default function recipes(){
    let div = document.querySelector('#content');
    
        let recipe1Container = document.createElement("div");
        recipe1Container.id = "recipe1_container";
        div.append(recipe1Container);

        let recipe1 = document.createElement("div");
        recipe1.id = "recipe1";
        recipe1Container.append(recipe1);
        recipe1.textContent = "3 STOP MONACO";


    
}