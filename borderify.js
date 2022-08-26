document.body.style.border = "5px solid red";

document.evaluate('/html/body/div[6]/div[4]/div[1]/div[2]/div[4]/div[2]/ul[1]/li[1]/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'xxxx';

var currentLocation = window.location;
if (currentLocation == "https://codeforces.com/profile/nobita1729") {
    // document.getElementsByTagName('span').style.backgroundColor = 'black';

    document.evaluate('/html/body/div[6]/div[4]/div[2]/div[2]/div[5]/div[2]/div/div[1]/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'pepega';
    document.evaluate('/html/body/div[6]/div[4]/div[2]/div[2]/div[5]/div[2]/ul/li[1]/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'xxxx';
    document.evaluate('/html/body/div[6]/div[4]/div[2]/div[2]/div[5]/div[2]/ul/li[1]/span[2]/span[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'xxxx';
    document.evaluate('/html/body/div[6]/div[4]/div[2]/div[2]/div[5]/div[2]/ul/li[1]/span[2]/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent = 'pepega';
    // document.getElementsByClassName("usercyan").style.border = "purple";

    // var ah = document.getElementsByClassName("user-cyan");
    // console.log(len(ah));
    // document.querySelector("user-rank").setAttribute("style", "background-color:red;");
    // .user-rank > span:nth-child(1)
    // document.querySelector('.user-rank > span:nth-child(1)').setAttribute('color', 'black');
}
// document.body.div[6].div[4].div[2].div[2].div[5].

