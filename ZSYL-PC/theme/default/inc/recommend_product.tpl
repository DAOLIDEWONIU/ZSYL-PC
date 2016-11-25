<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- {if $recommend_product} -->
<div class="incBox">
 <h3><a href="{$url.product}">{$lang.product_news}</a></h3>
 <ul class="recommendProduct">
  <!-- {foreach from=$recommend_product name=recommend_product item=product} -->
  <li{if $smarty.foreach.recommend_product.iteration % 4 eq 0} class="clearBorder"{/if}>
  <p class="img">
  		<a href="{$product.url}"><img src="{$product.image}" width="{$site.thumb_width}" height="{$site.thumb_height}" /></a> 
  </p>
  <p class="name">
  		
  		<a href="{$product.url}">{$product.name}</a>
  </p>
  <p class="price">{$product.price}</p>
  </li>
  <!-- {/foreach} -->
  <div class="clear"></div>
 </ul>
 <div class="more-btn"> <a href="{$url.product}"> <img src="theme/default/images/more-btn.png" title="点击查看更多产品" alt="点击按钮"/></a></div>
</div>
<!-- {/if} -->