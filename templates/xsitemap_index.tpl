		<div class="sitemap">
		<{include file="db:xsitemap_style.html"}>
		<h1 style="color:#333;"><{$smarty.const._MA_XSITEMAP}></h1>
			<ul id="utilityNav">
				<li><a href="<{$xoops_url}>/register.php"><{$smarty.const._MA_XSITEMAP_REGISTER}></a></li>
				<li><a href="<{$xoops_url}>/user.php"><{$smarty.const._MA_XSITEMAP_LOGIN}></a></li>
				<li><a href="<{$xoops_url}>/modules/xsitemap"><{$smarty.const._MA_XSITEMAP_SITEMAP}></a></li>
			</ul>

			<ul id="primaryNav" class="col<{$num_col}>">
				<li id="home"><a href="<{$xoops_url}>/"><{$smarty.const._MA_XSITEMAP_HOME}></a></li>
					<{foreach name=i item=module from=$xsitemap.modules}>
						<{include file="db:xsitemap_slickmap.html"}>
					<{/foreach}>
					
			</ul>
		</div>
		<div class="navbar navbar-default navbar-static-top">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			<a class="navbar-brand" href="#">Brand</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#" data-toggle="dropdown" class="dropdown-toggle">Links <b class="caret"><!----></b></a>
						<ul role="menu" class="dropdown-menu">
							<li><a href="#" target="_self">Link Submenu 1</a></li>
							<li><a href="#" target="_self">Link SubMenu 2</a></li>
						</ul>
					</li>
					<li><a href="#" data-toggle="dropdown" class="dropdown-toggle">More <b class="caret"><!----></b></a>
						<ul role="menu" class="dropdown-menu">
							<li><a href="#" target="_self">More Submenu 1</a></li>
							<li><a href="#" target="_self">More SubMenu 2</a></li>
						</ul>
					</li>
					<li><a href="http://www.yahoo.com" target="_blank">Go To Yahoo In New Window</a></li>
				</ul>
			</div>
		</div>
		<div class="container" id="treeContainer">
		  <p>This demonstration auto-generates a doc tree site map (below) from the Bootstrap navbar (above). Font Awesome required.</p>
		  <p><a href="#" id="link_expandAllButton">Expand All</a> / <a href="#" id="link_collapseAllButton">Collapse All</a></p>
		</div>