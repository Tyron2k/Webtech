        $(document).ready(function() {
            $.getJSON("http://rfid.wifa.uni-leipzig.de/webtech1/news.json.php", function(data) {
                $.each(data.News, function() {
                    //alert(this.Meldung);
                $("#_news").append('<li><div>' + this.Datum + '</div><div>' + this.Meldung + '</div></li>');                    
                });
                $("ul").listview('refresh');
            });
        });