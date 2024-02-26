// getting memroy's input and update values
const memoryInputUpdate = (amount) => {
  const memoryCostInputTag = document.getElementById("memory-cost");
  memoryCostInputTag.innerText = amount;
  getingTotal();
};

// getting storage input and update values
const storageInputUpdate = (amount) => {
  const storageCostInputTag = document.getElementById("storage-cost");
  storageCostInputTag.innerText = amount;
  getingTotal();
};

// delivery cost handling
const deliveryCostHandle = (amount) => {
  const deliveryCostInputTag = document.getElementById("delivery-cost");
  deliveryCostInputTag.innerText = amount;
  getingTotal();
};

// 8GB button works
document.getElementById("button-eight").addEventListener("click", () => {
  memoryInputUpdate(0);
});

// 16GB button works
document.getElementById("button-sixteen").addEventListener("click", () => {
  memoryInputUpdate(180);
});

// 256GB button works
document.getElementById("button-256-gb").addEventListener("click", () => {
  storageInputUpdate(0);
});

// 512GB button works
document.getElementById("button-512-gb").addEventListener("click", () => {
  storageInputUpdate(100);
});

// 1TB button works
document.getElementById("button-1-tb").addEventListener("click", () => {
  storageInputUpdate(180);
});

// free delivery work
document.getElementById("free-delivery").addEventListener("click", () => {
  deliveryCostHandle(0);
});

// primium delivery work
document.getElementById("primium-delivery").addEventListener("click", () => {
  deliveryCostHandle(20);
});

// calculate total price
const getingTotal = () => {
  const memoryCostInputTag = document.getElementById("memory-cost");
  const memoryTotal = parseInt(memoryCostInputTag.innerText);

  const storageCostInputTag = document.getElementById("storage-cost");
  const storageTotal = parseInt(storageCostInputTag.innerText);

  const deliveryCostInputTag = document.getElementById("delivery-cost");
  const deliveryTotal = parseInt(deliveryCostInputTag.innerText);
  const totalPriceTag = document.getElementById("total-price");

  totalPriceTag.innerText = memoryTotal + storageTotal + deliveryTotal + 1299;

  const totalTaxTag = document.getElementById("total-tax");
  totalTaxTag.innerText = memoryTotal + storageTotal + deliveryTotal + 1299;
};

// promo code section work
document.getElementById("apply-button").addEventListener("click", () => {
  const applyButtonTag = document.getElementById("apply-button");

  const applyInputTag = document.getElementById("apply-input");
  const applyPromoCode = applyInputTag.value;
  const totalTag = document.getElementById("total-tax");
  const total = parseFloat(totalTag.innerText);
  const discountPers = total * 0.2;
  const totalAmount = total - discountPers;

  if (applyPromoCode == "stevekaku") {
    totalTag.innerText = totalAmount;
    applyInputTag.value = "";
    applyButtonTag.disabled = true;
    applyButtonTag.innerText = "Applied";
  } else {
    alert("please enter valid promo code!");
    applyInputTag.value = "";
  }
});
