export function checkLogoPattern (domainname) {
    let patterns = [/https:\/\//g, /http:\/\//g, /www./g,/.com/g];
    patterns.forEach(pattern => {
        domainname = domainname.replace(pattern, "");
    });
    return domainname
}

export function checkFooterPattern (domainname) {
    let patterns = [/https:\/\//g, /http:\/\//g, /www./g];
    patterns.forEach(pattern => {
        domainname = domainname.replace(pattern, "");
    });
    return domainname
}