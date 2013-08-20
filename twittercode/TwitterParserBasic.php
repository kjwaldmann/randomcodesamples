function twitter_feed1(){     
    // Your twitter username.
    $username = "@MAET";
    
     
    // Prefix - some text you want displayed before your latest tweet.
    // (HTML is OK, but be sure to escape quotes with backslashes: for example href=\"link.html\")
    $prefix = "";
     
    // Suffix - some text you want display after your latest tweet. (Same rules as the prefix.)
    $suffix = "";
     
    $feed = "http://search.twitter.com/search.atom?q=from:" . $username . "&rpp=1";
  
    function parse_feed($feed) {
    $stepOne = explode("<content type=\"html\">", $feed);
    $stepTwo = explode("</content>", $stepOne[1]);
    $tweet = $stepTwo[0];
    $tweet = str_replace("&lt;", "<", $tweet);
    $tweet = str_replace("&gt;", ">", $tweet);
    $tweet = str_replace("<br>"," ", $tweet);
    return $tweet;
    }
	
    if ($twitterFeed = file_get_contents($feed))
	
    echo  parse_feed($twitterFeed);
	else echo "<p>Twitter feed not available at this time</p>";
}