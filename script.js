function performSearch(searchType) {
    let originalUrl = document.getElementById("target").value;
    let encodedUrl = encodeURIComponent(originalUrl);
    let searchQuery;

    if (searchType === "Directory") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20intitle:index.of";
    } else if (searchType === "Configuration") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:xml%20|%20ext:conf%20|%20ext:cnf%20|%20ext:reg%20|%20ext:inf%20|%20ext:rdp%20|%20ext:cfg%20|%20ext:txt%20|%20ext:ora%20|%20ext:ini";
    } else if (searchType === "Database") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:sql%20|%20ext:dbf%20|%20ext:mdb";
    } else if (searchType === "Wordpress") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20inurl:wp-%20|%20inurl:wp-content%20|%20inurl:plugins%20|%20inurl:uploads%20|%20inurl:themes%20|%20inurl:download";
    } else if (searchType === "Log") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:log";
    } else if (searchType === "Backup") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:bkf%20|%20ext:bkp%20|%20ext:bak%20|%20ext:old%20|%20ext:backup";
    } else if (searchType === "Login") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20inurl:login%20|%20inurl:signin%20|%20intitle:Login%20|%20intitle:%20signin%20|%20inurl:auth";
    } else if (searchType === "SQL") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20intext:%22sql%20syntax%20near%22%20|%20intext:%22syntax%20error%20has%20occurred%22%20|%20intext:%22incorrect%20syntax%20near%22%20|%20intext:%22unexpected%20end%20of%20SQL%20command%22%20|%20intext:%22Warning:%20mysql_connect()%22%20|%20intext:%22Warning:%20mysql_query()%22%20|%20intext:%22Warning:%20pg_connect()%22";
    } else if (searchType === "Apache") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20filetype:config%20%22apache%22";
    } else if (searchType === "Robots") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2F/robots.txt";
    } else if (searchType === "Eye") {
        searchQuery = "https://domaineye.com/similar/https%3a%2f%2f" + encodedUrl + "%2f";
    } else if (searchType === "Publicly") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:doc%20|%20ext:docx%20|%20ext:odt%20|%20ext:pdf%20|%20ext:rtf%20|%20ext:sxw%20|%20ext:psw%20|%20ext:ppt%20|%20ext:pptx%20|%20ext:pps%20|%20ext:csv";
    } else if (searchType === "PHP") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:php%20intitle:phpinfo%20%22published%20by%20the%20PHP%20Group%22";
    } else if (searchType === "Backdoors") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20%20inurl:shell%20|%20inurl:backdoor%20|%20inurl:wso%20|%20inurl:cmd%20|%20shadow%20|%20passwd%20|%20boot.ini%20|%20inurl:backdoor";
    } else if (searchType === "Install") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20%20inurl:readme%20|%20inurl:license%20|%20inurl:install%20|%20inurl:setup%20|%20inurl:config";
    } else if (searchType === "Redirects") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20inurl:redir%20|%20inurl:url%20|%20inurl:redirect%20|%20inurl:return%20|%20inurl:src=http%20|%20inurl:r=http";
    } else if (searchType === "STRUTS") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20ext:action%20|%20ext:struts%20|%20ext:do";
    } else if (searchType === "Party") {
        searchQuery = "https://www.google.com/search?q=site%3Ahttp%3A%2F%2Fideone.com+|+site%3Ahttp%3A%2F%2Fcodebeautify.org+|+site%3Ahttp%3A%2F%2Fcodeshare.io+|+site%3Ahttp%3A%2F%2Fcodepen.io+|+site%3Ahttp%3A%2F%2Frepl.it+|+site%3Ahttp%3A%2F%2Fjustpaste.it+|+site%3Ahttp%3A%2F%2Fpastebin.com+|+site%3Ahttp%3A%2F%2Fjsfiddle.net+|+site%3Ahttp%3A%2F%2Ftrello.com+|+site%3A*.atlassian.net+|+site%3Abitbucket.org+%22https%3a%2f%2f" + encodedUrl + "%2f%22";
    } else if (searchType === "Check") {
        searchQuery = "https://securityheaders.com/?q=" + encodedUrl + "%2f&followRedirects=on";
    } else if (searchType === "GitLab") {
        searchQuery = "https://www.google.com/search?q=inurl:gitlab%20" + encodedUrl + "%2f";
    } else if (searchType === "Pastebin") {
        searchQuery = "https://www.google.com/search?q=site:pastebin.com%20" + encodedUrl + "%2f";
    } else if (searchType === "Linkdin") {
        searchQuery = "https://www.google.com/search?q=site:linkedin.com%20employees%20" + encodedUrl + "%2f";
    } else if (searchType === "Htacess") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20inurl:%22/phpinfo.php%22%20|%20inurl:%22.htaccess%22";
    } else if (searchType === "Subdomains") {
        searchQuery = "https://www.google.com/search?q=site:*." + encodedUrl + "%2f";
    } else if (searchType === "Sub-Subdomains") {
        searchQuery = "https://www.google.com/search?q=site:*.*." + encodedUrl + "%2f";
    } else if (searchType === "Find-Wordpress") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20inurl:wp-content%20|%20inurl:wp-includes";
    } else if (searchType === "Bitbucket") {
        searchQuery = "https://www.google.com/search?q=site%3Aatlassian.net+|+site%3Abitbucket.org+%22" + encodedUrl + "%2f%22";
    } else if (searchType === "Passive") {
        searchQuery = "https://community.riskiq.com/search/" + encodedUrl + "%2f";
    } else if (searchType === "Stackoverflow") {
        searchQuery = "https://www.google.com/search?q=site:stackoverflow.com%20%22" + encodedUrl + "%2f%22";
    } else if (searchType === "Wordpress-Wayback") {
        searchQuery = "http://wwwb-dedup.us.archive.org:8083/cdx/search?url=" + encodedUrl + "%2f/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=";
    } else if (searchType === "Github") {
        searchQuery = "https://www.google.com/search?q=%22*." + encodedUrl + "%2F%22&type=repositories";
    } else if (searchType === "openbugbounty") {
        searchQuery = "https://www.openbugbounty.org/search/?search=" + encodedUrl + "%2f";
    } else if (searchType === "reddit") {
        searchQuery = "https://www.reddit.com/search/?q=" + encodedUrl + "%2f&rdt=59410";
    } else if (searchType === "cross-domian") {
        searchQuery = "https://www.google.com/search?q=" + encodedUrl + "%2f/crossdomain.xml";
    } else if (searchType === "threatcrowd") {
        searchQuery = "https://threatcrowd.org/domain.php?domain=" + encodedUrl + "%2f";
    } else if (searchType === "git-folder") {
        searchQuery = "https://www.google.com/search?q=inurl:%22/.git%20%22" + encodedUrl + "%2f%20-github";
    } else if (searchType === "youtube") {
        searchQuery = "https://www.youtube.com/results?search_query=" + encodedUrl + "%2f";
    } else if (searchType === "digital") {
        searchQuery = "https://www.google.com/search?q=site:digitaloceanspaces.com%20%22" + encodedUrl + "%2f%22";
    } else if (searchType === "google") {
        searchQuery = "https://www.google.com/search?q=inurl:" + encodedUrl + "%2f%20ext:swf";
    } else if (searchType === "Yandex") {
        searchQuery = "https://yandex.com/search/?text=site%3A" + encodedUrl + "%2F++mime%3Aswf&lr=112509";
    } else if (searchType === "SWFWayback") {
        searchQuery = "https://web.archive.org/cdx/search?url=" + encodedUrl + "%2f/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000";            
    } else if (searchType === "Wayback-Machine2") {
        searchQuery = "https://www.google.com/search?q=inurl:" + encodedUrl + "%2f%20ext:swf";
    } else if (searchType === "Wayback-Machine3") {
        searchQuery = "https://web.archive.org/web/*/" + encodedUrl + "%2f/*";
    } else if (searchType === "Reverse") {
        searchQuery = "https://viewdns.info/reverseip/?host=" + encodedUrl + "%2f&t=1";            
    } else if (searchType === "Traefik") {
        searchQuery = "https://www.google.com/search?q=intitle:traefik+inurl:8080/dashboard%22" + encodedUrl + "%2f%22";            
    } else if (searchType === "Cloud-Storage") {
        searchQuery = "https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q=" + encodedUrl + "%2f";            
    } else if (searchType === "S3-Buckets") {
        searchQuery = "https://www.google.com/search?q=site:.s3.amazonaws.com%20%22" + encodedUrl + "%2f%22";            
    } else if (searchType === "Source-Code") {
        searchQuery = "https://publicwww.com/websites/%22" + encodedUrl + "%2f%22/";            
    } else if (searchType === "CENSYS-ip4") {
        searchQuery = "https://search.censys.io/search?resource=" + encodedUrl;            
    } else if (searchType === "CENSYS-domain") {
        searchQuery = "https://search.censys.io/domain?q=" + encodedUrl + "%2f";            
    } else if (searchType === "CENSYS-CERTS") {
        searchQuery = "https://search.censys.io/certificates?q=" + encodedUrl + "%2f";            
    } else if (searchType === "SHODAN") {
        searchQuery = "https://www.shodan.io/search?query=" + encodedUrl + "%2f";            
    } else if (searchType === "Share-Point") {
        searchQuery = "https://www.google.com/search?q=.sharepoint.com/_vti_bin/webpartpages/asmx%20-docs%20-msdn%20-mdsec%20site:" + encodedUrl + "%2f";            
    } else if (searchType === "WSDL") {
        searchQuery = "https://www.google.com/search?q=site:" + encodedUrl + "%2f%20filetype:wsdl%20|%20filetype:WSDL%20|%20ext:svc%20|%20inurl:wsdl%20|%20Filetype:%20?wsdl%20|%20inurl:asmx?wsdl%20|%20inurl:jws?wsdl%20|%20intitle:_vti_bin/sites.asmx?wsdl%20|%20inurl:_vti_bin/sites.asmx?wsdl";            
    } else if (searchType === "Github-GIST") {
        searchQuery = "https://gist.github.com/search?q=*.%22" + encodedUrl + "%2f%22";            
    } else if (searchType === "CT-logs") {
        searchQuery = "https://crt.sh/?q=" + encodedUrl + "%2f";            
    } else if (searchType === "Password-Leak") {
        searchQuery = "https://www.google.com/search?q=site:throwbin.io%20" + encodedUrl + "%2f";            
    } else if (searchType === "CMS") {
        searchQuery = "https://whatcms.org/?s=" + encodedUrl;            
    }

    let newtab = window.open(searchQuery, '_blank');
}
