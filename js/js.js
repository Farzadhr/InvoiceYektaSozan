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
  if (objectnew == null) {
  }
  $("#buyer-name").html(objectnew.BuyerName);
  $("#phonenumber").html(objectnew.BuyerPhone);
  $("#buyer-address").html(objectnew.BuyerAddress);
  $("#invoice-number").html(objectnew.FactorId);
  $("#invoice-date").html(objectnew.FactorDate);
  $("#description").html(objectnew.Desctiption);
  for (var i in objectnew) {
    if (i.indexOf("obj") != -1) {
      var getobj = objectnew[i];
      var tdtable = ` <tr style="border-top: 1px #919191 solid;">
      <td>${getobj.ProductCount} ${getobj.ProductType}</td>
      <td>${getobj.ProductName}</td>
      <td>${getobj.ProductPrice}</td>
      <td>${getobj.ProductTotalPrice}</td>
    </tr>`;
      document.getElementById("table").innerHTML += tdtable;
    }
  }

  $("#EditFactor").click(function (e) {
      window.location.href =
        "InitInvoice.html?data=" + encodeURIComponent(JSON.stringify(objectnew));
  });

  $("#Totalprice").html(objectnew.TotalPrice + " ریال");
  var captureDiv = document.getElementById("Invoice");
  $("#GetFactor").click(function (e) {
    html2canvas(captureDiv, {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var downloadLink = document.getElementById("downloadimglink");

      var imgDataUrl = canvas.toDataURL("image/png");

      downloadLink.href = imgDataUrl;

      downloadLink.download = `فاکتور-${objectnew.BuyerName}-${objectnew.FactorId}.png`;

      downloadLink.click();
    });
  });
}
