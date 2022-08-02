// ================= start header ============= //
function viewNavMobile() {
    let btnNav = document.getElementById("btn-nav");
    let btnclose = document.getElementById("btn-close");
    let navMobile = document.getElementById("nav-mobile");
    btnNav.setAttribute("style", "display:none;");
    navMobile.setAttribute("style", "display:block;");
    btnclose.setAttribute("style", "");


}

function closeNavMobile() {
    let btnNav = document.getElementById("btn-nav");
    let btnclose = document.getElementById("btn-close");
    let navMobile = document.getElementById("nav-mobile");
    btnNav.setAttribute("style", "");
    navMobile.setAttribute("style", "display:none;");
    btnclose.setAttribute("style", "display:none");


}


function search() {
    let formCari = document.getElementById("search");
    let btnCari = document.getElementById("btn-cari");
    let closeSearch = document.getElementById("closeSearch");

    closeSearch.setAttribute("style", "");
    btnCari.setAttribute("style", "display:none;")
    formCari.setAttribute("style", "");
}

function closeSearch() {
    let formCari = document.getElementById("search");
    let btnCari = document.getElementById("btn-cari");
    let closeSearch = document.getElementById("closeSearch");

    closeSearch.setAttribute("style", "display:none;");
    btnCari.setAttribute("style", "")
    formCari.setAttribute("style", "display:none;");
}

function searchMobile() {
    let formCari = document.getElementById("search-mobile");
    let btnCari = document.getElementById("btn-cari-mobile");
    let closeSearch = document.getElementById("closeSearchMobile");

    closeSearch.setAttribute("style", "");
    btnCari.setAttribute("style", "display:none;")
    formCari.setAttribute("style", "");
}

function closeSearchMobile() {
    let formCari = document.getElementById("search-mobile");
    let btnCari = document.getElementById("btn-cari-mobile");
    let closeSearch = document.getElementById("closeSearchMobile");

    closeSearch.setAttribute("style", "display:none;");
    btnCari.setAttribute("style", "")
    formCari.setAttribute("style", "display:none;");
}

// ================= end header ============= //