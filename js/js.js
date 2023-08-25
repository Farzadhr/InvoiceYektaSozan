const object = {};

function GetInformation() {
  object.FactorDate = $("#FactorDate").val();
  object.FactorId = $("#FactorId").val();
  object.BuyerName = $("#BuyerName").val();
  object.BuyerPhone = $("#BuyerPhone").val();
  object.BuyerAddress = $("#BuyerAddress").val();

  var productclass = document.querySelectorAll(".productdetailclass");
  for (var i = 0; i < productclass.length; i++) {
    var obj = {};
    obj.ProductName = $(`#${productclass[i].id} #ProductName`).val();
    obj.ProductType = $(`#${productclass[i].id} #ProductType`).val();
    obj.ProductCount = $(`#${productclass[i].id} #ProductCount`).val();
    obj.ProductPrice = $(`#${productclass[i].id} #ProductPrice`).val();
    obj.ProductTotalPrice = $(
      `#${productclass[i].id} #ProductTotalPrice`
    ).val();
    object[`obj${i + 1}`] = obj;
  }
  object.TotalPrice = $("#Totalypricesfactor").html();
  object.Desctiption = $("#descriptionFactor").val();
  console.log(object);
  window.location.href =
    "Invoice.html?data=" + encodeURIComponent(JSON.stringify(object));
}

function InitFactor() {
  var urlParams = new URLSearchParams(window.location.search);
  var encodedData = urlParams.get("data");
  var decodedData = decodeURIComponent(encodedData);
  var objectnew = JSON.parse(decodedData);
  if(objectnew == null){
    window.location.href = "InitInvoice.html"
  }
  $("#buyer-name").html(objectnew.BuyerName);
  $("#phonenumber").html(objectnew.BuyerPhone);
  $("#buyer-address").html(objectnew.BuyerAddress);
  $("#invoice-number").html(objectnew.FactorId);
  $("#invoice-date").html(objectnew.FactorDate);

  for(var i in objectnew){
    if(i.indexOf("obj") != -1){
      var getobj = objectnew[i]
      var tdtable = ` <tr>
      <td>${getobj.ProductCount}${getobj.ProductType}</td>
      <td>${getobj.ProductName}</td>
      <td>${getobj.ProductPrice}</td>
      <td>${getobj.ProductTotalPrice}</td>
    </tr>`
    document.getElementById("table").innerHTML += tdtable
    }
  }

  $("#description").html(objectnew.Desctiption);
  $("#Totalprice").html(objectnew.TotalPrice + " تومان");

  
}
