(function() {
    const people = [
        {name: "name 1", street: "street 1", city: "city 1", state: "state 1", country: "country 1", telephone: "telephone 1", birthday: "birthday 1"},
        {name: "name 2", street: "street 2", city: "city 2", state: "state 2", country: "country 2", telephone: "telephone 2", birthday: "birthday 2"},
        {name: "name 3", street: "street 3", city: "city 3", state: "state 3", country: "country 3", telephone: "telephone 3", birthday: "birthday 3"},
        {name: "name 4", street: "street 4", city: "city 4", state: "state 4", country: "country 4", telephone: "telephone 4", birthday: "birthday 4"},
        {name: "name 5", street: "street 5", city: "city 5", state: "state 5", country: "country 5", telephone: "telephone 5", birthday: "birthday 5"},
        {name: "name 6", street: "street 6", city: "city 6", state: "state 6", country: "country 6", telephone: "telephone 6", birthday: "birthday 6"},
        {name: "name 7", street: "street 7", city: "city 7", state: "state 7", country: "country 7", telephone: "telephone 7", birthday: "birthday 7"},
    ];

    let names = document.getElementsByClassName("name") as HTMLCollectionOf<HTMLHeadingElement>;
    names = Array.from(names);



    names.forEach((name, index) => {
        let thisPane = document.getElementById(`pane-${index + 1}`);
        const content = document.getElementById("contentID");
        const keys = Object.keys(people[0]).slice(1); // exclude the name property
        for (let i = 0; i < keys.length; i++) {
            const span = document.createElement("span");
            span.innerText = keys[i];
            thisPane?.appendChild(span);

            span.addEventListener("click", function() {
                content?.innerText = people[index][keys[i]];
            })
        }
        name.addEventListener("click", function() {
            thisPane?.classList.toggle("visible");
            name.classList.toggle("clicked");
            // its taking up whole space
            // when clicked on one name, another shouldnt be clicked
        })
        
    });



    function showContent(pane) {


        // people.forEach(person => {
            
        // })

        
    }


    // maybe like id bookmark? so when you click it mvoes to that id
})();