import { ADDRESS, PORT } from "./config/Config";

function Connect(address, port) {
    const apiUrl = `http://${address}:${port}`;
    return apiUrl;
}

function GetShopItems() {
    var apiUrl = Connect(ADDRESS, PORT);
    try {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open("GET", `${apiUrl}/products_list`, false);
        xmlHttp.send();

        var response = JSON.parse(xmlHttp.response);
        return response;
    } catch (exception) {
        console.log(exception);
        return [];
    }

}

function GetBestsellers() {
    var apiUrl = Connect(ADDRESS, PORT);
    try {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open("GET", `${apiUrl}/bestsellers_list`, false);
        xmlHttp.send();

        var response = JSON.parse(xmlHttp.response);
        return response;
    } catch (exception) {
        console.log(exception);
        return [];
    }
}

function PlaceOrder(email, phone, name, amounts, ids) {
    var apiUrl = Connect(ADDRESS, PORT);
    var xmlHttp = new XMLHttpRequest();

    console.log(email, phone, name, amounts, ids);

    var json = JSON.stringify({ "values": [email, phone, name, amounts, ids] });
    xmlHttp.open("POST", `${apiUrl}/place_order`, false);
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xmlHttp.send(json);
}

export { GetShopItems, GetBestsellers, PlaceOrder };