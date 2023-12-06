class Flat {
    constructor(address1, rooms1, price1, repair1) {
        this.address = address1;
        this.rooms = rooms1;
        this.price = price1;
        this.repair = repair1;
    }

    show() {
        let html = "";
        html += "<tr>";
        html += "<td>" + this.address + "</td>";
        html += "<td>" + this.rooms + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "<td>" + this.repair + "</td>";
        html += "</tr>";
        return html;
    }
}

const flats = [
    new Flat("вул. Героїв полку «Азов», 4в", 2, 165000, "дизайнерський"),
    new Flat("вул. Березняківська, 6", 2, 38999, "задовільний"),
    new Flat("Голосіївський просп., 60", 2, 319000, "дизайнерський"),
    new Flat("вул. Мазепи Івана", 3, 350000, "дизайнерський"),
    new Flat("вул. Дегтярна, 8", 2, 260000, "євроремонт"),
];

function flat_ras() {
    var html = "<table>";
    html += "<tr><td>Адреса</td><td>К-сть кімнат</td><td>Ціна (долари)</td><td>Ремонт</td></tr>";
    flats.forEach(function (flat) {
        html += flat.show();
    });
    html += "</table>";
    document.getElementById("result").innerHTML = html;
}
