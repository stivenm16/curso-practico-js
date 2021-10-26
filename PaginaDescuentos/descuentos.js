function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const coupons = [code1,code2,code3];

    if (couponValue == coupons[0]) {
        return descuento = 10;
        }
        else if (couponValue == coupons[1]) {
            return descuento = 20;
        }
        else if (couponValue == coupons[2]) {
            return descuento = 30;
        }
        else {
            return descuento = 0;
    }
  }
const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  