var tableHeader = [
    ["Name product", "Price", "RAM", "Hard drive", "Graphic card", "Color", "Screen"],
    ["Name product", "Price", "RAM", "Internal memory","Font camera","Rear camera","Screen"],
    ["Name product","Price","Sensor","Image processor","Still image resolution"],
];

var productLaptopList = [
    ["Dell Inspiron 3476", "$4800","4GB, DDR4 2133MHz","1TB-HDD","Intel UHD Graphics 620","Black","14.0 inch FHD (1920 x 1080)"],
    ["ASUS", "$7800","4GB (1x4GB) 2400MHz DDR4","HDD : 500GB SATA 7200 RPM","Intel UHD Graphics 620","Black","14.0 HD (1366x768) Non-Touch Anti-Glare"],
    ["Hp Elitebook 8470p","$130","4GB","HDD 256 GB","HD 4000","White","14 inh" ],
    ["Asus Zenbook", "$7800", "8GB DDR4 2400MHz (Onboard)","256GB SSD M.2 PCIE G3X2", "NVIDIA GeForce GTX 1050 2GB GDDR5 + Intel UHD Graphics 630" ,  "White", "14.0 HD (1366 x 768) Anti-Glare"],
    ["Alienwars","$14500"," 16GB (2x 8GB) DDR4 at 2666MHz","256GB PCIe SSD (Boot) + 1TB 72 00RPM SATA 6Gb/s (Storage)","NVIDIA(R) GeForce(R) GTX 1070 with 8GB GDDR5","White","17.3 inch QHD (2560 x 1440) 12 0Hz TN AG 400-nits w/ NVIDIA G -SYNC, Enabled with Tobii Eye- tracking"],
    ["Asus","$10000"," 8GB DDR4 buzz 2133Mhz","SSD 128GB + HDD 500 GB","NVIDIA Geforce 930MX 2GB","White","15.6 inch FHD (1920x1080)"],
    ["Samsung","$17100"," 8GB DDR4"," Solid-state drive (SSD): 256GB"," Intel Iris Plus Graphic 640","Red","13.5″ PixelSense Display, Resolution 2256 x 1504 (201 PPI)"],
    ["Vaio","$18000","4 GB (4 GB (On Board)) DDR3 SDRAM (upgradeable up to 12 GB)","HDD 750 GB (Serial ATA, 5400 rpm)","2GB DDR3, NVIDIA GeForce GT 640M LE GPU(SPEED MODE) / Intel HD Graphics 4000(STAMINA MODE)","White","15.5 inch wide (Full HD: 1920 x 1080) TFT colour display (VAIO Display Plus, LED backlight)"],
];

var productPhoneList = [
    ["Samsung", "$140", "4 GB","64 GB", "25 MP" ,  "Chính 25 MP & Phụ 8 MP, 5 MP", "Super AMOLED, 6.4 Full HD+"],
    ["Vivo","$148","3 GB","	16 GB","5 MP","13 MP","IPS LCD, 6.0 HD+"],
    ["Huawei Y7","$130","3 GB","32 GB","16 MP","Chính 13 MP & Phụ 2 MP","IPS LCD, 6.26 HD+"],
    ["Oppo F5","$170"," 4 GB","32 GB","20 MP"," 16 MP","IPS LCD, 6.0 Full HD+"],
    ["Iphone X","$250","3 GB","64 GB","7 MP","Chính 12 MP & Phụ 12 MP","OLED, 5.8Super Retina+"],
    ["Samsung 10","$165","6 GB","128 GB","24 MP","Chính 24 MP & Phụ 10 MP, 8 MP, 5 MP","Super AMOLED, 6.3 Full HD+"],
    ["Samsung A10","$171","2 GB","32 GB","5 MP","13 MP","IPS LCD, 6.2 HD+"],
    ["Samsung Galaxy S10","$180","8 GB","128 GB","Chính 10 MP & Phụ 8 MP","Chính 12 MP & Phụ 12 MP, 16 MP","Dynamic AMOLED, 6.4  Quad HD+ (2K+)"],
];

var productmoviecameraList = [
    ["Sony HXR NX1","$48000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Sony","$42000","CMOS BSI Exmor R","BIONZ X","9.2 MP"],
    ["Andoer 4k 1080p 48MP Wifi KTS","$46000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Elitek 16X","$54000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Canon full HD Legria","$58000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Canon Blue","$59000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["4K HDR FDR AX700","$61000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Sony AXP 35"," $50000","CMOS Exmor R","BIONZ X","9.2 MP"],
];

var productcameraList = [
    ["Sony HXR NX1","$48000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Sony","$42000","CMOS BSI Exmor R","BIONZ X","9.2 MP"],
    ["Andoer 4k 1080p 48MP Wifi KTS","$46000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Elitek 16X","$54000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Canon full HD Legria","$58000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Canon Blue","$59000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["4K HDR FDR AX700","$61000","CMOS Exmor R","BIONZ X","9.2 MP"],
    ["Sony AXP 35"," $50000","CMOS Exmor R","BIONZ X","9.2 MP"],
];

function loadProduct() {
    var listName = localStorage.getItem("listName");
    var index = localStorage.getItem("index");
    var indexHeader;
    var img = localStorage.getItem("img");

    var list = "";
    if (listName == "laptop") {
        list = productLaptopList;
        indexHeader = 0;
    } else if (listName == "phone") {
        list = productPhoneList;
        indexHeader = 1;
    } else if (listName == "moviecamera") {
        list = productmoviecameraList;
        indexHeader = 2;
    } else if (listName == "camera") {
        list = productcameraList;
        indexHeader = 3;
    }
    

    appendTableColumn($("#product-info"), tableHeader[indexHeader]);
    appendTableColumn($("#product-info"), list[index]);
    $("#product-img").attr("src", img);
    tranpose();
}

function appendTableColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function(colIndex, c){ 
        lastRow.append($('<td/>').text(c));
    });
    
    return lastRow;
}

function setValue(listName, index, img) {
    localStorage.setItem("listName", listName);
    localStorage.setItem("index", index);
    localStorage.setItem("img", img);
}


function tranpose() {
    var t = $('#product-info tbody').eq(0);
    var r = t.find('tr');
    var cols= r.length;
    var rows= r.eq(0).find('td').length;
    var cell, next, tem, i = 0;
    var tb= $('<tbody></tbody>');

    while(i<rows){
        cell= 0;
        tem= $('<tr></tr>');
        while(cell<cols){
            next= r.eq(cell++).find('td').eq(0);
            tem.append(next);
        }
        tb.append(tem);
        ++i;
    }
    $('#product-info').append(tb);
    $('#product-info').show();
}

$(document).ready(function() {
    $("#btnLike").click(function(){
        alert("You drop heart for me. Thanks you very much <3")
    });

    $('#btnBuy').click(function(){
        alert("Add to my bag. Thanks you very much <3")
    })

});

