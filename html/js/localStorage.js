const cardCollection = [{ id: 1, title: "Car 1", description: " My description 1" }, { id: 2, title: "Car 2", description: "My description 1" },
{ id: 3, title: "Car 3", description: "My description 1" }]

cardCollection

localStorage.setItem("cardCollection", JSON.stringify(cardCollection));

JSON.parse(localStorage.getItem("cardCollection"))

JSON.parse(localStorage.getItem(cardCollection))[2]

JSON.parse(localStorage.getItem(cardCollection))[2].description

localStorage.clear();

localStorage.removeItem(cardCollection)

JSON.parse(localStorage.getItem("carCollection"))[2]