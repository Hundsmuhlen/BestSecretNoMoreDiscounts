
function resolveAfterMilliSeconds(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(hidePrices());
        }, ms);
    });
}


async function asyncCall() {
    console.log('calling');
    await resolveAfterMilliSeconds(1000);
    await resolveAfterMilliSeconds(3000);
    await resolveAfterMilliSeconds(5000);
    await resolveAfterMilliSeconds(10000);
    await resolveAfterMilliSeconds(20000);
    console.log("calls done");

}


function hidePrices() {
    console.log("Hiding discount Prices now");
    const brand = "Do you really need this?";

    const removalList = [
        'personal-wish-list-product-tile--priceInline',
        'products-carousel-product-tile--priceInline',
        't-value-old',
        't-savings',
        "product-tile--rrp",
        "receipt--savings",
        // "price-and-tax-summary-item receipt--price-and-tax-summary-item",
        "product-tile--label--relative-savings",
        "receipt--regular-price-value"
    ]

    for (let i in removalList) {
        try {
            Array.from(document.getElementsByClassName(removalList[i])).forEach((e) => e.remove(e));
            Array.from(document.getElementsByClassName(removalList[i])).forEach((e) => e.remove(e));
        } catch (error) {
            continue;
        }
    }

    Array.from(document.getElementsByClassName("products-carousel-product-tile--productSoldPrice product-tile--productSoldPrice--withDiscount")).forEach((e) => e.className = "products-carousel-product-tile--productSoldPrice product-tile--productSoldPrice");
    Array.from(document.getElementsByClassName("personal-wish-list-product-tile--productSoldPrice personal-wish-list-product-tile--productSoldPrice--withDiscount")).forEach((e) => e.className = "personal-wish-list-product-tile--productSoldPrice personal-wish-list-product-tile--productSoldPrice");
    Array.from(document.getElementsByClassName("product-tile--sold-price")).forEach((e) => e.style.color = "black");

    Array.from(document.getElementsByClassName("t-value t-highlight")).forEach((e) => e.classList.remove("t-highlight"));
    Array.from(document.getElementsByClassName("t-value t-highlight")).forEach((e) => e.classList.remove("t-highlight"));

    Array.from(document.getElementsByTagName("figcaption")).forEach((f) => {
        // f.children[0].firstChild.text = brand;
        try {
            Array.from(f.getElementsByTagName("h3")).forEach((e) => { e.children[0].text = brand })
        } catch {
            console.log("h3 Error figcaption");
        }
        try {
            Array.from(f.getElementsByTagName("h2")).forEach((e) => { e.children[0].text = brand })
        } catch {
            console.log(" h2 Error figcaption");
        }
    })


    try {
        Array.from(document.getElementsByTagName("h3")).forEach((e) => { e.children[0].text = brand })
    } catch {
        console.log("h3 Error");
    }


    try {
        Array.from(document.getElementsByTagName("h2")).forEach((e) => e.children[0].text = brand)
    } catch {
        console.log("h2 Error");
    }


}

window.onload = function () {
    console.log("page loaded!");
    hidePrices();
    asyncCall();
};