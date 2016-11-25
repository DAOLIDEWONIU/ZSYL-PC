<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<div class="slideShow">
 <ul class="slides">
  <!-- {foreach from=$show_list name=show item=show} -->
  <li style="min-width:1200px;"><a href="{$show.show_link}" target="_blank" style="background-image:url({$show.show_img})"></a></li>
  <!-- {/foreach} -->
 </ul>
 <div class="clear"></div>
</div>
<script type="text/javascript">
{literal}
$(document).ready(function(){
 $('.slides li').eq(1).append("<div class='gificon'></div>");
 $('.slides').bxSlider({
   mode: 'fade'
 });
})
{/literal}
</script>