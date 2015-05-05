<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){

  $("SELECTOR OF LINK").attr("href", "WHERE YOU WANT LINK TO GO TO NOW");

});

</script>

// add class to existing link and then change it:

<script type= "text/javascript">
	$(document).ready(function(){
		$('a[href="CURRENT HREF"]').attr('class', 'CLASS NAME');
		$(".CLASS NAME").prop('href', 'NEW HREF');
	});
</script>
